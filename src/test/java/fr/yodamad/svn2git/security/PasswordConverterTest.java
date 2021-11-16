package fr.yodamad.svn2git.security;

import org.junit.jupiter.api.*;

public class PasswordConverterTest {
    @Nested
    @DisplayName("Tests for the method initEnv")
    class initEnvTests {
        @Test
        void test1() {
            int value = 100;
            PasswordConverter object = new PasswordConverter();
            object.initEnv(value);
        }
        @Test
        void test2() {
            int value = -100;
            PasswordConverter object = new PasswordConverter();
            object.initEnv(value);
        }
        @Test
        void test3() {
            float value = 1;
            PasswordConverter object = new PasswordConverter();
            object.initEnv(value);
        }
        @Test
        void test4() {
            float value = -1;
            PasswordConverter object = new PasswordConverter();
            object.initEnv(value);
        }
        @Test
        void test5() {
            String value = "v1.2.4";
            PasswordConverter object = new PasswordConverter();
            object.initEnv(value);
        }
        @Test
        void test6() {
            int value = 0;
            PasswordConverter object = new PasswordConverter();
            object.initEnv(value);
        }
    }
}
