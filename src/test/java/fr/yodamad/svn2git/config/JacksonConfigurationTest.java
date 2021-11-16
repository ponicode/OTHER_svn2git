package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class JacksonConfigurationTest {
    @Nested
    @DisplayName("Tests for the method javaTimeModule")
    class javaTimeModuleTests {
        @Test
        void test1() {
            JacksonConfiguration object = new JacksonConfiguration();
            object.javaTimeModule();
        }
    }
    @Nested
    @DisplayName("Tests for the method jdk8TimeModule")
    class jdk8TimeModuleTests {
        @Test
        void test1() {
            JacksonConfiguration object = new JacksonConfiguration();
            object.jdk8TimeModule();
        }
    }
}
  }
}
