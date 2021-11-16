package fr.yodamad.svn2git.web.rest.errors;

import org.junit.jupiter.api.*;

public class BadRequestAlertExceptionTest {
    @Nested
    @DisplayName("Tests for the method getErrorKey")
    class getErrorKeyTests {
        @Test
        void test1() {
            BadRequestAlertException object = new BadRequestAlertException();
            object.getErrorKey();
        }
    }
}
  }
}
