package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class DateTimeFormatConfigurationTest {
    @Nested
    @DisplayName("Tests for the method addFormatters")
    class addFormattersTests {
        @Test
        void test1() {
            String value = "Michael";
            DateTimeFormatConfiguration object = new DateTimeFormatConfiguration();
            object.addFormatters(value);
        }
        @Test
        void test2() {
            float value = 1.0;
            DateTimeFormatConfiguration object = new DateTimeFormatConfiguration();
            object.addFormatters(value);
        }
        @Test
        void test3() {
            int value = 0.0;
            DateTimeFormatConfiguration object = new DateTimeFormatConfiguration();
            object.addFormatters(value);
        }
        @Test
        void test4() {
            String value = "Jean-Philippe";
            DateTimeFormatConfiguration object = new DateTimeFormatConfiguration();
            object.addFormatters(value);
        }
        @Test
        void test5() {
            int value = 0.5;
            DateTimeFormatConfiguration object = new DateTimeFormatConfiguration();
            object.addFormatters(value);
        }
        @Test
        void test6() {
            int value = 0;
            DateTimeFormatConfiguration object = new DateTimeFormatConfiguration();
            object.addFormatters(value);
        }
    }
}
