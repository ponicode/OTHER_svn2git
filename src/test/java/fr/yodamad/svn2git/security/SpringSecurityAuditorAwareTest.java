package fr.yodamad.svn2git.security;

import org.junit.jupiter.api.*;

public class SpringSecurityAuditorAwareTest {
    @Nested
    @DisplayName("Tests for the method getCurrentAuditor")
    class getCurrentAuditorTests {
        @Test
        void test1() {
            SpringSecurityAuditorAware object = new SpringSecurityAuditorAware();
            object.getCurrentAuditor();
        }
    }
}
