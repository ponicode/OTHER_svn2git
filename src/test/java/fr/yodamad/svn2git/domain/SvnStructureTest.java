package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class SvnStructureTest {
    @Nested
    @DisplayName("Tests for the method SvnModule.toString")
    class SvnModule_toStringTests {
        @Test
        void test1() {
            SvnStructure.SvnModule object = new SvnStructure.SvnModule();
            object.toString();
        }
    }
}
