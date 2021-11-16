package fr.yodamad.svn2git.service;

import org.junit.jupiter.api.*;

public class UserServiceTest {
    @Nested
    @DisplayName("Tests for the method completePasswordReset")
    class completePasswordResetTests {
        @Test
        void test1() {
            String value = "$p3onyycat";
            String value2 = "elio@example.com";
            UserService object = new UserService();
            object.completePasswordReset(value,value2);
        }
        @Test
        void test2() {
            String value = "NoWiFi4you";
            String value2 = "elio@example.com";
            UserService object = new UserService();
            object.completePasswordReset(value,value2);
        }
        @Test
        void test3() {
            String value = "!Lov3MyPianoPony";
            String value2 = "Dillenberg";
            UserService object = new UserService();
            object.completePasswordReset(value,value2);
        }
        @Test
        void test4() {
            String value = "$p3onyycat";
            String value2 = "Dillenberg";
            UserService object = new UserService();
            object.completePasswordReset(value,value2);
        }
        @Test
        void test5() {
            String value = "$p3onyycat";
            String value2 = "Elio";
            UserService object = new UserService();
            object.completePasswordReset(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            UserService object = new UserService();
            object.completePasswordReset(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the method registerUser")
    class registerUserTests {
        @Test
        void test1() {
            float value = 10.0;
            String value2 = "!Lov3MyPianoPony";
            UserService object = new UserService();
            object.registerUser(value,value2);
        }
        @Test
        void test2() {
            String value = "user name";
            String value2 = "!Lov3MyPianoPony";
            UserService object = new UserService();
            object.registerUser(value,value2);
        }
        @Test
        void test3() {
            String value = "user name";
            String value2 = "NoWiFi4you";
            UserService object = new UserService();
            object.registerUser(value,value2);
        }
        @Test
        void test4() {
            float value = 10.0;
            String value2 = "accessdenied4u";
            UserService object = new UserService();
            object.registerUser(value,value2);
        }
        @Test
        void test5() {
            float value = -1.0;
            String value2 = "NoWiFi4you";
            UserService object = new UserService();
            object.registerUser(value,value2);
        }
        @Test
        void test6() {
            float value = 0;
            String value2 = "";
            UserService object = new UserService();
            object.registerUser(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the method createUser")
    class createUserTests {
        @Test
        void test1() {
            int value = 10.0;
            UserService object = new UserService();
            object.createUser(value);
        }
        @Test
        void test2() {
            int value = 10.23;
            UserService object = new UserService();
            object.createUser(value);
        }
        @Test
        void test3() {
            String value = 123;
            UserService object = new UserService();
            object.createUser(value);
        }
        @Test
        void test4() {
            float value = 1.0;
            UserService object = new UserService();
            object.createUser(value);
        }
        @Test
        void test5() {
            int value = -0.5;
            UserService object = new UserService();
            object.createUser(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserService object = new UserService();
            object.createUser(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method updateUser")
    class updateUserTests {
        @Test
        void test1() {
            String value = "user_name";
            UserService object = new UserService();
            object.updateUser(value);
        }
        @Test
        void test2() {
            String value = "user name";
            UserService object = new UserService();
            object.updateUser(value);
        }
        @Test
        void test3() {
            String value = "user123";
            UserService object = new UserService();
            object.updateUser(value);
        }
        @Test
        void test4() {
            String value = 123;
            UserService object = new UserService();
            object.updateUser(value);
        }
        @Test
        void test5() {
            String value = "username";
            UserService object = new UserService();
            object.updateUser(value);
        }
        @Test
        void test6() {
            String value = "";
            UserService object = new UserService();
            object.updateUser(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method deleteUser")
    class deleteUserTests {
        @Test
        void test1() {
            String value = "username";
            UserService object = new UserService();
            object.deleteUser(value);
        }
        @Test
        void test2() {
            String value = "user_name";
            UserService object = new UserService();
            object.deleteUser(value);
        }
        @Test
        void test3() {
            String value = "user name";
            UserService object = new UserService();
            object.deleteUser(value);
        }
        @Test
        void test4() {
            String value = "user-name";
            UserService object = new UserService();
            object.deleteUser(value);
        }
        @Test
        void test5() {
            String value = 123;
            UserService object = new UserService();
            object.deleteUser(value);
        }
        @Test
        void test6() {
            String value = "";
            UserService object = new UserService();
            object.deleteUser(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method changePassword")
    class changePasswordTests {
        @Test
        void test1() {
            String value = "v1.2.4";
            String value2 = "$p3onyycat";
            UserService object = new UserService();
            object.changePassword(value,value2);
        }
        @Test
        void test2() {
            String value = "v1.2.4";
            String value2 = "!Lov3MyPianoPony";
            UserService object = new UserService();
            object.changePassword(value,value2);
        }
        @Test
        void test3() {
            String value = "1.0.0";
            String value2 = "!Lov3MyPianoPony";
            UserService object = new UserService();
            object.changePassword(value,value2);
        }
        @Test
        void test4() {
            String value = "1.0.0";
            String value2 = "$p3onyycat";
            UserService object = new UserService();
            object.changePassword(value,value2);
        }
        @Test
        void test5() {
            String value = "4.0.0-beta1\t";
            String value2 = "accessdenied4u";
            UserService object = new UserService();
            object.changePassword(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            UserService object = new UserService();
            object.changePassword(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the method getAllManagedUsers")
    class getAllManagedUsersTests {
        @Test
        void test1() {
            int value = 0;
            UserService object = new UserService();
            object.getAllManagedUsers(value);
        }
        @Test
        void test2() {
            int value = 100;
            UserService object = new UserService();
            object.getAllManagedUsers(value);
        }
        @Test
        void test3() {
            String value = "https://";
            UserService object = new UserService();
            object.getAllManagedUsers(value);
        }
        @Test
        void test4() {
            int value = 1;
            UserService object = new UserService();
            object.getAllManagedUsers(value);
        }
        @Test
        void test5() {
            String value = "https://accounts.google.com/o/oauth2/revoke?token=%s";
            UserService object = new UserService();
            object.getAllManagedUsers(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserService object = new UserService();
            object.getAllManagedUsers(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getUserWithAuthoritiesByLogin")
    class getUserWithAuthoritiesByLoginTests {
        @Test
        void test1() {
            String value = "username";
            UserService object = new UserService();
            object.getUserWithAuthoritiesByLogin(value);
        }
        @Test
        void test2() {
            String value = "user-name";
            UserService object = new UserService();
            object.getUserWithAuthoritiesByLogin(value);
        }
        @Test
        void test3() {
            String value = "user name";
            UserService object = new UserService();
            object.getUserWithAuthoritiesByLogin(value);
        }
        @Test
        void test4() {
            String value = "user_name";
            UserService object = new UserService();
            object.getUserWithAuthoritiesByLogin(value);
        }
        @Test
        void test5() {
            String value = "user123";
            UserService object = new UserService();
            object.getUserWithAuthoritiesByLogin(value);
        }
        @Test
        void test6() {
            String value = "";
            UserService object = new UserService();
            object.getUserWithAuthoritiesByLogin(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getUserWithAuthorities")
    class getUserWithAuthoritiesTests {
        @Test
        void test1() {
            UserService object = new UserService();
            object.getUserWithAuthorities();
        }
    }
}
uthorities(value);
        }
        @Test
        void test2() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            UserService object = new UserService();
            object.getUserWithAuthorities(value);
        }
        @Test
        void test3() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            UserService object = new UserService();
            object.getUserWithAuthorities(value);
        }
        @Test
        void test4() {
            int value = -0.5;
            UserService object = new UserService();
            object.getUserWithAuthorities(value);
        }
        @Test
        void test5() {
            int value = -29.45;
            UserService object = new UserService();
            object.getUserWithAuthorities(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserService object = new UserService();
            object.getUserWithAuthorities(value);
        }
    }
}
