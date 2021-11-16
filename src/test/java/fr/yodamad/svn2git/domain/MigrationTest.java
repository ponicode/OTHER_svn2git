package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class MigrationTest {
    @Nested
    @DisplayName("Tests for the method getSvnGroup")
    class getSvnGroupTests {
        @Test
        void test1() {
            Migration object = new Migration();
            object.getSvnGroup();
        }
    }
    @Nested
    @DisplayName("Tests for the method setId")
    class setIdTests {
        @Test
        void test1() {
            int value = -1;
            Migration object = new Migration();
            object.setId(value);
        }
        @Test
        void test2() {
            int value = -100;
            Migration object = new Migration();
            object.setId(value);
        }
        @Test
        void test3() {
            float value = 1;
            Migration object = new Migration();
            object.setId(value);
        }
        @Test
        void test4() {
            int value = 100;
            Migration object = new Migration();
            object.setId(value);
        }
        @Test
        void test5() {
            int value = 0;
            Migration object = new Migration();
            object.setId(value);
        }
        @Test
        void test6() {
            float value = 0;
            Migration object = new Migration();
            object.setId(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method svnGroup")
    class svnGroupTests {
        @Test
        void test1() {
            String value = "jpeg";
            Migration object = new Migration();
            object.svnGroup(value);
        }
        @Test
        void test2() {
            String value = "m2v";
            Migration object = new Migration();
            object.svnGroup(value);
        }
        @Test
        void test3() {
            String value = "pdf";
            Migration object = new Migration();
            object.svnGroup(value);
        }
        @Test
        void test4() {
            String value = "mpe";
            Migration object = new Migration();
            object.svnGroup(value);
        }
        @Test
        void test5() {
            String value = "";
            Migration object = new Migration();
            object.svnGroup(value);
        }
    }
}
);
        }
    }
}
