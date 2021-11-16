package fr.yodamad.svn2git.security.jwt;

import org.junit.jupiter.api.*;

public class JWTConfigurerTest {
    @Nested
    @DisplayName("Tests for the method configure")
    class configureTests {
        @Test
        void test1() {
            int value = 1;
            JWTConfigurer object = new JWTConfigurer();
            object.configure(value);
        }
        @Test
        void test2() {
            int value = -100;
            JWTConfigurer object = new JWTConfigurer();
            object.configure(value);
        }
        @Test
        void test3() {
            int value = 100;
            JWTConfigurer object = new JWTConfigurer();
            object.configure(value);
        }
        @Test
        void test4() {
            String value = "DELETE";
            JWTConfigurer object = new JWTConfigurer();
            object.configure(value);
        }
        @Test
        void test5() {
            String value = "POST";
            JWTConfigurer object = new JWTConfigurer();
            object.configure(value);
        }
        @Test
        void test6() {
            int value = 0;
            JWTConfigurer object = new JWTConfigurer();
            object.configure(value);
        }
    }
}
