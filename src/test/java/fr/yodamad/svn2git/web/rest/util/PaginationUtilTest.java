package fr.yodamad.svn2git.web.rest.util;

import org.junit.jupiter.api.*;

public class PaginationUtilTest {
    @Nested
    @DisplayName("Tests for the static method generatePaginationHttpHeaders")
    class staticGeneratePaginationHttpHeadersTests {
        @Test
        void test1() {
            PaginationUtil.generatePaginationHttpHeaders(null,null);
        }
    }
}
