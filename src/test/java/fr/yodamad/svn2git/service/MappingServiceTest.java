package fr.yodamad.svn2git.service;

import org.junit.jupiter.api.*;

public class MappingServiceTest {
    @Nested
    @DisplayName("Tests for the method findAll")
    class findAllTests {
        @Test
        void test1() {
            MappingService object = new MappingService();
            object.findAll();
        }
    }
    @Nested
    @DisplayName("Tests for the method findOne")
    class findOneTests {
        @Test
        void test1() {
            float value = -1;
            MappingService object = new MappingService();
            object.findOne(value);
        }
        @Test
        void test2() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            MappingService object = new MappingService();
            object.findOne(value);
        }
        @Test
        void test3() {
            int value = 100;
            MappingService object = new MappingService();
            object.findOne(value);
        }
        @Test
        void test4() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            MappingService object = new MappingService();
            object.findOne(value);
        }
        @Test
        void test5() {
            float value = -100;
            MappingService object = new MappingService();
            object.findOne(value);
        }
        @Test
        void test6() {
            float value = 0;
            MappingService object = new MappingService();
            object.findOne(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method save")
    class saveTests {
        @Test
        void test1() {
            float value = 0;
            MappingService object = new MappingService();
            object.save(value);
        }
        @Test
        void test2() {
            float value = 100;
            MappingService object = new MappingService();
            object.save(value);
        }
        @Test
        void test3() {
            String value = 12345;
            MappingService object = new MappingService();
            object.save(value);
        }
        @Test
        void test4() {
            String value = "c466a48309794261b64a4f02cfcc3d64";
            MappingService object = new MappingService();
            object.save(value);
        }
        @Test
        void test5() {
            int value = -1;
            MappingService object = new MappingService();
            object.save(value);
        }
        @Test
        void test6() {
            int value = 0;
            MappingService object = new MappingService();
            object.save(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method delete")
    class deleteTests {
        @Test
        void test1() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            MappingService object = new MappingService();
            object.delete(value);
        }
        @Test
        void test2() {
            float value = 10.0;
            MappingService object = new MappingService();
            object.delete(value);
        }
        @Test
        void test3() {
            int value = 0.5;
            MappingService object = new MappingService();
            object.delete(value);
        }
        @Test
        void test4() {
            int value = -29.45;
            MappingService object = new MappingService();
            object.delete(value);
        }
        @Test
        void test5() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            MappingService object = new MappingService();
            object.delete(value);
        }
        @Test
        void test6() {
            float value = 0;
            MappingService object = new MappingService();
            object.delete(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllForMigration")
    class findAllForMigrationTests {
        @Test
        void test1() {
            String value = "path/to/file.ext";
            MappingService object = new MappingService();
            object.findAllForMigration(value);
        }
        @Test
        void test2() {
            String value = ".";
            MappingService object = new MappingService();
            object.findAllForMigration(value);
        }
        @Test
        void test3() {
            float value = 1.0;
            MappingService object = new MappingService();
            object.findAllForMigration(value);
        }
        @Test
        void test4() {
            String value = "C:\\\\path\\to\\folder\\";
            MappingService object = new MappingService();
            object.findAllForMigration(value);
        }
        @Test
        void test5() {
            int value = 0.0;
            MappingService object = new MappingService();
            object.findAllForMigration(value);
        }
        @Test
        void test6() {
            float value = 0;
            MappingService object = new MappingService();
            object.findAllForMigration(value);
        }
    }
}
