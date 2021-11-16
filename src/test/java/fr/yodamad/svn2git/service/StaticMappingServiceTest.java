package fr.yodamad.svn2git.service;

import org.junit.jupiter.api.*;

public class StaticMappingServiceTest {
    @Nested
    @DisplayName("Tests for the method findAll")
    class findAllTests {
        @Test
        void test1() {
            StaticMappingService object = new StaticMappingService();
            object.findAll();
        }
    }
    @Nested
    @DisplayName("Tests for the method findOne")
    class findOneTests {
        @Test
        void test1() {
            float value = 0.0;
            StaticMappingService object = new StaticMappingService();
            object.findOne(value);
        }
        @Test
        void test2() {
            int value = -29.45;
            StaticMappingService object = new StaticMappingService();
            object.findOne(value);
        }
        @Test
        void test3() {
            int value = -1.0;
            StaticMappingService object = new StaticMappingService();
            object.findOne(value);
        }
        @Test
        void test4() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            StaticMappingService object = new StaticMappingService();
            object.findOne(value);
        }
        @Test
        void test5() {
            int value = 0.5;
            StaticMappingService object = new StaticMappingService();
            object.findOne(value);
        }
        @Test
        void test6() {
            float value = 0;
            StaticMappingService object = new StaticMappingService();
            object.findOne(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method delete")
    class deleteTests {
        @Test
        void test1() {
            int value = -1.0;
            StaticMappingService object = new StaticMappingService();
            object.delete(value);
        }
        @Test
        void test2() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            StaticMappingService object = new StaticMappingService();
            object.delete(value);
        }
        @Test
        void test3() {
            int value = -0.5;
            StaticMappingService object = new StaticMappingService();
            object.delete(value);
        }
        @Test
        void test4() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            StaticMappingService object = new StaticMappingService();
            object.delete(value);
        }
        @Test
        void test5() {
            float value = 1.0;
            StaticMappingService object = new StaticMappingService();
            object.delete(value);
        }
        @Test
        void test6() {
            float value = 0;
            StaticMappingService object = new StaticMappingService();
            object.delete(value);
        }
    }
}
