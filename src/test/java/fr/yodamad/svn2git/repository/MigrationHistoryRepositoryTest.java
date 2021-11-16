package fr.yodamad.svn2git.repository;

import org.junit.jupiter.api.*;

public class MigrationHistoryRepositoryTest {
    @Nested
    @DisplayName("Tests for the method findFirstByMigration_IdOrderByIdDesc")
    class findFirstByMigration_IdOrderByIdDescTests {
        @Test
        void test1() {
            String value = "path/to/file.ext";
            MigrationHistoryRepository object = new MigrationHistoryRepository();
            object.findFirstByMigration_IdOrderByIdDesc(value);
        }
        @Test
        void test2() {
            float value = 10.23;
            MigrationHistoryRepository object = new MigrationHistoryRepository();
            object.findFirstByMigration_IdOrderByIdDesc(value);
        }
        @Test
        void test3() {
            int value = -1.0;
            MigrationHistoryRepository object = new MigrationHistoryRepository();
            object.findFirstByMigration_IdOrderByIdDesc(value);
        }
        @Test
        void test4() {
            int value = 1.0;
            MigrationHistoryRepository object = new MigrationHistoryRepository();
            object.findFirstByMigration_IdOrderByIdDesc(value);
        }
        @Test
        void test5() {
            float value = 0.5;
            MigrationHistoryRepository object = new MigrationHistoryRepository();
            object.findFirstByMigration_IdOrderByIdDesc(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationHistoryRepository object = new MigrationHistoryRepository();
            object.findFirstByMigration_IdOrderByIdDesc(value);
        }
    }
}
