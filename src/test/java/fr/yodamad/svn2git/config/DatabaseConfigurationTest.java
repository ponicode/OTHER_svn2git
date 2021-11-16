package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class DatabaseConfigurationTest {
    @Nested
    @DisplayName("Tests for the method h2TCPServer")
    class h2TCPServerTests {
        @Test
        void test1() {
            DatabaseConfiguration object = new DatabaseConfiguration();
            object.h2TCPServer();
        }
    }
}
