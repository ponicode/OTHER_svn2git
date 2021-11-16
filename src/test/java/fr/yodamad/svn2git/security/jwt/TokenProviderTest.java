package fr.yodamad.svn2git.security.jwt;

import org.junit.jupiter.api.*;

import fr.yodamad.svn2git.security.AuthoritiesConstants;

import static org.assertj.core.api.Assertions.assertThat;

import java.security.Key;
import java.util.*;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.test.util.ReflectionTestUtils;

import io.github.jhipster.config.JHipsterProperties;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import static org.assertj.core.api.Assertions.assertThat;

public class TokenProviderTest {
    private final Base64.Encoder encoder = Base64.getEncoder();
    private final long ONE_MINUTE = 60000;
    private Key key;
    private JHipsterProperties jHipsterProperties;
    private TokenProvider tokenProvider;

    @Before
    public void setup() {
        jHipsterProperties = Mockito.mock(JHipsterProperties.class);
        tokenProvider = new TokenProvider(jHipsterProperties);
        key = Keys.hmacShaKeyFor(Decoders.BASE64
            .decode("fd54a45s65fds737b9aafcb3412e07ed99b267f33413274720ddbb7f6c5e64e9f14075f2d7ed041592f0b7657baf8"));

        ReflectionTestUtils.setField(tokenProvider, "key", key);
        ReflectionTestUtils.setField(tokenProvider, "tokenValidityInMilliseconds", ONE_MINUTE);
    }

    @Test
    public void testReturnFalseWhenJWThasInvalidSignature() {
        boolean isTokenValid = tokenProvider.validateToken(createTokenWithDifferentSignature());

        assertThat(isTokenValid).isEqualTo(false);
    }

    @Test
    public void testReturnFalseWhenJWTisMalformed() {
        Authentication authentication = createAuthentication();
        String token = tokenProvider.createToken(authentication, false);
        String invalidToken = token.substring(1);
        boolean isTokenValid = tokenProvider.validateToken(invalidToken);

        assertThat(isTokenValid).isEqualTo(false);
    }

    @Test
    public void testReturnFalseWhenJWTisExpired() {
        ReflectionTestUtils.setField(tokenProvider, "tokenValidityInMilliseconds", -ONE_MINUTE);

        Authentication authentication = createAuthentication();
        String token = tokenProvider.createToken(authentication, false);

        boolean isTokenValid = tokenProvider.validateToken(token);

        assertThat(isTokenValid).isEqualTo(false);
    }

    @Test
    public void testReturnFalseWhenJWTisUnsupported() {
        String unsupportedToken = createUnsupportedToken();

        boolean isTokenValid = tokenProvider.validateToken(unsupportedToken);

        assertThat(isTokenValid).isEqualTo(false);
    }

    @Test
    public void testReturnFalseWhenJWTisInvalid() {
        boolean isTokenValid = tokenProvider.validateToken("");

        assertThat(isTokenValid).isEqualTo(false);
    }

    private Authentication createAuthentication() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(AuthoritiesConstants.ANONYMOUS));
        return new UsernamePasswordAuthenticationToken("anonymous", "anonymous", authorities);
    }

    private String createUnsupportedToken() {
        return Jwts.builder()
            .setPayload("payload")
            .signWith(key, SignatureAlgorithm.HS512)
            .compact();
    }

    private String createTokenWithDifferentSignature() {
        Key otherKey = Keys.hmacShaKeyFor(Decoders.BASE64
            .decode("Xfd54a45s65fds737b9aafcb3412e07ed99b267f33413274720ddbb7f6c5e64e9f14075f2d7ed041592f0b7657baf8"));

        return Jwts.builder()
            .setSubject("anonymous")
            .signWith(otherKey, SignatureAlgorithm.HS512)
            .setExpiration(new Date(new Date().getTime() + ONE_MINUTE))
            .compact();
    }
    @Nested
    @DisplayName("Tests for the method init")
    class initTests {
        @Test
        void test1() {
            TokenProvider object = new TokenProvider();
            object.init();
        }
    }
    @Nested
    @DisplayName("Tests for the method getAuthentication")
    class getAuthenticationTests {
        @Test
        void test1() {
            String value = "([{";
            TokenProvider object = new TokenProvider();
            object.getAuthentication(value);
        }
        @Test
        void test2() {
            String value = "<";
            TokenProvider object = new TokenProvider();
            object.getAuthentication(value);
        }
        @Test
        void test3() {
            String value = "@";
            TokenProvider object = new TokenProvider();
            object.getAuthentication(value);
        }
        @Test
        void test4() {
            String value = "...";
            TokenProvider object = new TokenProvider();
            object.getAuthentication(value);
        }
        @Test
        void test5() {
            String value = "|";
            TokenProvider object = new TokenProvider();
            object.getAuthentication(value);
        }
        @Test
        void test6() {
            String value = "";
            TokenProvider object = new TokenProvider();
            object.getAuthentication(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method createToken")
    class createTokenTests {
        @Test
        void test1() {
            float value = 100;
            boolean value2 = true;
            TokenProvider object = new TokenProvider();
            object.createToken(value,value2);
        }
        @Test
        void test2() {
            String value = "oAuthToken";
            boolean value2 = false;
            TokenProvider object = new TokenProvider();
            object.createToken(value,value2);
        }
        @Test
        void test3() {
            String value = "oAuthToken";
            boolean value2 = true;
            TokenProvider object = new TokenProvider();
            object.createToken(value,value2);
        }
        @Test
        void test4() {
            float value = 1;
            boolean value2 = false;
            TokenProvider object = new TokenProvider();
            object.createToken(value,value2);
        }
        @Test
        void test5() {
            int value = -100;
            boolean value2 = true;
            TokenProvider object = new TokenProvider();
            object.createToken(value,value2);
        }
        @Test
        void test6() {
            int value = 0;
            boolean value2 = false;
            TokenProvider object = new TokenProvider();
            object.createToken(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the method validateToken")
    class validateTokenTests {
        @Test
        void test1() {
            String value = "u7djsl186ksk99-DsklLk89";
            TokenProvider object = new TokenProvider();
            object.validateToken(value);
        }
        @Test
        void test2() {
            String value = "oAuthToken";
            TokenProvider object = new TokenProvider();
            object.validateToken(value);
        }
        @Test
        void test3() {
            String value = "";
            TokenProvider object = new TokenProvider();
            object.validateToken(value);
        }
    }
}
