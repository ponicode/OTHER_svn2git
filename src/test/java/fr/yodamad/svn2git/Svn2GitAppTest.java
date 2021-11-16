package fr.yodamad.svn2git;

import org.junit.jupiter.api.*;

public class Svn2GitAppTest {
    @Nested
    @DisplayName("Tests for the method initApplication")
    class initApplicationTests {
        @Test
        void test1() {
            Svn2GitApp object = new Svn2GitApp();
            object.initApplication();
        }
    }
}
