package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class UserTest {
    @Nested
    @DisplayName("Tests for the method getId")
    class getIdTests {
        @Test
        void test1() {
            User object = new User();
            object.getId();
        }
    }
    @Nested
    @DisplayName("Tests for the method getLogin")
    class getLoginTests {
        @Test
        void test1() {
            User object = new User();
            object.getLogin();
        }
    }
    @Nested
    @DisplayName("Tests for the method setId")
    class setIdTests {
        @Test
        void test1() {
            int value = 0.5;
            User object = new User();
            object.setId(value);
        }
        @Test
        void test2() {
            float value = -0.5;
            User object = new User();
            object.setId(value);
        }
        @Test
        void test3() {
            float value = 0.0;
            User object = new User();
            object.setId(value);
        }
        @Test
        void test4() {
            int value = 10.23;
            User object = new User();
            object.setId(value);
        }
        @Test
        void test5() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            User object = new User();
            object.setId(value);
        }
        @Test
        void test6() {
            int value = 0;
            User object = new User();
            object.setId(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setLogin")
    class setLoginTests {
        @Test
        void test1() {
            String value = "username";
            User object = new User();
            object.setLogin(value);
        }
        @Test
        void test2() {
            String value = 123;
            User object = new User();
            object.setLogin(value);
        }
        @Test
        void test3() {
            String value = "user name";
            User object = new User();
            object.setLogin(value);
        }
        @Test
        void test4() {
            String value = "user123";
            User object = new User();
            object.setLogin(value);
        }
        @Test
        void test5() {
            String value = "user-name";
            User object = new User();
            object.setLogin(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setLogin(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getPassword")
    class getPasswordTests {
        @Test
        void test1() {
            User object = new User();
            object.getPassword();
        }
    }
    @Nested
    @DisplayName("Tests for the method setPassword")
    class setPasswordTests {
        @Test
        void test1() {
            String value = "NoWiFi4you";
            User object = new User();
            object.setPassword(value);
        }
        @Test
        void test2() {
            String value = "YouarenotAllowed2Use";
            User object = new User();
            object.setPassword(value);
        }
        @Test
        void test3() {
            String value = "!Lov3MyPianoPony";
            User object = new User();
            object.setPassword(value);
        }
        @Test
        void test4() {
            String value = "accessdenied4u";
            User object = new User();
            object.setPassword(value);
        }
        @Test
        void test5() {
            String value = "$p3onyycat";
            User object = new User();
            object.setPassword(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setPassword(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getFirstName")
    class getFirstNameTests {
        @Test
        void test1() {
            User object = new User();
            object.getFirstName();
        }
    }
    @Nested
    @DisplayName("Tests for the method setFirstName")
    class setFirstNameTests {
        @Test
        void test1() {
            String value = "George";
            User object = new User();
            object.setFirstName(value);
        }
        @Test
        void test2() {
            String value = "Michael";
            User object = new User();
            object.setFirstName(value);
        }
        @Test
        void test3() {
            String value = "Anas";
            User object = new User();
            object.setFirstName(value);
        }
        @Test
        void test4() {
            String value = "Jean-Philippe";
            User object = new User();
            object.setFirstName(value);
        }
        @Test
        void test5() {
            String value = "Edmond";
            User object = new User();
            object.setFirstName(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setFirstName(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getLastName")
    class getLastNameTests {
        @Test
        void test1() {
            User object = new User();
            object.getLastName();
        }
    }
    @Nested
    @DisplayName("Tests for the method setLastName")
    class setLastNameTests {
        @Test
        void test1() {
            String value = "Dupont";
            User object = new User();
            object.setLastName(value);
        }
        @Test
        void test2() {
            String value = "Zong";
            User object = new User();
            object.setLastName(value);
        }
        @Test
        void test3() {
            String value = "Al Saud";
            User object = new User();
            object.setLastName(value);
        }
        @Test
        void test4() {
            String value = "Murray-Kynynmound";
            User object = new User();
            object.setLastName(value);
        }
        @Test
        void test5() {
            String value = "Baziz";
            User object = new User();
            object.setLastName(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setLastName(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getEmail")
    class getEmailTests {
        @Test
        void test1() {
            User object = new User();
            object.getEmail();
        }
    }
    @Nested
    @DisplayName("Tests for the method setEmail")
    class setEmailTests {
        @Test
        void test1() {
            String value = "TestUpperCase@Example.com";
            User object = new User();
            object.setEmail(value);
        }
        @Test
        void test2() {
            String value = "something.example.com";
            User object = new User();
            object.setEmail(value);
        }
        @Test
        void test3() {
            String value = "email@Google.com";
            User object = new User();
            object.setEmail(value);
        }
        @Test
        void test4() {
            String value = "bed-free@tutanota.de";
            User object = new User();
            object.setEmail(value);
        }
        @Test
        void test5() {
            String value = "user@host:300";
            User object = new User();
            object.setEmail(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setEmail(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getImageUrl")
    class getImageUrlTests {
        @Test
        void test1() {
            User object = new User();
            object.getImageUrl();
        }
    }
    @Nested
    @DisplayName("Tests for the method setImageUrl")
    class setImageUrlTests {
        @Test
        void test1() {
            String value = "http://placeimg.com/640/480";
            User object = new User();
            object.setImageUrl(value);
        }
        @Test
        void test2() {
            String value = "";
            User object = new User();
            object.setImageUrl(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getActivated")
    class getActivatedTests {
        @Test
        void test1() {
            User object = new User();
            object.getActivated();
        }
    }
    @Nested
    @DisplayName("Tests for the method setActivated")
    class setActivatedTests {
        @Test
        void test1() {
            boolean value = true;
            User object = new User();
            object.setActivated(value);
        }
        @Test
        void test2() {
            boolean value = false;
            User object = new User();
            object.setActivated(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getActivationKey")
    class getActivationKeyTests {
        @Test
        void test1() {
            User object = new User();
            object.getActivationKey();
        }
    }
    @Nested
    @DisplayName("Tests for the method setActivationKey")
    class setActivationKeyTests {
        @Test
        void test1() {
            String value = "value-added";
            User object = new User();
            object.setActivationKey(value);
        }
        @Test
        void test2() {
            String value = "methodical";
            User object = new User();
            object.setActivationKey(value);
        }
        @Test
        void test3() {
            String value = "logistical";
            User object = new User();
            object.setActivationKey(value);
        }
        @Test
        void test4() {
            String value = "dedicated";
            User object = new User();
            object.setActivationKey(value);
        }
        @Test
        void test5() {
            String value = "4th generation";
            User object = new User();
            object.setActivationKey(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setActivationKey(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getResetKey")
    class getResetKeyTests {
        @Test
        void test1() {
            User object = new User();
            object.getResetKey();
        }
    }
    @Nested
    @DisplayName("Tests for the method setResetKey")
    class setResetKeyTests {
        @Test
        void test1() {
            String value = "UNLOCK TABLES;";
            User object = new User();
            object.setResetKey(value);
        }
        @Test
        void test2() {
            String value = "DELETE FROM Projects WHERE pid = %s";
            User object = new User();
            object.setResetKey(value);
        }
        @Test
        void test3() {
            String value = "UPDATE Projects SET pname = %s WHERE pid = %s";
            User object = new User();
            object.setResetKey(value);
        }
        @Test
        void test4() {
            String value = "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';";
            User object = new User();
            object.setResetKey(value);
        }
        @Test
        void test5() {
            String value = "DROP TABLE tmp;";
            User object = new User();
            object.setResetKey(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setResetKey(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getResetDate")
    class getResetDateTests {
        @Test
        void test1() {
            User object = new User();
            object.getResetDate();
        }
    }
    @Nested
    @DisplayName("Tests for the method setResetDate")
    class setResetDateTests {
        @Test
        void test1() {
            float value = 100;
            User object = new User();
            object.setResetDate(value);
        }
        @Test
        void test2() {
            int value = 100;
            User object = new User();
            object.setResetDate(value);
        }
        @Test
        void test3() {
            String value = "01-01-2030";
            User object = new User();
            object.setResetDate(value);
        }
        @Test
        void test4() {
            int value = 0;
            User object = new User();
            object.setResetDate(value);
        }
        @Test
        void test5() {
            int value = -100;
            User object = new User();
            object.setResetDate(value);
        }
        @Test
        void test6() {
            float value = 0;
            User object = new User();
            object.setResetDate(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setLangKey")
    class setLangKeyTests {
        @Test
        void test1() {
            String value = "ar";
            User object = new User();
            object.setLangKey(value);
        }
        @Test
        void test2() {
            String value = "cn";
            User object = new User();
            object.setLangKey(value);
        }
        @Test
        void test3() {
            String value = "en";
            User object = new User();
            object.setLangKey(value);
        }
        @Test
        void test4() {
            String value = "ru";
            User object = new User();
            object.setLangKey(value);
        }
        @Test
        void test5() {
            String value = "fr";
            User object = new User();
            object.setLangKey(value);
        }
        @Test
        void test6() {
            String value = "";
            User object = new User();
            object.setLangKey(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getAuthorities")
    class getAuthoritiesTests {
        @Test
        void test1() {
            User object = new User();
            object.getAuthorities();
        }
    }
    @Nested
    @DisplayName("Tests for the method setAuthorities")
    class setAuthoritiesTests {
        @Test
        void test1() {
            String value = "1.0.0";
            User object = new User();
            object.setAuthorities(value);
        }
        @Test
        void test2() {
            int value = -1.0;
            User object = new User();
            object.setAuthorities(value);
        }
        @Test
        void test3() {
            float value = 0.5;
            User object = new User();
            object.setAuthorities(value);
        }
        @Test
        void test4() {
            String value = "v4.0.0-rc.4";
            User object = new User();
            object.setAuthorities(value);
        }
        @Test
        void test5() {
            float value = 0.0;
            User object = new User();
            object.setAuthorities(value);
        }
        @Test
        void test6() {
            int value = 0;
            User object = new User();
            object.setAuthorities(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method equals")
    class equalsTests {
        @Test
        void test1() {
            float value = -100;
            User object = new User();
            object.equals(value);
        }
        @Test
        void test2() {
            int value = -1;
            User object = new User();
            object.equals(value);
        }
        @Test
        void test3() {
            String value = "something.example.com";
            User object = new User();
            object.equals(value);
        }
        @Test
        void test4() {
            float value = 0;
            User object = new User();
            object.equals(value);
        }
        @Test
        void test5() {
            int value = -100;
            User object = new User();
            object.equals(value);
        }
        @Test
        void test6() {
            int value = 0;
            User object = new User();
            object.equals(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method hashCode")
    class hashCodeTests {
        @Test
        void test1() {
            User object = new User();
            object.hashCode();
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            User object = new User();
            object.toString();
        }
    }
}
