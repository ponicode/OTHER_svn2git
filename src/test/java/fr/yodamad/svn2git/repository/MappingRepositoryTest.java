package fr.yodamad.svn2git.repository;

import org.junit.jupiter.api.*;

public class MappingRepositoryTest {
    @Nested
    @DisplayName("Tests for the method findByMigrationAndSvnDirectoryDelete")
    class findByMigrationAndSvnDirectoryDeleteTests {
        @Test
        void test1() {
            String value = "path/to/file.ext";
            String value2 = "^5.0.0";
            MappingRepository object = new MappingRepository();
            object.findByMigrationAndSvnDirectoryDelete(value,value2);
        }
        @Test
        void test2() {
            int value = 0;
            int value2 = 0;
            MappingRepository object = new MappingRepository();
            object.findByMigrationAndSvnDirectoryDelete(value,value2);
        }
        @Test
        void test3() {
            float value = 100;
            int value2 = 100;
            MappingRepository object = new MappingRepository();
            object.findByMigrationAndSvnDirectoryDelete(value,value2);
        }
        @Test
        void test4() {
            float value = 1;
            int value2 = -1;
            MappingRepository object = new MappingRepository();
            object.findByMigrationAndSvnDirectoryDelete(value,value2);
        }
        @Test
        void test5() {
            String value = "/path/to/file";
            int value2 = -100;
            MappingRepository object = new MappingRepository();
            object.findByMigrationAndSvnDirectoryDelete(value,value2);
        }
        @Test
        void test6() {
            float value = 0;
            int value2 = 0;
            MappingRepository object = new MappingRepository();
            object.findByMigrationAndSvnDirectoryDelete(value,value2);
        }
    }
}
