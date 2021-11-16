package fr.yodamad.svn2git.service;

import org.junit.jupiter.api.*;

public class MigrationRemovedFileServiceTest {
    @Nested
    @DisplayName("Tests for the method findAll")
    class findAllTests {
        @Test
        void test1() {
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAll();
        }
    }
    @Nested
    @DisplayName("Tests for the method findOne")
    class findOneTests {
        @Test
        void test1() {
            int value = 0.5;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findOne(value);
        }
        @Test
        void test2() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findOne(value);
        }
        @Test
        void test3() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findOne(value);
        }
        @Test
        void test4() {
            int value = 1.0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findOne(value);
        }
        @Test
        void test5() {
            int value = -1.0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findOne(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findOne(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method save")
    class saveTests {
        @Test
        void test1() {
            float value = 0.0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.save(value);
        }
        @Test
        void test2() {
            String value = "/opt/share";
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.save(value);
        }
        @Test
        void test3() {
            float value = 10.0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.save(value);
        }
        @Test
        void test4() {
            float value = 10.23;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.save(value);
        }
        @Test
        void test5() {
            int value = -0.5;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.save(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.save(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method delete")
    class deleteTests {
        @Test
        void test1() {
            int value = 100;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.delete(value);
        }
        @Test
        void test2() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.delete(value);
        }
        @Test
        void test3() {
            int value = -100;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.delete(value);
        }
        @Test
        void test4() {
            float value = -100;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.delete(value);
        }
        @Test
        void test5() {
            float value = -1;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.delete(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.delete(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllForMigration")
    class findAllForMigrationTests {
        @Test
        void test1() {
            String value = ".";
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigration(value);
        }
        @Test
        void test2() {
            int value = 100;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigration(value);
        }
        @Test
        void test3() {
            int value = 0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigration(value);
        }
        @Test
        void test4() {
            String value = "C:\\\\path\\to\\folder\\";
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigration(value);
        }
        @Test
        void test5() {
            float value = -1;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigration(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigration(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllForMigrationAndReason")
    class findAllForMigrationAndReasonTests {
        @Test
        void test1() {
            String value = "./path/to/file";
            float value2 = 10.23;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigrationAndReason(value,value2);
        }
        @Test
        void test2() {
            String value = ".";
            int value2 = 10.23;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigrationAndReason(value,value2);
        }
        @Test
        void test3() {
            String value = "/path/to/file";
            float value2 = 0.5;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigrationAndReason(value,value2);
        }
        @Test
        void test4() {
            String value = "./path/to/file";
            float value2 = 1.0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigrationAndReason(value,value2);
        }
        @Test
        void test5() {
            int value = 1.0;
            String value2 = "Wait time out reached, while waiting for results";
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigrationAndReason(value,value2);
        }
        @Test
        void test6() {
            float value = 0;
            int value2 = 0;
            MigrationRemovedFileService object = new MigrationRemovedFileService();
            object.findAllForMigrationAndReason(value,value2);
        }
    }
}
