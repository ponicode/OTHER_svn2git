package fr.yodamad.svn2git.config.audit;

import org.junit.jupiter.api.*;

public class AuditEventConverterTest {
    @Nested
    @DisplayName("Tests for the method convertToAuditEvent")
    class convertToAuditEventTests {
        @Test
        void test1() {
            int value = 1.0;
            AuditEventConverter object = new AuditEventConverter();
            object.convertToAuditEvent(value);
        }
        @Test
        void test2() {
            float value = -1.0;
            AuditEventConverter object = new AuditEventConverter();
            object.convertToAuditEvent(value);
        }
        @Test
        void test3() {
            String value = "Sales";
            AuditEventConverter object = new AuditEventConverter();
            object.convertToAuditEvent(value);
        }
        @Test
        void test4() {
            float value = -0.5;
            AuditEventConverter object = new AuditEventConverter();
            object.convertToAuditEvent(value);
        }
        @Test
        void test5() {
            float value = 0.5;
            AuditEventConverter object = new AuditEventConverter();
            object.convertToAuditEvent(value);
        }
        @Test
        void test6() {
            int value = 0;
            AuditEventConverter object = new AuditEventConverter();
            object.convertToAuditEvent(value);
        }
    }
}
uditEventConverter();
            object.convertDataToObjects(value);
        }
        @Test
        void test5() {
            int value = 1;
            AuditEventConverter object = new AuditEventConverter();
            object.convertDataToObjects(value);
        }
        @Test
        void test6() {
            int value = 0;
            AuditEventConverter object = new AuditEventConverter();
            object.convertDataToObjects(value);
        }
    }
}
