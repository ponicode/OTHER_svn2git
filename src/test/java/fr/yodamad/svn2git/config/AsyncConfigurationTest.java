package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class AsyncConfigurationTest {
    @Nested
    @DisplayName("Tests for the method getAsyncExecutor")
    class getAsyncExecutorTests {
        @Test
        void test1() {
            AsyncConfiguration object = new AsyncConfiguration();
            object.getAsyncExecutor();
        }
    }
    @Nested
    @DisplayName("Tests for the method getAsyncUncaughtExceptionHandler")
    class getAsyncUncaughtExceptionHandlerTests {
        @Test
        void test1() {
            AsyncConfiguration object = new AsyncConfiguration();
            object.getAsyncUncaughtExceptionHandler();
        }
    }
    @Nested
    @DisplayName("Tests for the method configureTasks")
    class configureTasksTests {
        @Test
        void test1() {
            int value = -100;
            AsyncConfiguration object = new AsyncConfiguration();
            object.configureTasks(value);
        }
        @Test
        void test2() {
            String value = "v1.2.4";
            AsyncConfiguration object = new AsyncConfiguration();
            object.configureTasks(value);
        }
        @Test
        void test3() {
            float value = 1;
            AsyncConfiguration object = new AsyncConfiguration();
            object.configureTasks(value);
        }
        @Test
        void test4() {
            int value = -1;
            AsyncConfiguration object = new AsyncConfiguration();
            object.configureTasks(value);
        }
        @Test
        void test5() {
            String value = "4.0.0-beta1\t";
            AsyncConfiguration object = new AsyncConfiguration();
            object.configureTasks(value);
        }
        @Test
        void test6() {
            float value = 0;
            AsyncConfiguration object = new AsyncConfiguration();
            object.configureTasks(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method scheduledTaskExecutor")
    class scheduledTaskExecutorTests {
        @Test
        void test1() {
            AsyncConfiguration object = new AsyncConfiguration();
            object.scheduledTaskExecutor();
        }
    }
}
