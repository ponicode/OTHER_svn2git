package fr.yodamad.svn2git.web.rest.vm;

import org.junit.jupiter.api.*;

public class LoginVMTest {
    @Nested
    @DisplayName("Tests for the method setUsername")
    class setUsernameTests {
        @Test
        void test1() {
            String value = "user name";
            LoginVM object = new LoginVM();
            object.setUsername(value);
        }
        @Test
        void test2() {
            String value = "username";
            LoginVM object = new LoginVM();
            object.setUsername(value);
        }
        @Test
        void test3() {
            String value = "user_name";
            LoginVM object = new LoginVM();
            object.setUsername(value);
        }
        @Test
        void test4() {
            String value = "user-name";
            LoginVM object = new LoginVM();
            object.setUsername(value);
        }
        @Test
        void test5() {
            String value = "user123";
            LoginVM object = new LoginVM();
            object.setUsername(value);
        }
        @Test
        void test6() {
            String value = "";
            LoginVM object = new LoginVM();
            object.setUsername(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method isRememberMe")
    class isRememberMeTests {
        @Test
        void test1() {
            LoginVM object = new LoginVM();
            object.isRememberMe();
        }
    }
    @Nested
    @DisplayName("Tests for the method setPassword")
    class setPasswordTests {
        @Test
        void test1() {
            String value = "YouarenotAllowed2Use";
            LoginVM object = new LoginVM();
            object.setPassword(value);
        }
        @Test
        void test2() {
            String value = "$p3onyycat";
            LoginVM object = new LoginVM();
            object.setPassword(value);
        }
        @Test
        void test3() {
            String value = "!Lov3MyPianoPony";
            LoginVM object = new LoginVM();
            object.setPassword(value);
        }
        @Test
        void test4() {
            String value = "NoWiFi4you";
            LoginVM object = new LoginVM();
            object.setPassword(value);
        }
        @Test
        void test5() {
            String value = "accessdenied4u";
            LoginVM object = new LoginVM();
            object.setPassword(value);
        }
        @Test
        void test6() {
            String value = "";
            LoginVM object = new LoginVM();
            object.setPassword(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setRememberMe")
    class setRememberMeTests {
        @Test
        void test1() {
            float value = 0.0;
            LoginVM object = new LoginVM();
            object.setRememberMe(value);
        }
        @Test
        void test2() {
            float value = 1.0;
            LoginVM object = new LoginVM();
            object.setRememberMe(value);
        }
        @Test
        void test3() {
            String value = "v4.0.0-rc.4";
            LoginVM object = new LoginVM();
            object.setRememberMe(value);
        }
        @Test
        void test4() {
            String value = "v1.2.4";
            LoginVM object = new LoginVM();
            object.setRememberMe(value);
        }
        @Test
        void test5() {
            float value = 10.0;
            LoginVM object = new LoginVM();
            object.setRememberMe(value);
        }
        @Test
        void test6() {
            float value = 0;
            LoginVM object = new LoginVM();
            object.setRememberMe(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            LoginVM object = new LoginVM();
            object.toString();
        }
    }
}
