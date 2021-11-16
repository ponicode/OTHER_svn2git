package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class LiquibaseConfigurationTest {
    @Nested
    @DisplayName("Tests for the method liquibase")
    class liquibaseTests {
        @Test
        void test1() {
            int value = -100;
            float value2 = 0;
            int value3 = 100;
            LiquibaseConfiguration object = new LiquibaseConfiguration();
            object.liquibase(value,value2,value3);
        }
        @Test
        void test2() {
            int value = 100;
            float value2 = -100;
            int value3 = -100;
            LiquibaseConfiguration object = new LiquibaseConfiguration();
            object.liquibase(value,value2,value3);
        }
        @Test
        void test3() {
            String value = "Marketing";
            String value2 = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E";
            String value3 = "Pierre Edouard";
            LiquibaseConfiguration object = new LiquibaseConfiguration();
            object.liquibase(value,value2,value3);
        }
        @Test
        void test4() {
            String value = "Software Engineer";
            float value2 = 0;
            String value3 = "Edmond";
            LiquibaseConfiguration object = new LiquibaseConfiguration();
            object.liquibase(value,value2,value3);
        }
        @Test
        void test5() {
            float value = 0;
            int value2 = 100;
            String value3 = "Edmond";
            LiquibaseConfiguration object = new LiquibaseConfiguration();
            object.liquibase(value,value2,value3);
        }
        @Test
        void test6() {
            float value = 0;
            String value2 = "";
            float value3 = 0;
            LiquibaseConfiguration object = new LiquibaseConfiguration();
            object.liquibase(value,value2,value3);
        }
    }
}
