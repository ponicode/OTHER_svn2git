package fr.yodamad.svn2git.web.rest.errors;

import org.junit.jupiter.api.*;

public class CustomParameterizedExceptionTest {
    @Nested
    @DisplayName("Tests for the static method toProblemParameters")
    class staticToProblemParametersTests {
        @Test
        void test1() {
            String value = "cannot be found.";
            float value2 = 100;
            CustomParameterizedException.toProblemParameters(value,value2);
        }
        @Test
        void test2() {
            String value = "Could not find a submission object for message from xqueue";
            float value2 = -1;
            CustomParameterizedException.toProblemParameters(value,value2);
        }
        @Test
        void test3() {
            String value = "Could not find a grader object for message from xqueue";
            String value2 = "foo bar";
            CustomParameterizedException.toProblemParameters(value,value2);
        }
        @Test
        void test4() {
            String value = "<error_message>%s</error_message>";
            float value2 = 1;
            CustomParameterizedException.toProblemParameters(value,value2);
        }
        @Test
        void test5() {
            String value = "TypeError exception should be raised";
            String value2 = "This is a Text";
            CustomParameterizedException.toProblemParameters(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            float value2 = 0;
            CustomParameterizedException.toProblemParameters(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the static method toParamMap")
    class staticToParamMapTests {
        @Test
        void test1() {
            CustomParameterizedException.toParamMap("https://api.telegram.org/bot");
        }
        @Test
        void test2() {
            CustomParameterizedException.toParamMap("https://api.telegram.org/");
        }
        @Test
        void test3() {
            CustomParameterizedException.toParamMap("Www.GooGle.com");
        }
        @Test
        void test4() {
            CustomParameterizedException.toParamMap("www.google.com");
        }
        @Test
        void test5() {
            CustomParameterizedException.toParamMap("http://www.example.com/route/123?foo=bar");
        }
        @Test
        void test6() {
            CustomParameterizedException.toParamMap("");
        }
    }
}
