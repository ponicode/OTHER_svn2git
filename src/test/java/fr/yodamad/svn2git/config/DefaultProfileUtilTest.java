package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class DefaultProfileUtilTest {
    @Nested
    @DisplayName("Tests for the static method addDefaultProfile")
    class staticAddDefaultProfileTests {
        @Test
        void test1() {
            String value = "https://croplands.org/app/a/reset?token=";
            DefaultProfileUtil.addDefaultProfile(value);
        }
        @Test
        void test2() {
            String value = "http://base.com";
            DefaultProfileUtil.addDefaultProfile(value);
        }
        @Test
        void test3() {
            float value = -100;
            DefaultProfileUtil.addDefaultProfile(value);
        }
        @Test
        void test4() {
            int value = 0;
            DefaultProfileUtil.addDefaultProfile(value);
        }
        @Test
        void test5() {
            float value = -1;
            DefaultProfileUtil.addDefaultProfile(value);
        }
        @Test
        void test6() {
            float value = 0;
            DefaultProfileUtil.addDefaultProfile(value);
        }
    }
    @Nested
    @DisplayName("Tests for the static method getActiveProfiles")
    class staticGetActiveProfilesTests {
        @Test
        void test1() {
            DefaultProfileUtil.getActiveProfiles(null);
        }
    }
}
