package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class LocaleConfigurationTest {
    @Nested
    @DisplayName("Tests for the method localeResolver")
    class localeResolverTests {
        @Test
        void test1() {
            LocaleConfiguration object = new LocaleConfiguration();
            object.localeResolver();
        }
    }
    @Nested
    @DisplayName("Tests for the method addInterceptors")
    class addInterceptorsTests {
        @Test
        void test1() {
            float value = 10.23;
            LocaleConfiguration object = new LocaleConfiguration();
            object.addInterceptors(value);
        }
        @Test
        void test2() {
            float value = -29.45;
            LocaleConfiguration object = new LocaleConfiguration();
            object.addInterceptors(value);
        }
        @Test
        void test3() {
            float value = 0.5;
            LocaleConfiguration object = new LocaleConfiguration();
            object.addInterceptors(value);
        }
        @Test
        void test4() {
            int value = -1.0;
            LocaleConfiguration object = new LocaleConfiguration();
            object.addInterceptors(value);
        }
        @Test
        void test5() {
            float value = -1.0;
            LocaleConfiguration object = new LocaleConfiguration();
            object.addInterceptors(value);
        }
        @Test
        void test6() {
            float value = 0;
            LocaleConfiguration object = new LocaleConfiguration();
            object.addInterceptors(value);
        }
    }
}
