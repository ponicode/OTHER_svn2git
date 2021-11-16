package fr.yodamad.svn2git.service.dto;

import org.junit.jupiter.api.*;

public class PasswordChangeDTOTest {
    @Nested
    @DisplayName("Tests for the method getCurrentPassword")
    class getCurrentPasswordTests {
        @Test
        void test1() {
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.getCurrentPassword();
        }
    }
    @Nested
    @DisplayName("Tests for the method getNewPassword")
    class getNewPasswordTests {
        @Test
        void test1() {
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.getNewPassword();
        }
    }
    @Nested
    @DisplayName("Tests for the method setCurrentPassword")
    class setCurrentPasswordTests {
        @Test
        void test1() {
            String value = 123;
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setCurrentPassword(value);
        }
        @Test
        void test2() {
            String value = "username";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setCurrentPassword(value);
        }
        @Test
        void test3() {
            String value = "user123";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setCurrentPassword(value);
        }
        @Test
        void test4() {
            String value = "user name";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setCurrentPassword(value);
        }
        @Test
        void test5() {
            String value = "user-name";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setCurrentPassword(value);
        }
        @Test
        void test6() {
            String value = "";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setCurrentPassword(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setNewPassword")
    class setNewPasswordTests {
        @Test
        void test1() {
            String value = "NoWiFi4you";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setNewPassword(value);
        }
        @Test
        void test2() {
            String value = "YouarenotAllowed2Use";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setNewPassword(value);
        }
        @Test
        void test3() {
            String value = "!Lov3MyPianoPony";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setNewPassword(value);
        }
        @Test
        void test4() {
            String value = "$p3onyycat";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setNewPassword(value);
        }
        @Test
        void test5() {
            String value = "accessdenied4u";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setNewPassword(value);
        }
        @Test
        void test6() {
            String value = "";
            PasswordChangeDTO object = new PasswordChangeDTO();
            object.setNewPassword(value);
        }
    }
}
