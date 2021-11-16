package fr.yodamad.svn2git.service;

import org.junit.jupiter.api.*;

public class MailServiceTest {
    @Nested
    @DisplayName("Tests for the method sendActivationEmail")
    class sendActivationEmailTests {
        @Test
        void test1() {
            float value = -1;
            MailService object = new MailService();
            object.sendActivationEmail(value);
        }
        @Test
        void test2() {
            float value = 0;
            MailService object = new MailService();
            object.sendActivationEmail(value);
        }
        @Test
        void test3() {
            String value = 123;
            MailService object = new MailService();
            object.sendActivationEmail(value);
        }
        @Test
        void test4() {
            float value = -100;
            MailService object = new MailService();
            object.sendActivationEmail(value);
        }
        @Test
        void test5() {
            int value = 1;
            MailService object = new MailService();
            object.sendActivationEmail(value);
        }
        @Test
        void test6() {
            int value = 0;
            MailService object = new MailService();
            object.sendActivationEmail(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method sendEmail")
    class sendEmailTests {
        @Test
        void test1() {
            String value = "/path/to/file";
            String value2 = "Error: Unknown URL";
            String value3 = "audio";
            boolean value4 = false;
            boolean value5 = false;
            MailService object = new MailService();
            object.sendEmail(value,value2,value3,value4,value5);
        }
        @Test
        void test2() {
            String value = ".";
            String value2 = "Subject: %s";
            String value3 = "artists";
            boolean value4 = true;
            boolean value5 = false;
            MailService object = new MailService();
            object.sendEmail(value,value2,value3,value4,value5);
        }
        @Test
        void test3() {
            String value = "C:\\\\path\\to\\file.ext";
            String value2 = "Subject: %s";
            String value3 = "location";
            boolean value4 = false;
            boolean value5 = false;
            MailService object = new MailService();
            object.sendEmail(value,value2,value3,value4,value5);
        }
        @Test
        void test4() {
            String value = "./path/to/file";
            String value2 = "Error: Unknown URL";
            String value3 = "photo";
            boolean value4 = false;
            boolean value5 = false;
            MailService object = new MailService();
            object.sendEmail(value,value2,value3,value4,value5);
        }
        @Test
        void test5() {
            String value = "./path/to/file";
            String value2 = "Subject: %s";
            String value3 = "audio";
            boolean value4 = false;
            boolean value5 = true;
            MailService object = new MailService();
            object.sendEmail(value,value2,value3,value4,value5);
        }
        @Test
        void test6() {
            String value = "";
            String value2 = "";
            String value3 = "";
            boolean value4 = true;
            boolean value5 = true;
            MailService object = new MailService();
            object.sendEmail(value,value2,value3,value4,value5);
        }
    }
    @Nested
    @DisplayName("Tests for the method sendEmailFromTemplate")
    class sendEmailFromTemplateTests {
        @Test
        void test1() {
            String value = "user_name";
            String value2 = "Île-de-France";
            String value3 = "Customer Metrics Consultant";
            MailService object = new MailService();
            object.sendEmailFromTemplate(value,value2,value3);
        }
        @Test
        void test2() {
            float value = -29.45;
            String value2 = "Florida";
            String value3 = "Customer Metrics Consultant";
            MailService object = new MailService();
            object.sendEmailFromTemplate(value,value2,value3);
        }
        @Test
        void test3() {
            String value = "username";
            String value2 = "Île-de-France";
            String value3 = "National Infrastructure Supervisor";
            MailService object = new MailService();
            object.sendEmailFromTemplate(value,value2,value3);
        }
        @Test
        void test4() {
            float value = 0.5;
            String value2 = "Florida";
            String value3 = "National Infrastructure Supervisor";
            MailService object = new MailService();
            object.sendEmailFromTemplate(value,value2,value3);
        }
        @Test
        void test5() {
            float value = 0.0;
            String value2 = "Île-de-France";
            String value3 = "Senior Brand Assistant";
            MailService object = new MailService();
            object.sendEmailFromTemplate(value,value2,value3);
        }
        @Test
        void test6() {
            float value = 0;
            String value2 = "";
            String value3 = "";
            MailService object = new MailService();
            object.sendEmailFromTemplate(value,value2,value3);
        }
    }
    @Nested
    @DisplayName("Tests for the method sendCreationEmail")
    class sendCreationEmailTests {
        @Test
        void test1() {
            int value = 1.0;
            MailService object = new MailService();
            object.sendCreationEmail(value);
        }
        @Test
        void test2() {
            float value = 0.0;
            MailService object = new MailService();
            object.sendCreationEmail(value);
        }
        @Test
        void test3() {
            float value = 0.5;
            MailService object = new MailService();
            object.sendCreationEmail(value);
        }
        @Test
        void test4() {
            int value = -1.0;
            MailService object = new MailService();
            object.sendCreationEmail(value);
        }
        @Test
        void test5() {
            String value = "user_name";
            MailService object = new MailService();
            object.sendCreationEmail(value);
        }
        @Test
        void test6() {
            int value = 0;
            MailService object = new MailService();
            object.sendCreationEmail(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method sendPasswordResetMail")
    class sendPasswordResetMailTests {
        @Test
        void test1() {
            String value = 123;
            MailService object = new MailService();
            object.sendPasswordResetMail(value);
        }
        @Test
        void test2() {
            float value = -100;
            MailService object = new MailService();
            object.sendPasswordResetMail(value);
        }
        @Test
        void test3() {
            String value = "user123";
            MailService object = new MailService();
            object.sendPasswordResetMail(value);
        }
        @Test
        void test4() {
            String value = "user_name";
            MailService object = new MailService();
            object.sendPasswordResetMail(value);
        }
        @Test
        void test5() {
            String value = "username";
            MailService object = new MailService();
            object.sendPasswordResetMail(value);
        }
        @Test
        void test6() {
            int value = 0;
            MailService object = new MailService();
            object.sendPasswordResetMail(value);
        }
    }
}
