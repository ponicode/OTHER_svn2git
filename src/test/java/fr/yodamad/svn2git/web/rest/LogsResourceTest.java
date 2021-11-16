package fr.yodamad.svn2git.web.rest;

import org.junit.jupiter.api.*;

public class LogsResourceTest {
    @Nested
    @DisplayName("Tests for the method getList")
    class getListTests {
        @Test
        void test1() {
            LogsResource object = new LogsResource();
            object.getList();
        }
    }
    @Nested
    @DisplayName("Tests for the method changeLevel")
    class changeLevelTests {
        @Test
        void test1() {
            float value = -1;
            LogsResource object = new LogsResource();
            object.changeLevel(value);
        }
        @Test
        void test2() {
            int value = 100;
            LogsResource object = new LogsResource();
            object.changeLevel(value);
        }
        @Test
        void test3() {
            float value = 1;
            LogsResource object = new LogsResource();
            object.changeLevel(value);
        }
        @Test
        void test4() {
            String value = "\"{\"x\":[10,null,null,null]}\"";
            LogsResource object = new LogsResource();
            object.changeLevel(value);
        }
        @Test
        void test5() {
            String value = "\"\"2006-01-02T14:04:05.000Z\"\"";
            LogsResource object = new LogsResource();
            object.changeLevel(value);
        }
        @Test
        void test6() {
            int value = 0;
            LogsResource object = new LogsResource();
            object.changeLevel(value);
        }
    }
}
