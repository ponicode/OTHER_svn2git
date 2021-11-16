package fr.yodamad.svn2git.service;

import org.junit.jupiter.api.*;

public class AuditEventServiceTest {
    @Nested
    @DisplayName("Tests for the method findAll")
    class findAllTests {
        @Test
        void test1() {
            float value = -100;
            AuditEventService object = new AuditEventService();
            object.findAll(value);
        }
        @Test
        void test2() {
            String value = "www.google.com";
            AuditEventService object = new AuditEventService();
            object.findAll(value);
        }
        @Test
        void test3() {
            int value = -1;
            AuditEventService object = new AuditEventService();
            object.findAll(value);
        }
        @Test
        void test4() {
            float value = 100;
            AuditEventService object = new AuditEventService();
            object.findAll(value);
        }
        @Test
        void test5() {
            int value = 100;
            AuditEventService object = new AuditEventService();
            object.findAll(value);
        }
        @Test
        void test6() {
            float value = 0;
            AuditEventService object = new AuditEventService();
            object.findAll(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method find")
    class findTests {
        @Test
        void test1() {
            int value = -100;
            AuditEventService object = new AuditEventService();
            object.find(value);
        }
        @Test
        void test2() {
            float value = 1;
            AuditEventService object = new AuditEventService();
            object.find(value);
        }
        @Test
        void test3() {
            float value = -100;
            AuditEventService object = new AuditEventService();
            object.find(value);
        }
        @Test
        void test4() {
            float value = -1;
            AuditEventService object = new AuditEventService();
            object.find(value);
        }
        @Test
        void test5() {
            int value = -1;
            AuditEventService object = new AuditEventService();
            object.find(value);
        }
        @Test
        void test6() {
            int value = 0;
            AuditEventService object = new AuditEventService();
            object.find(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findByDates")
    class findByDatesTests {
        @Test
        void test1() {
            String value = "32-01-2020";
            int value2 = 0.5;
            int value3 = 1;
            AuditEventService object = new AuditEventService();
            object.findByDates(value,value2,value3);
        }
        @Test
        void test2() {
            int value = -29.45;
            int value2 = -0.5;
            String value3 = "http://www.croplands.org/account/confirm?t=";
            AuditEventService object = new AuditEventService();
            object.findByDates(value,value2,value3);
        }
        @Test
        void test3() {
            int value = 0.0;
            int value2 = 1.0;
            String value3 = "http://www.croplands.org/account/confirm?t=";
            AuditEventService object = new AuditEventService();
            object.findByDates(value,value2,value3);
        }
        @Test
        void test4() {
            String value = "01-01-2030";
            float value2 = 0.5;
            int value3 = -100;
            AuditEventService object = new AuditEventService();
            object.findByDates(value,value2,value3);
        }
        @Test
        void test5() {
            String value = "01-01-2020";
            int value2 = -0.5;
            String value3 = "www.google.com";
            AuditEventService object = new AuditEventService();
            object.findByDates(value,value2,value3);
        }
        @Test
        void test6() {
            float value = 0;
            float value2 = 0;
            int value3 = 0;
            AuditEventService object = new AuditEventService();
            object.findByDates(value,value2,value3);
        }
    }
}
