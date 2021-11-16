package fr.yodamad.svn2git.web.rest.errors;

import org.junit.jupiter.api.*;

public class ExceptionTranslatorTest {
    @Nested
    @DisplayName("Tests for the method handleMethodArgumentNotValid")
    class handleMethodArgumentNotValidTests {
        @Test
        void test1() {
            float value = -0.5;
            int value2 = 1.0;
            ExceptionTranslator object = new ExceptionTranslator();
            object.handleMethodArgumentNotValid(value,value2);
        }
        @Test
        void test2() {
            String value = "Secured";
            int value2 = -0.5;
            ExceptionTranslator object = new ExceptionTranslator();
            object.handleMethodArgumentNotValid(value,value2);
        }
        @Test
        void test3() {
            String value = "Customizable";
            int value2 = 10.23;
            ExceptionTranslator object = new ExceptionTranslator();
            object.handleMethodArgumentNotValid(value,value2);
        }
        @Test
        void test4() {
            float value = 1.0;
            int value2 = 10.0;
            ExceptionTranslator object = new ExceptionTranslator();
            object.handleMethodArgumentNotValid(value,value2);
        }
        @Test
        void test5() {
            String value = "Synchronised";
            float value2 = -29.45;
            ExceptionTranslator object = new ExceptionTranslator();
            object.handleMethodArgumentNotValid(value,value2);
        }
        @Test
        void test6() {
            float value = 0;
            int value2 = 0;
            ExceptionTranslator object = new ExceptionTranslator();
            object.handleMethodArgumentNotValid(value,value2);
        }
    }
}
    }
}
