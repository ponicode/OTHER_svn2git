package fr.yodamad.svn2git.web.rest;

import org.junit.jupiter.api.*;

public class UserResourceTest {
    @Nested
    @DisplayName("Tests for the method getAllUsers")
    class getAllUsersTests {
        @Test
        void test1() {
            String value = "https://api.telegram.org/bot";
            UserResource object = new UserResource();
            object.getAllUsers(value);
        }
        @Test
        void test2() {
            float value = 10.23;
            UserResource object = new UserResource();
            object.getAllUsers(value);
        }
        @Test
        void test3() {
            String value = "https://";
            UserResource object = new UserResource();
            object.getAllUsers(value);
        }
        @Test
        void test4() {
            int value = 1.0;
            UserResource object = new UserResource();
            object.getAllUsers(value);
        }
        @Test
        void test5() {
            float value = 0.5;
            UserResource object = new UserResource();
            object.getAllUsers(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserResource object = new UserResource();
            object.getAllUsers(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method updateUser")
    class updateUserTests {
        @Test
        void test1() {
            float value = -100;
            UserResource object = new UserResource();
            object.updateUser(value);
        }
        @Test
        void test2() {
            int value = -1;
            UserResource object = new UserResource();
            object.updateUser(value);
        }
        @Test
        void test3() {
            String value = "username";
            UserResource object = new UserResource();
            object.updateUser(value);
        }
        @Test
        void test4() {
            float value = -1;
            UserResource object = new UserResource();
            object.updateUser(value);
        }
        @Test
        void test5() {
            String value = "user name";
            UserResource object = new UserResource();
            object.updateUser(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserResource object = new UserResource();
            object.updateUser(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getAuthorities")
    class getAuthoritiesTests {
        @Test
        void test1() {
            UserResource object = new UserResource();
            object.getAuthorities();
        }
    }
    @Nested
    @DisplayName("Tests for the method deleteUser")
    class deleteUserTests {
        @Test
        void test1() {
            String value = "user123";
            UserResource object = new UserResource();
            object.deleteUser(value);
        }
        @Test
        void test2() {
            String value = "user_name";
            UserResource object = new UserResource();
            object.deleteUser(value);
        }
        @Test
        void test3() {
            String value = "user name";
            UserResource object = new UserResource();
            object.deleteUser(value);
        }
        @Test
        void test4() {
            String value = "user-name";
            UserResource object = new UserResource();
            object.deleteUser(value);
        }
        @Test
        void test5() {
            String value = "username";
            UserResource object = new UserResource();
            object.deleteUser(value);
        }
        @Test
        void test6() {
            String value = "";
            UserResource object = new UserResource();
            object.deleteUser(value);
        }
    }
}
