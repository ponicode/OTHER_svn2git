package fr.yodamad.svn2git.service.util;

import org.junit.jupiter.api.*;

public class RandomUtilTest {
    @Nested
    @DisplayName("Tests for the static method generatePassword")
    class staticGeneratePasswordTests {
        @Test
        void test1() {
            RandomUtil.generatePassword();
        }
    }
    @Nested
    @DisplayName("Tests for the static method generateActivationKey")
    class staticGenerateActivationKeyTests {
        @Test
        void test1() {
            RandomUtil.generateActivationKey();
        }
    }
    @Nested
    @DisplayName("Tests for the static method generateResetKey")
    class staticGenerateResetKeyTests {
        @Test
        void test1() {
            RandomUtil.generateResetKey();
        }
    }
}
