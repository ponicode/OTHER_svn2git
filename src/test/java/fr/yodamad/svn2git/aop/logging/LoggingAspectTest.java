package fr.yodamad.svn2git.aop.logging;

import org.junit.jupiter.api.*;

public class LoggingAspectTest {
    @Nested
    @DisplayName("Tests for the method applicationPackagePointcut")
    class applicationPackagePointcutTests {
        @Test
        void test1() {
            LoggingAspect object = new LoggingAspect();
            object.applicationPackagePointcut();
        }
    }
    @Nested
    @DisplayName("Tests for the method logAfterThrowing")
    class logAfterThrowingTests {
        @Test
        void test1() {
            float value = 0.0;
            float value2 = 100;
            LoggingAspect object = new LoggingAspect();
            object.logAfterThrowing(value,value2);
        }
        @Test
        void test2() {
            float value = -29.45;
            String value2 = "something@example.com";
            LoggingAspect object = new LoggingAspect();
            object.logAfterThrowing(value,value2);
        }
        @Test
        void test3() {
            float value = 1.0;
            float value2 = 100;
            LoggingAspect object = new LoggingAspect();
            object.logAfterThrowing(value,value2);
        }
        @Test
        void test4() {
            String value = "Pierre Edouard";
            int value2 = -100;
            LoggingAspect object = new LoggingAspect();
            object.logAfterThrowing(value,value2);
        }
        @Test
        void test5() {
            String value = "George";
            float value2 = 1;
            LoggingAspect object = new LoggingAspect();
            object.logAfterThrowing(value,value2);
        }
        @Test
        void test6() {
            float value = 0;
            int value2 = 0;
            LoggingAspect object = new LoggingAspect();
            object.logAfterThrowing(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the method logAround")
    class logAroundTests {
        @Test
        void test1() {
            int value = -0.5;
            LoggingAspect object = new LoggingAspect();
            object.logAround(value);
        }
        @Test
        void test2() {
            int value = 1.0;
            LoggingAspect object = new LoggingAspect();
            object.logAround(value);
        }
        @Test
        void test3() {
            int value = 0.0;
            LoggingAspect object = new LoggingAspect();
            object.logAround(value);
        }
        @Test
        void test4() {
            float value = 0.0;
            LoggingAspect object = new LoggingAspect();
            object.logAround(value);
        }
        @Test
        void test5() {
            String value = "Edmond";
            LoggingAspect object = new LoggingAspect();
            object.logAround(value);
        }
        @Test
        void test6() {
            int value = 0;
            LoggingAspect object = new LoggingAspect();
            object.logAround(value);
        }
    }
}
