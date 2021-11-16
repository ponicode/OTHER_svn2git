package fr.yodamad.svn2git.security;

import org.junit.jupiter.api.*;

public class SecurityUtilsTest {
    @Nested
    @DisplayName("Tests for the static method getCurrentUserLogin")
    class staticGetCurrentUserLoginTests {
        @Test
        void test1() {
            SecurityUtils.getCurrentUserLogin();
        }
    }
    @Nested
    @DisplayName("Tests for the static method isAuthenticated")
    class staticIsAuthenticatedTests {
        @Test
        void test1() {
            SecurityUtils.isAuthenticated();
        }
    }
}
  }
}
