package fr.yodamad.svn2git.service.dto;

import org.junit.jupiter.api.*;

public class UserDTOTest {
    @Nested
    @DisplayName("Tests for the method getId")
    class getIdTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getId();
        }
    }
    @Nested
    @DisplayName("Tests for the method getLogin")
    class getLoginTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getLogin();
        }
    }
    @Nested
    @DisplayName("Tests for the method setId")
    class setIdTests {
        @Test
        void test1() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            UserDTO object = new UserDTO();
            object.setId(value);
        }
        @Test
        void test2() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            UserDTO object = new UserDTO();
            object.setId(value);
        }
        @Test
        void test3() {
            int value = -1;
            UserDTO object = new UserDTO();
            object.setId(value);
        }
        @Test
        void test4() {
            float value = 1;
            UserDTO object = new UserDTO();
            object.setId(value);
        }
        @Test
        void test5() {
            int value = 1;
            UserDTO object = new UserDTO();
            object.setId(value);
        }
        @Test
        void test6() {
            int value = 0;
            UserDTO object = new UserDTO();
            object.setId(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setLogin")
    class setLoginTests {
        @Test
        void test1() {
            String value = "user name";
            UserDTO object = new UserDTO();
            object.setLogin(value);
        }
        @Test
        void test2() {
            String value = "username";
            UserDTO object = new UserDTO();
            object.setLogin(value);
        }
        @Test
        void test3() {
            String value = "user-name";
            UserDTO object = new UserDTO();
            object.setLogin(value);
        }
        @Test
        void test4() {
            String value = "user123";
            UserDTO object = new UserDTO();
            object.setLogin(value);
        }
        @Test
        void test5() {
            String value = "user_name";
            UserDTO object = new UserDTO();
            object.setLogin(value);
        }
        @Test
        void test6() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setLogin(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getFirstName")
    class getFirstNameTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getFirstName();
        }
    }
    @Nested
    @DisplayName("Tests for the method setFirstName")
    class setFirstNameTests {
        @Test
        void test1() {
            String value = "Edmond";
            UserDTO object = new UserDTO();
            object.setFirstName(value);
        }
        @Test
        void test2() {
            String value = "George";
            UserDTO object = new UserDTO();
            object.setFirstName(value);
        }
        @Test
        void test3() {
            String value = "Anas";
            UserDTO object = new UserDTO();
            object.setFirstName(value);
        }
        @Test
        void test4() {
            String value = "Pierre Edouard";
            UserDTO object = new UserDTO();
            object.setFirstName(value);
        }
        @Test
        void test5() {
            String value = "Jean-Philippe";
            UserDTO object = new UserDTO();
            object.setFirstName(value);
        }
        @Test
        void test6() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setFirstName(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getLastName")
    class getLastNameTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getLastName();
        }
    }
    @Nested
    @DisplayName("Tests for the method setLastName")
    class setLastNameTests {
        @Test
        void test1() {
            String value = "Al Saud";
            UserDTO object = new UserDTO();
            object.setLastName(value);
        }
        @Test
        void test2() {
            String value = "Zong";
            UserDTO object = new UserDTO();
            object.setLastName(value);
        }
        @Test
        void test3() {
            String value = "Baziz";
            UserDTO object = new UserDTO();
            object.setLastName(value);
        }
        @Test
        void test4() {
            String value = "Dupont";
            UserDTO object = new UserDTO();
            object.setLastName(value);
        }
        @Test
        void test5() {
            String value = "Murray-Kynynmound";
            UserDTO object = new UserDTO();
            object.setLastName(value);
        }
        @Test
        void test6() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setLastName(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getEmail")
    class getEmailTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getEmail();
        }
    }
    @Nested
    @DisplayName("Tests for the method setEmail")
    class setEmailTests {
        @Test
        void test1() {
            String value = "something.example.com";
            UserDTO object = new UserDTO();
            object.setEmail(value);
        }
        @Test
        void test2() {
            String value = "bed-free@tutanota.de";
            UserDTO object = new UserDTO();
            object.setEmail(value);
        }
        @Test
        void test3() {
            String value = "user@host:300";
            UserDTO object = new UserDTO();
            object.setEmail(value);
        }
        @Test
        void test4() {
            String value = "TestUpperCase@Example.com";
            UserDTO object = new UserDTO();
            object.setEmail(value);
        }
        @Test
        void test5() {
            String value = "ponicode.com";
            UserDTO object = new UserDTO();
            object.setEmail(value);
        }
        @Test
        void test6() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setEmail(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setImageUrl")
    class setImageUrlTests {
        @Test
        void test1() {
            String value = "http://placeimg.com/640/480";
            UserDTO object = new UserDTO();
            object.setImageUrl(value);
        }
        @Test
        void test2() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setImageUrl(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method isActivated")
    class isActivatedTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.isActivated();
        }
    }
    @Nested
    @DisplayName("Tests for the method setActivated")
    class setActivatedTests {
        @Test
        void test1() {
            boolean value = false;
            UserDTO object = new UserDTO();
            object.setActivated(value);
        }
        @Test
        void test2() {
            boolean value = true;
            UserDTO object = new UserDTO();
            object.setActivated(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setLangKey")
    class setLangKeyTests {
        @Test
        void test1() {
            String value = "cn";
            UserDTO object = new UserDTO();
            object.setLangKey(value);
        }
        @Test
        void test2() {
            String value = "de";
            UserDTO object = new UserDTO();
            object.setLangKey(value);
        }
        @Test
        void test3() {
            String value = "ar";
            UserDTO object = new UserDTO();
            object.setLangKey(value);
        }
        @Test
        void test4() {
            String value = "en";
            UserDTO object = new UserDTO();
            object.setLangKey(value);
        }
        @Test
        void test5() {
            String value = "fr";
            UserDTO object = new UserDTO();
            object.setLangKey(value);
        }
        @Test
        void test6() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setLangKey(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getCreatedBy")
    class getCreatedByTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getCreatedBy();
        }
    }
    @Nested
    @DisplayName("Tests for the method setCreatedBy")
    class setCreatedByTests {
        @Test
        void test1() {
            String value = 60144;
            UserDTO object = new UserDTO();
            object.setCreatedBy(value);
        }
        @Test
        void test2() {
            String value = 23306;
            UserDTO object = new UserDTO();
            object.setCreatedBy(value);
        }
        @Test
        void test3() {
            String value = "91659-4424";
            UserDTO object = new UserDTO();
            object.setCreatedBy(value);
        }
        @Test
        void test4() {
            String value = "73609-2040";
            UserDTO object = new UserDTO();
            object.setCreatedBy(value);
        }
        @Test
        void test5() {
            String value = 62562;
            UserDTO object = new UserDTO();
            object.setCreatedBy(value);
        }
        @Test
        void test6() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setCreatedBy(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getCreatedDate")
    class getCreatedDateTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getCreatedDate();
        }
    }
    @Nested
    @DisplayName("Tests for the method getLastModifiedBy")
    class getLastModifiedByTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getLastModifiedBy();
        }
    }
    @Nested
    @DisplayName("Tests for the method setLastModifiedBy")
    class setLastModifiedByTests {
        @Test
        void test1() {
            String value = 60144;
            UserDTO object = new UserDTO();
            object.setLastModifiedBy(value);
        }
        @Test
        void test2() {
            String value = "91659-4424";
            UserDTO object = new UserDTO();
            object.setLastModifiedBy(value);
        }
        @Test
        void test3() {
            String value = 23306;
            UserDTO object = new UserDTO();
            object.setLastModifiedBy(value);
        }
        @Test
        void test4() {
            String value = "73609-2040";
            UserDTO object = new UserDTO();
            object.setLastModifiedBy(value);
        }
        @Test
        void test5() {
            String value = 62562;
            UserDTO object = new UserDTO();
            object.setLastModifiedBy(value);
        }
        @Test
        void test6() {
            String value = "";
            UserDTO object = new UserDTO();
            object.setLastModifiedBy(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getLastModifiedDate")
    class getLastModifiedDateTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getLastModifiedDate();
        }
    }
    @Nested
    @DisplayName("Tests for the method getAuthorities")
    class getAuthoritiesTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.getAuthorities();
        }
    }
    @Nested
    @DisplayName("Tests for the method setLastModifiedDate")
    class setLastModifiedDateTests {
        @Test
        void test1() {
            int value = -1;
            UserDTO object = new UserDTO();
            object.setLastModifiedDate(value);
        }
        @Test
        void test2() {
            int value = -100;
            UserDTO object = new UserDTO();
            object.setLastModifiedDate(value);
        }
        @Test
        void test3() {
            float value = 1;
            UserDTO object = new UserDTO();
            object.setLastModifiedDate(value);
        }
        @Test
        void test4() {
            float value = 100;
            UserDTO object = new UserDTO();
            object.setLastModifiedDate(value);
        }
        @Test
        void test5() {
            float value = -100;
            UserDTO object = new UserDTO();
            object.setLastModifiedDate(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserDTO object = new UserDTO();
            object.setLastModifiedDate(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setAuthorities")
    class setAuthoritiesTests {
        @Test
        void test1() {
            String value = "1.0.0";
            UserDTO object = new UserDTO();
            object.setAuthorities(value);
        }
        @Test
        void test2() {
            int value = -1.0;
            UserDTO object = new UserDTO();
            object.setAuthorities(value);
        }
        @Test
        void test3() {
            int value = 10.23;
            UserDTO object = new UserDTO();
            object.setAuthorities(value);
        }
        @Test
        void test4() {
            float value = 0.5;
            UserDTO object = new UserDTO();
            object.setAuthorities(value);
        }
        @Test
        void test5() {
            int value = 1.0;
            UserDTO object = new UserDTO();
            object.setAuthorities(value);
        }
        @Test
        void test6() {
            int value = 0;
            UserDTO object = new UserDTO();
            object.setAuthorities(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            UserDTO object = new UserDTO();
            object.toString();
        }
    }
}
