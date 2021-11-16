package fr.yodamad.svn2git.repository;

import org.junit.jupiter.api.*;

public class MigrationRepositoryTest {
    @Nested
    @DisplayName("Tests for the method findAllByUserIgnoreCaseOrderByIdDesc")
    class findAllByUserIgnoreCaseOrderByIdDescTests {
        @Test
        void test1() {
            String value = "username";
            MigrationRepository object = new MigrationRepository();
            object.findAllByUserIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test2() {
            String value = "user-name";
            MigrationRepository object = new MigrationRepository();
            object.findAllByUserIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test3() {
            String value = 123;
            MigrationRepository object = new MigrationRepository();
            object.findAllByUserIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test4() {
            String value = "user name";
            MigrationRepository object = new MigrationRepository();
            object.findAllByUserIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test5() {
            String value = "user123";
            MigrationRepository object = new MigrationRepository();
            object.findAllByUserIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test6() {
            String value = "";
            MigrationRepository object = new MigrationRepository();
            object.findAllByUserIgnoreCaseOrderByIdDesc(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllByStatusOrderByDateDesc")
    class findAllByStatusOrderByDateDescTests {
        @Test
        void test1() {
            int value = 1;
            MigrationRepository object = new MigrationRepository();
            object.findAllByStatusOrderByDateDesc(value);
        }
        @Test
        void test2() {
            String value = "draft";
            MigrationRepository object = new MigrationRepository();
            object.findAllByStatusOrderByDateDesc(value);
        }
        @Test
        void test3() {
            String value = "pending";
            MigrationRepository object = new MigrationRepository();
            object.findAllByStatusOrderByDateDesc(value);
        }
        @Test
        void test4() {
            int value = -1;
            MigrationRepository object = new MigrationRepository();
            object.findAllByStatusOrderByDateDesc(value);
        }
        @Test
        void test5() {
            float value = -1;
            MigrationRepository object = new MigrationRepository();
            object.findAllByStatusOrderByDateDesc(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationRepository object = new MigrationRepository();
            object.findAllByStatusOrderByDateDesc(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllBySvnGroupIgnoreCaseOrderByIdDesc")
    class findAllBySvnGroupIgnoreCaseOrderByIdDescTests {
        @Test
        void test1() {
            String value = "Configuration";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnGroupIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test2() {
            String value = "Quality";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnGroupIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test3() {
            String value = "Implementation";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnGroupIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test4() {
            String value = "Identity";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnGroupIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test5() {
            String value = "Interactions";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnGroupIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test6() {
            String value = "";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnGroupIgnoreCaseOrderByIdDesc(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDesc")
    class findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDescTests {
        @Test
        void test1() {
            String value = "/usr/share";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test2() {
            String value = "/selinux";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test3() {
            String value = "/usr/sbin";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test4() {
            String value = "/usr/ports";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test5() {
            String value = "/opt/share";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDesc(value);
        }
        @Test
        void test6() {
            String value = "";
            MigrationRepository object = new MigrationRepository();
            object.findAllBySvnProjectEndingWithIgnoreCaseOrderByIdDesc(value);
        }
    }
}
