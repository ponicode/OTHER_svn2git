package fr.yodamad.svn2git.service;

import org.junit.jupiter.api.*;

public class MigrationHistoryServiceTest {
    @Nested
    @DisplayName("Tests for the method findAll")
    class findAllTests {
        @Test
        void test1() {
            MigrationHistoryService object = new MigrationHistoryService();
            object.findAll();
        }
    }
    @Nested
    @DisplayName("Tests for the method save")
    class saveTests {
        @Test
        void test1() {
            int value = -0.5;
            MigrationHistoryService object = new MigrationHistoryService();
            object.save(value);
        }
        @Test
        void test2() {
            float value = 10.23;
            MigrationHistoryService object = new MigrationHistoryService();
            object.save(value);
        }
        @Test
        void test3() {
            String value = "path/to/folder/";
            MigrationHistoryService object = new MigrationHistoryService();
            object.save(value);
        }
        @Test
        void test4() {
            int value = -1.0;
            MigrationHistoryService object = new MigrationHistoryService();
            object.save(value);
        }
        @Test
        void test5() {
            int value = 0.0;
            MigrationHistoryService object = new MigrationHistoryService();
            object.save(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationHistoryService object = new MigrationHistoryService();
            object.save(value);
        }
    }
}
       int value = 0;
            MigrationHistoryService object = new MigrationHistoryService();
            object.findAllForMigration(value);
        }
    }
}
