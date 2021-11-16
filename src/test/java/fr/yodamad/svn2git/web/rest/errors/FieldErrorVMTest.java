package fr.yodamad.svn2git.web.rest.errors;

import org.junit.jupiter.api.*;

public class FieldErrorVMTest {
    @Nested
    @DisplayName("Tests for the method getMessage")
    class getMessageTests {
        @Test
        void test1() {
            FieldErrorVM object = new FieldErrorVM();
            object.getMessage();
        }
    }
    @Nested
    @DisplayName("Tests for the method getObjectName")
    class getObjectNameTests {
        @Test
        void test1() {
            FieldErrorVM object = new FieldErrorVM();
            object.getObjectName();
        }
    }
}
