package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class AbstractAuditingEntityTest {
    @Nested
    @DisplayName("Tests for the method getCreatedBy")
    class getCreatedByTests {
        @Test
        void test1() {
            AbstractAuditingEntity object = new AbstractAuditingEntity();
            object.getCreatedBy();
        }
    }
    @Nested
    @DisplayName("Tests for the method getCreatedDate")
    class getCreatedDateTests {
        @Test
        void test1() {
            AbstractAuditingEntity object = new AbstractAuditingEntity();
            object.getCreatedDate();
        }
    }
}
atedBy(value);
        }
        @Test
        void test2() {
            String value = "73609-2040";
            AbstractAuditingEntity object = new AbstractAuditingEntity();
            object.setCreatedBy(value);
        }
        @Test
        void test3() {
            String value = "91659-4424";
            AbstractAuditingEntity object = new AbstractAuditingEntity();
            object.setCreatedBy(value);
        }
        @Test
        void test4() {
            String value = 62562;
            AbstractAuditingEntity object = new AbstractAuditingEntity();
            object.setCreatedBy(value);
        }
        @Test
        void test5() {
            String value = 23306;
            AbstractAuditingEntity object = new AbstractAuditingEntity();
            object.setCreatedBy(value);
        }
        @Test
        void test6() {
            String value = "";
            AbstractAuditingEntity object = new AbstractAuditingEntity();
            object.setCreatedBy(value);
        }
    }
}
