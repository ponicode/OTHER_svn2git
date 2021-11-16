package fr.yodamad.svn2git.repository;

import org.junit.jupiter.api.*;

public class UserRepositoryTest {
    @Nested
    @DisplayName("Tests for the method findOneByActivationKey")
    class findOneByActivationKeyTests {
        @Test
        void test1() {
            String value = "logistical";
            UserRepository object = new UserRepository();
            object.findOneByActivationKey(value);
        }
        @Test
        void test2() {
            String value = "dedicated";
            UserRepository object = new UserRepository();
            object.findOneByActivationKey(value);
        }
        @Test
        void test3() {
            String value = "value-added";
            UserRepository object = new UserRepository();
            object.findOneByActivationKey(value);
        }
        @Test
        void test4() {
            String value = "methodical";
            UserRepository object = new UserRepository();
            object.findOneByActivationKey(value);
        }
        @Test
        void test5() {
            String value = "4th generation";
            UserRepository object = new UserRepository();
            object.findOneByActivationKey(value);
        }
        @Test
        void test6() {
            String value = "";
            UserRepository object = new UserRepository();
            object.findOneByActivationKey(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findOneByResetKey")
    class findOneByResetKeyTests {
        @Test
        void test1() {
            String value = "DELETE FROM Projects WHERE pid = %s";
            UserRepository object = new UserRepository();
            object.findOneByResetKey(value);
        }
        @Test
        void test2() {
            String value = "UNLOCK TABLES;";
            UserRepository object = new UserRepository();
            object.findOneByResetKey(value);
        }
        @Test
        void test3() {
            String value = "DROP TABLE tmp;";
            UserRepository object = new UserRepository();
            object.findOneByResetKey(value);
        }
        @Test
        void test4() {
            String value = "UPDATE Projects SET pname = %s WHERE pid = %s";
            UserRepository object = new UserRepository();
            object.findOneByResetKey(value);
        }
        @Test
        void test5() {
            String value = "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';";
            UserRepository object = new UserRepository();
            object.findOneByResetKey(value);
        }
        @Test
        void test6() {
            String value = "";
            UserRepository object = new UserRepository();
            object.findOneByResetKey(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllByActivatedIsFalseAndCreatedDateBefore")
    class findAllByActivatedIsFalseAndCreatedDateBeforeTests {
        @Test
        void test1() {
            String value = "2042-12-14T19:16:22.059Z";
            UserRepository object = new UserRepository();
            object.findAllByActivatedIsFalseAndCreatedDateBefore(value);
        }
        @Test
        void test2() {
            String value = "2064-02-20T13:24:33.103Z";
            UserRepository object = new UserRepository();
            object.findAllByActivatedIsFalseAndCreatedDateBefore(value);
        }
        @Test
        void test3() {
            int value = 0.5;
            UserRepository object = new UserRepository();
            object.findAllByActivatedIsFalseAndCreatedDateBefore(value);
        }
        @Test
        void test4() {
            int value = 0.0;
            UserRepository object = new UserRepository();
            object.findAllByActivatedIsFalseAndCreatedDateBefore(value);
        }
        @Test
        void test5() {
            float value = 0.5;
            UserRepository object = new UserRepository();
            object.findAllByActivatedIsFalseAndCreatedDateBefore(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserRepository object = new UserRepository();
            object.findAllByActivatedIsFalseAndCreatedDateBefore(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findOneByLogin")
    class findOneByLoginTests {
        @Test
        void test1() {
            String value = "user name";
            UserRepository object = new UserRepository();
            object.findOneByLogin(value);
        }
        @Test
        void test2() {
            String value = 123;
            UserRepository object = new UserRepository();
            object.findOneByLogin(value);
        }
        @Test
        void test3() {
            String value = "user-name";
            UserRepository object = new UserRepository();
            object.findOneByLogin(value);
        }
        @Test
        void test4() {
            String value = "username";
            UserRepository object = new UserRepository();
            object.findOneByLogin(value);
        }
        @Test
        void test5() {
            String value = "user_name";
            UserRepository object = new UserRepository();
            object.findOneByLogin(value);
        }
        @Test
        void test6() {
            String value = "";
            UserRepository object = new UserRepository();
            object.findOneByLogin(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findOneWithAuthoritiesById")
    class findOneWithAuthoritiesByIdTests {
        @Test
        void test1() {
            int value = 1.0;
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesById(value);
        }
        @Test
        void test2() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesById(value);
        }
        @Test
        void test3() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesById(value);
        }
        @Test
        void test4() {
            float value = 10.0;
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesById(value);
        }
        @Test
        void test5() {
            float value = -1.0;
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesById(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesById(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findOneWithAuthoritiesByLogin")
    class findOneWithAuthoritiesByLoginTests {
        @Test
        void test1() {
            String value = 123;
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesByLogin(value);
        }
        @Test
        void test2() {
            String value = "user-name";
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesByLogin(value);
        }
        @Test
        void test3() {
            String value = "user_name";
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesByLogin(value);
        }
        @Test
        void test4() {
            String value = "username";
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesByLogin(value);
        }
        @Test
        void test5() {
            String value = "user123";
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesByLogin(value);
        }
        @Test
        void test6() {
            String value = "";
            UserRepository object = new UserRepository();
            object.findOneWithAuthoritiesByLogin(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findOneByEmailIgnoreCase")
    class findOneByEmailIgnoreCaseTests {
        @Test
        void test1() {
            String value = "email@Google.com";
            UserRepository object = new UserRepository();
            object.findOneByEmailIgnoreCase(value);
        }
        @Test
        void test2() {
            String value = "TestUpperCase@Example.com";
            UserRepository object = new UserRepository();
            object.findOneByEmailIgnoreCase(value);
        }
        @Test
        void test3() {
            String value = "user1+user2@mycompany.com";
            UserRepository object = new UserRepository();
            object.findOneByEmailIgnoreCase(value);
        }
        @Test
        void test4() {
            String value = "bed-free@tutanota.de";
            UserRepository object = new UserRepository();
            object.findOneByEmailIgnoreCase(value);
        }
        @Test
        void test5() {
            String value = "something.example.com";
            UserRepository object = new UserRepository();
            object.findOneByEmailIgnoreCase(value);
        }
        @Test
        void test6() {
            String value = "";
            UserRepository object = new UserRepository();
            object.findOneByEmailIgnoreCase(value);
        }
    }
}
Email(value);
        }
    }
}
