package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class SecurityConfigurationTest {
    @Nested
    @DisplayName("Tests for the method authenticationManagerBean")
    class authenticationManagerBeanTests {
        @Test
        void test1() {
            SecurityConfiguration object = new SecurityConfiguration();
            object.authenticationManagerBean();
        }
    }
    @Nested
    @DisplayName("Tests for the method init")
    class initTests {
        @Test
        void test1() {
            SecurityConfiguration object = new SecurityConfiguration();
            object.init();
        }
    }
}
wordEncoder();
        }
    }
}
