package fr.yodamad.svn2git.web.rest.vm;

import org.junit.jupiter.api.*;

public class ManagedUserVMTest {
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            ManagedUserVM object = new ManagedUserVM();
            object.toString();
        }
    }
    @Nested
    @DisplayName("Tests for the method setPassword")
    class setPasswordTests {
        @Test
        void test1() {
            String value = "accessdenied4u";
            ManagedUserVM object = new ManagedUserVM();
            object.setPassword(value);
        }
        @Test
        void test2() {
            String value = "YouarenotAllowed2Use";
            ManagedUserVM object = new ManagedUserVM();
            object.setPassword(value);
        }
        @Test
        void test3() {
            String value = "$p3onyycat";
            ManagedUserVM object = new ManagedUserVM();
            object.setPassword(value);
        }
        @Test
        void test4() {
            String value = "NoWiFi4you";
            ManagedUserVM object = new ManagedUserVM();
            object.setPassword(value);
        }
        @Test
        void test5() {
            String value = "!Lov3MyPianoPony";
            ManagedUserVM object = new ManagedUserVM();
            object.setPassword(value);
        }
        @Test
        void test6() {
            String value = "";
            ManagedUserVM object = new ManagedUserVM();
            object.setPassword(value);
        }
    }
}
