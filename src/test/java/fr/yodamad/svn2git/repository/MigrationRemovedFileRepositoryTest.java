package fr.yodamad.svn2git.repository;

import org.junit.jupiter.api.*;

public class MigrationRemovedFileRepositoryTest {
    @Nested
    @DisplayName("Tests for the method countAllByMigration_Id")
    class countAllByMigration_IdTests {
        @Test
        void test1() {
            float value = 1.0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.countAllByMigration_Id(value);
        }
        @Test
        void test2() {
            String value = "C:\\\\path\\to\\folder\\";
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.countAllByMigration_Id(value);
        }
        @Test
        void test3() {
            int value = 0.0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.countAllByMigration_Id(value);
        }
        @Test
        void test4() {
            String value = "./path/to/file";
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.countAllByMigration_Id(value);
        }
        @Test
        void test5() {
            int value = -1.0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.countAllByMigration_Id(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.countAllByMigration_Id(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllByMigration_Id")
    class findAllByMigration_IdTests {
        @Test
        void test1() {
            String value = "C:\\\\path\\to\\folder\\";
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_Id(value);
        }
        @Test
        void test2() {
            int value = -100;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_Id(value);
        }
        @Test
        void test3() {
            String value = "./path/to/file";
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_Id(value);
        }
        @Test
        void test4() {
            float value = 1;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_Id(value);
        }
        @Test
        void test5() {
            int value = -1;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_Id(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_Id(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllByMigration_IdAndReason")
    class findAllByMigration_IdAndReasonTests {
        @Test
        void test1() {
            String value = "./path/to/file";
            int value2 = 1.0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_IdAndReason(value,value2);
        }
        @Test
        void test2() {
            int value = -100;
            float value2 = -1.0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_IdAndReason(value,value2);
        }
        @Test
        void test3() {
            int value = 1;
            int value2 = 0.0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_IdAndReason(value,value2);
        }
        @Test
        void test4() {
            int value = 1;
            String value2 = "TypeError exception should be raised";
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_IdAndReason(value,value2);
        }
        @Test
        void test5() {
            String value = "path/to/file.ext";
            int value2 = 0.5;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_IdAndReason(value,value2);
        }
        @Test
        void test6() {
            float value = 0;
            int value2 = 0;
            MigrationRemovedFileRepository object = new MigrationRemovedFileRepository();
            object.findAllByMigration_IdAndReason(value,value2);
        }
    }
}
