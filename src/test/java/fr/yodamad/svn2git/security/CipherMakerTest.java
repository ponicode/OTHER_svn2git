package fr.yodamad.svn2git.security;

import org.junit.jupiter.api.*;

public class CipherMakerTest {
    @Nested
    @DisplayName("Tests for the method configureAndGetInstance")
    class configureAndGetInstanceTests {
        @Test
        void test1() {
            int value = -1;
            String value2 = "Elio";
            CipherMaker object = new CipherMaker();
            object.configureAndGetInstance(value,value2);
        }
        @Test
        void test2() {
            int value = 100;
            String value2 = "Dillenberg";
            CipherMaker object = new CipherMaker();
            object.configureAndGetInstance(value,value2);
        }
        @Test
        void test3() {
            int value = 1;
            String value2 = "Elio";
            CipherMaker object = new CipherMaker();
            object.configureAndGetInstance(value,value2);
        }
        @Test
        void test4() {
            int value = -100;
            String value2 = "elio@example.com";
            CipherMaker object = new CipherMaker();
            object.configureAndGetInstance(value,value2);
        }
        @Test
        void test5() {
            int value = -100;
            String value2 = "Elio";
            CipherMaker object = new CipherMaker();
            object.configureAndGetInstance(value,value2);
        }
        @Test
        void test6() {
            int value = 0;
            String value2 = "";
            CipherMaker object = new CipherMaker();
            object.configureAndGetInstance(value,value2);
        }
    }
}
