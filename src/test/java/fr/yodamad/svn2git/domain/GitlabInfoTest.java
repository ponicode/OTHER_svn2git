package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class GitlabInfoTest {
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            GitlabInfo object = new GitlabInfo();
            object.toString();
        }
    }
}
