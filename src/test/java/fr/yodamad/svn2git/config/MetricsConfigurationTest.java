package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class MetricsConfigurationTest {
    @Nested
    @DisplayName("Tests for the method getHealthCheckRegistry")
    class getHealthCheckRegistryTests {
        @Test
        void test1() {
            MetricsConfiguration object = new MetricsConfiguration();
            object.getHealthCheckRegistry();
        }
    }
    @Nested
    @DisplayName("Tests for the method init")
    class initTests {
        @Test
        void test1() {
            MetricsConfiguration object = new MetricsConfiguration();
            object.init();
        }
    }
    @Nested
    @DisplayName("Tests for the method setHikariDataSource")
    class setHikariDataSourceTests {
        @Test
        void test1() {
            int value = 1;
            MetricsConfiguration object = new MetricsConfiguration();
            object.setHikariDataSource(value);
        }
        @Test
        void test2() {
            int value = 0;
            MetricsConfiguration object = new MetricsConfiguration();
            object.setHikariDataSource(value);
        }
        @Test
        void test3() {
            String value = "1.0.0";
            MetricsConfiguration object = new MetricsConfiguration();
            object.setHikariDataSource(value);
        }
        @Test
        void test4() {
            int value = 100;
            MetricsConfiguration object = new MetricsConfiguration();
            object.setHikariDataSource(value);
        }
        @Test
        void test5() {
            int value = -1;
            MetricsConfiguration object = new MetricsConfiguration();
            object.setHikariDataSource(value);
        }
        @Test
        void test6() {
            float value = 0;
            MetricsConfiguration object = new MetricsConfiguration();
            object.setHikariDataSource(value);
        }
    }
}
