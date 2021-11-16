package fr.yodamad.svn2git;

import org.junit.jupiter.api.*;

public class ApplicationWebXmlTest {
    @Nested
    @DisplayName("Tests for the method configure")
    class configureTests {
        @Test
        void test1() {
            int value = -1;
            ApplicationWebXml object = new ApplicationWebXml();
            object.configure(value);
        }
        @Test
        void test2() {
            float value = 100;
            ApplicationWebXml object = new ApplicationWebXml();
            object.configure(value);
        }
        @Test
        void test3() {
            String value = "jpeg";
            ApplicationWebXml object = new ApplicationWebXml();
            object.configure(value);
        }
        @Test
        void test4() {
            String value = "pdf";
            ApplicationWebXml object = new ApplicationWebXml();
            object.configure(value);
        }
        @Test
        void test5() {
            int value = 100;
            ApplicationWebXml object = new ApplicationWebXml();
            object.configure(value);
        }
        @Test
        void test6() {
            int value = 0;
            ApplicationWebXml object = new ApplicationWebXml();
            object.configure(value);
        }
    }
}
