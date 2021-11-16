package fr.yodamad.svn2git.web.rest.util;

import org.junit.jupiter.api.*;

public class HeaderUtilTest {
    @Nested
    @DisplayName("Tests for the static method createAlert")
    class staticCreateAlertTests {
        @Test
        void test1() {
            String value = "No response";
            String value2 = "009008401";
            HeaderUtil.createAlert(value,value2);
        }
        @Test
        void test2() {
            String value = "Warning: ";
            String value2 = 333173976;
            HeaderUtil.createAlert(value,value2);
        }
        @Test
        void test3() {
            String value = "Could not find a grader object for message from xqueue";
            String value2 = 992686820;
            HeaderUtil.createAlert(value,value2);
        }
        @Test
        void test4() {
            String value = "Empty name specified";
            String value2 = 333173976;
            HeaderUtil.createAlert(value,value2);
        }
        @Test
        void test5() {
            String value = "TypeError exception should be raised";
            String value2 = 819843241;
            HeaderUtil.createAlert(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            HeaderUtil.createAlert(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the static method createEntityCreationAlert")
    class staticCreateEntityCreationAlertTests {
        @Test
        void test1() {
            String value = "user123";
            String value2 = 992686820;
            HeaderUtil.createEntityCreationAlert(value,value2);
        }
        @Test
        void test2() {
            String value = "user-name";
            String value2 = 992686820;
            HeaderUtil.createEntityCreationAlert(value,value2);
        }
        @Test
        void test3() {
            String value = "user_name";
            String value2 = 992686820;
            HeaderUtil.createEntityCreationAlert(value,value2);
        }
        @Test
        void test4() {
            String value = "user name";
            String value2 = 254482186;
            HeaderUtil.createEntityCreationAlert(value,value2);
        }
        @Test
        void test5() {
            String value = "user-name";
            String value2 = 254482186;
            HeaderUtil.createEntityCreationAlert(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            HeaderUtil.createEntityCreationAlert(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the static method createEntityUpdateAlert")
    class staticCreateEntityUpdateAlertTests {
        @Test
        void test1() {
            String value = 123;
            String value2 = 819843241;
            HeaderUtil.createEntityUpdateAlert(value,value2);
        }
        @Test
        void test2() {
            String value = 123;
            String value2 = 254482186;
            HeaderUtil.createEntityUpdateAlert(value,value2);
        }
        @Test
        void test3() {
            String value = 123;
            String value2 = 992686820;
            HeaderUtil.createEntityUpdateAlert(value,value2);
        }
        @Test
        void test4() {
            String value = "user123";
            String value2 = 819843241;
            HeaderUtil.createEntityUpdateAlert(value,value2);
        }
        @Test
        void test5() {
            String value = "user name";
            String value2 = "009008401";
            HeaderUtil.createEntityUpdateAlert(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            HeaderUtil.createEntityUpdateAlert(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the static method createEntityDeletionAlert")
    class staticCreateEntityDeletionAlertTests {
        @Test
        void test1() {
            String value = "user_name";
            String value2 = 819843241;
            HeaderUtil.createEntityDeletionAlert(value,value2);
        }
        @Test
        void test2() {
            String value = "user123";
            String value2 = 254482186;
            HeaderUtil.createEntityDeletionAlert(value,value2);
        }
        @Test
        void test3() {
            String value = "user_name";
            String value2 = 333173976;
            HeaderUtil.createEntityDeletionAlert(value,value2);
        }
        @Test
        void test4() {
            String value = "user123";
            String value2 = 992686820;
            HeaderUtil.createEntityDeletionAlert(value,value2);
        }
        @Test
        void test5() {
            String value = "username";
            String value2 = 819843241;
            HeaderUtil.createEntityDeletionAlert(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            HeaderUtil.createEntityDeletionAlert(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the static method createFailureAlert")
    class staticCreateFailureAlertTests {
        @Test
        void test1() {
            String value = "username";
            String value2 = "invalid option";
            String value3 = "Unknown Error";
            HeaderUtil.createFailureAlert(value,value2,value3);
        }
        @Test
        void test2() {
            String value = "user name";
            String value2 = "Invalid [%s] value. %s";
            String value3 = "New Error ";
            HeaderUtil.createFailureAlert(value,value2,value3);
        }
        @Test
        void test3() {
            String value = 123;
            String value2 = "Error selecting from database";
            String value3 = "TrainerCourseDetailError: Either not an ajax call or not a GET request!!!";
            HeaderUtil.createFailureAlert(value,value2,value3);
        }
        @Test
        void test4() {
            String value = 123;
            String value2 = "The app does not exist";
            String value3 = "TrainerCourseDetailError: Either not an ajax call or not a GET request!!!";
            HeaderUtil.createFailureAlert(value,value2,value3);
        }
        @Test
        void test5() {
            String value = "user-name";
            String value2 = "Counterparty sent error: %s";
            String value3 = "Unknown error";
            HeaderUtil.createFailureAlert(value,value2,value3);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            String value3 = "";
            HeaderUtil.createFailureAlert(value,value2,value3);
        }
    }
}
