package fr.yodamad.svn2git.repository;

import org.junit.jupiter.api.*;

public class PersistenceAuditEventRepositoryTest {
    @Nested
    @DisplayName("Tests for the method findByPrincipal")
    class findByPrincipalTests {
        @Test
        void test1() {
            String value = "Awesome";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipal(value);
        }
        @Test
        void test2() {
            String value = "Rustic";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipal(value);
        }
        @Test
        void test3() {
            String value = "Tasty";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipal(value);
        }
        @Test
        void test4() {
            String value = "Gorgeous";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipal(value);
        }
        @Test
        void test5() {
            String value = "Intelligent";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipal(value);
        }
        @Test
        void test6() {
            String value = "";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipal(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findByAuditEventDateAfter")
    class findByAuditEventDateAfterTests {
        @Test
        void test1() {
            int value = 100;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByAuditEventDateAfter(value);
        }
        @Test
        void test2() {
            float value = 100;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByAuditEventDateAfter(value);
        }
        @Test
        void test3() {
            String value = "01:04:03";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByAuditEventDateAfter(value);
        }
        @Test
        void test4() {
            int value = 1;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByAuditEventDateAfter(value);
        }
        @Test
        void test5() {
            String value = "2017-09-29T19:01:00.000";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByAuditEventDateAfter(value);
        }
        @Test
        void test6() {
            int value = 0;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByAuditEventDateAfter(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findByPrincipalAndAuditEventDateAfter")
    class findByPrincipalAndAuditEventDateAfterTests {
        @Test
        void test1() {
            String value = "Intelligent";
            String value2 = "2017-09-29T23:01:00.000Z";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipalAndAuditEventDateAfter(value,value2);
        }
        @Test
        void test2() {
            String value = "Tasty";
            float value2 = 1;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipalAndAuditEventDateAfter(value,value2);
        }
        @Test
        void test3() {
            String value = "Intelligent";
            float value2 = -100;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipalAndAuditEventDateAfter(value,value2);
        }
        @Test
        void test4() {
            String value = "Rustic";
            int value2 = -1;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipalAndAuditEventDateAfter(value,value2);
        }
        @Test
        void test5() {
            String value = "Rustic";
            float value2 = -100;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipalAndAuditEventDateAfter(value,value2);
        }
        @Test
        void test6() {
            String value = "";
            int value2 = 0;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findByPrincipalAndAuditEventDateAfter(value,value2);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllByAuditEventDateBetween")
    class findAllByAuditEventDateBetweenTests {
        @Test
        void test1() {
            String value = "01-13-2020";
            float value2 = -0.5;
            float value3 = -1;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findAllByAuditEventDateBetween(value,value2,value3);
        }
        @Test
        void test2() {
            String value = "01-01-2020";
            float value2 = 0.0;
            float value3 = -1;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findAllByAuditEventDateBetween(value,value2,value3);
        }
        @Test
        void test3() {
            String value = "01-01-2020";
            String value2 = "Expressway";
            String value3 = "https://";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findAllByAuditEventDateBetween(value,value2,value3);
        }
        @Test
        void test4() {
            String value = "01-01-2020";
            String value2 = "Port";
            String value3 = "http://www.croplands.org/account/confirm?t=";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findAllByAuditEventDateBetween(value,value2,value3);
        }
        @Test
        void test5() {
            int value = -0.5;
            float value2 = 0.0;
            String value3 = "http://www.croplands.org/account/confirm?t=";
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findAllByAuditEventDateBetween(value,value2,value3);
        }
        @Test
        void test6() {
            float value = 0;
            float value2 = 0;
            float value3 = 0;
            PersistenceAuditEventRepository object = new PersistenceAuditEventRepository();
            object.findAllByAuditEventDateBetween(value,value2,value3);
        }
    }
}
ry object = new PersistenceAuditEventRepository();
            object.findByPrincipalAndAuditEventDateAfterAndAuditEventType(value,value2,value3);
        }
    }
}
