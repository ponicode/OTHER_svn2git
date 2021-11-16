package fr.yodamad.svn2git.repository;

import org.junit.jupiter.api.*;

public class CustomAuditEventRepositoryTest {
    @Nested
    @DisplayName("Tests for the method add")
    class addTests {
        @Test
        void test1() {
            int value = 0.5;
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.add(value);
        }
        @Test
        void test2() {
            int value = 10.0;
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.add(value);
        }
        @Test
        void test3() {
            float value = -29.45;
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.add(value);
        }
        @Test
        void test4() {
            float value = 10.0;
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.add(value);
        }
        @Test
        void test5() {
            int value = -29.45;
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.add(value);
        }
        @Test
        void test6() {
            int value = 0;
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.add(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method find")
    class findTests {
        @Test
        void test1() {
            String value = "bc23a9d531064583ace8f67dad60f6bb";
            float value2 = 10.23;
            String value3 = "string";
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.find(value,value2,value3);
        }
        @Test
        void test2() {
            String value = "da7588892";
            int value2 = 0.0;
            String value3 = "number";
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.find(value,value2,value3);
        }
        @Test
        void test3() {
            String value = "da7588892";
            String value2 = "01:04:03";
            String value3 = "array";
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.find(value,value2,value3);
        }
        @Test
        void test4() {
            String value = 12345;
            float value2 = 0.0;
            String value3 = "string";
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.find(value,value2,value3);
        }
        @Test
        void test5() {
            String value = "bc23a9d531064583ace8f67dad60f6bb";
            String value2 = "2017-09-29T23:01:00.000Z";
            String value3 = "array";
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.find(value,value2,value3);
        }
        @Test
        void test6() {
            String value = "";
            float value2 = 0;
            String value3 = "";
            CustomAuditEventRepository object = new CustomAuditEventRepository();
            object.find(value,value2,value3);
        }
    }
}
