package fr.yodamad.svn2git.web.rest;

import org.junit.jupiter.api.*;

public class AuditResourceTest {
    @Nested
    @DisplayName("Tests for the method getAll")
    class getAllTests {
        @Test
        void test1() {
            int value = 10.0;
            AuditResource object = new AuditResource();
            object.getAll(value);
        }
        @Test
        void test2() {
            float value = -1.0;
            AuditResource object = new AuditResource();
            object.getAll(value);
        }
        @Test
        void test3() {
            String value = "Www.GooGle.com";
            AuditResource object = new AuditResource();
            object.getAll(value);
        }
        @Test
        void test4() {
            String value = "www.google.com";
            AuditResource object = new AuditResource();
            object.getAll(value);
        }
        @Test
        void test5() {
            float value = 1.0;
            AuditResource object = new AuditResource();
            object.getAll(value);
        }
        @Test
        void test6() {
            int value = 0;
            AuditResource object = new AuditResource();
            object.getAll(value);
        }
    }
}

            object.get(value);
        }
    }
}
