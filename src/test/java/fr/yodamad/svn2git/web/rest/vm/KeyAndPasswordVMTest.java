package fr.yodamad.svn2git.web.rest.vm;

import org.junit.jupiter.api.*;

public class KeyAndPasswordVMTest {
    @Nested
    @DisplayName("Tests for the method getKey")
    class getKeyTests {
        @Test
        void test1() {
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.getKey();
        }
    }
    @Nested
    @DisplayName("Tests for the method setKey")
    class setKeyTests {
        @Test
        void test1() {
            String value = "Elio";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setKey(value);
        }
        @Test
        void test2() {
            String value = "Dillenberg";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setKey(value);
        }
        @Test
        void test3() {
            String value = "elio@example.com";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setKey(value);
        }
        @Test
        void test4() {
            String value = "";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setKey(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setNewPassword")
    class setNewPasswordTests {
        @Test
        void test1() {
            String value = "accessdenied4u";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setNewPassword(value);
        }
        @Test
        void test2() {
            String value = "!Lov3MyPianoPony";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setNewPassword(value);
        }
        @Test
        void test3() {
            String value = "YouarenotAllowed2Use";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setNewPassword(value);
        }
        @Test
        void test4() {
            String value = "$p3onyycat";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setNewPassword(value);
        }
        @Test
        void test5() {
            String value = "NoWiFi4you";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setNewPassword(value);
        }
        @Test
        void test6() {
            String value = "";
            KeyAndPasswordVM object = new KeyAndPasswordVM();
            object.setNewPassword(value);
        }
    }
}
