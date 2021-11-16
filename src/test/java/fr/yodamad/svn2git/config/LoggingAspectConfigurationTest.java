package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class LoggingAspectConfigurationTest {
    @Nested
    @DisplayName("Tests for the method loggingAspect")
    class loggingAspectTests {
        @Test
        void test1() {
            String value = "C:\\\\path\\to\\folder\\";
            LoggingAspectConfiguration object = new LoggingAspectConfiguration();
            object.loggingAspect(value);
        }
        @Test
        void test2() {
            String value = "path/to/folder/";
            LoggingAspectConfiguration object = new LoggingAspectConfiguration();
            object.loggingAspect(value);
        }
        @Test
        void test3() {
            int value = 1;
            LoggingAspectConfiguration object = new LoggingAspectConfiguration();
            object.loggingAspect(value);
        }
        @Test
        void test4() {
            String value = "./path/to/file";
            LoggingAspectConfiguration object = new LoggingAspectConfiguration();
            object.loggingAspect(value);
        }
        @Test
        void test5() {
            int value = -100;
            LoggingAspectConfiguration object = new LoggingAspectConfiguration();
            object.loggingAspect(value);
        }
        @Test
        void test6() {
            float value = 0;
            LoggingAspectConfiguration object = new LoggingAspectConfiguration();
            object.loggingAspect(value);
        }
    }
}
