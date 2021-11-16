package fr.yodamad.svn2git.web.rest;

import org.junit.jupiter.api.*;

public class UserJWTControllerTest {
    @Nested
    @DisplayName("Tests for the method JWTToken.setIdToken")
    class JWTToken_setIdTokenTests {
        @Test
        void test1() {
            String value = " ";
            UserJWTController.JWTToken object = new UserJWTController.JWTToken();
            object.setIdToken(value);
        }
        @Test
        void test2() {
            String value = "";
            UserJWTController.JWTToken object = new UserJWTController.JWTToken();
            object.setIdToken(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method authorize")
    class authorizeTests {
        @Test
        void test1() {
            float value = -100;
            UserJWTController object = new UserJWTController();
            object.authorize(value);
        }
        @Test
        void test2() {
            float value = 100;
            UserJWTController object = new UserJWTController();
            object.authorize(value);
        }
        @Test
        void test3() {
            int value = -1;
            UserJWTController object = new UserJWTController();
            object.authorize(value);
        }
        @Test
        void test4() {
            String value = "Credit Card Account";
            UserJWTController object = new UserJWTController();
            object.authorize(value);
        }
        @Test
        void test5() {
            int value = 1;
            UserJWTController object = new UserJWTController();
            object.authorize(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserJWTController object = new UserJWTController();
            object.authorize(value);
        }
    }
}
