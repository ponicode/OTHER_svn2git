package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class PersistentAuditEventTest {
    @Nested
    @DisplayName("Tests for the method getPrincipal")
    class getPrincipalTests {
        @Test
        void test1() {
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.getPrincipal();
        }
    }
    @Nested
    @DisplayName("Tests for the method setId")
    class setIdTests {
        @Test
        void test1() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setId(value);
        }
        @Test
        void test2() {
            int value = 1.0;
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setId(value);
        }
        @Test
        void test3() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setId(value);
        }
        @Test
        void test4() {
            float value = 0.5;
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setId(value);
        }
        @Test
        void test5() {
            float value = 1.0;
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setId(value);
        }
        @Test
        void test6() {
            float value = 0;
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setId(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getAuditEventDate")
    class getAuditEventDateTests {
        @Test
        void test1() {
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.getAuditEventDate();
        }
    }
}
al(value);
        }
        @Test
        void test2() {
            String value = "Awesome";
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setPrincipal(value);
        }
        @Test
        void test3() {
            String value = "Tasty";
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setPrincipal(value);
        }
        @Test
        void test4() {
            String value = "Rustic";
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setPrincipal(value);
        }
        @Test
        void test5() {
            String value = "Intelligent";
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setPrincipal(value);
        }
        @Test
        void test6() {
            String value = "";
            PersistentAuditEvent object = new PersistentAuditEvent();
            object.setPrincipal(value);
        }
    }
}
