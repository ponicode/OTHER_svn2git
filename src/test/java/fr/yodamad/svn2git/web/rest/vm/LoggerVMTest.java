package fr.yodamad.svn2git.web.rest.vm;

import org.junit.jupiter.api.*;

public class LoggerVMTest {
    @Nested
    @DisplayName("Tests for the method getLevel")
    class getLevelTests {
        @Test
        void test1() {
            LoggerVM object = new LoggerVM();
            object.getLevel();
        }
    }
    @Nested
    @DisplayName("Tests for the method getName")
    class getNameTests {
        @Test
        void test1() {
            LoggerVM object = new LoggerVM();
            object.getName();
        }
    }
    @Nested
    @DisplayName("Tests for the method setName")
    class setNameTests {
        @Test
        void test1() {
            String value = "Jean-Philippe";
            LoggerVM object = new LoggerVM();
            object.setName(value);
        }
        @Test
        void test2() {
            String value = "Edmond";
            LoggerVM object = new LoggerVM();
            object.setName(value);
        }
        @Test
        void test3() {
            String value = "Pierre Edouard";
            LoggerVM object = new LoggerVM();
            object.setName(value);
        }
        @Test
        void test4() {
            String value = "Michael";
            LoggerVM object = new LoggerVM();
            object.setName(value);
        }
        @Test
        void test5() {
            String value = "George";
            LoggerVM object = new LoggerVM();
            object.setName(value);
        }
        @Test
        void test6() {
            String value = "";
            LoggerVM object = new LoggerVM();
            object.setName(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            LoggerVM object = new LoggerVM();
            object.toString();
        }
    }
    @Nested
    @DisplayName("Tests for the method setLevel")
    class setLevelTests {
        @Test
        void test1() {
            String value = "Edmond";
            LoggerVM object = new LoggerVM();
            object.setLevel(value);
        }
        @Test
        void test2() {
            String value = "Pierre Edouard";
            LoggerVM object = new LoggerVM();
            object.setLevel(value);
        }
        @Test
        void test3() {
            String value = "George";
            LoggerVM object = new LoggerVM();
            object.setLevel(value);
        }
        @Test
        void test4() {
            String value = "Anas";
            LoggerVM object = new LoggerVM();
            object.setLevel(value);
        }
        @Test
        void test5() {
            String value = "Michael";
            LoggerVM object = new LoggerVM();
            object.setLevel(value);
        }
        @Test
        void test6() {
            String value = "";
            LoggerVM object = new LoggerVM();
            object.setLevel(value);
        }
    }
}
