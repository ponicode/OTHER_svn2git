package fr.yodamad.svn2git.web.rest;

import org.junit.jupiter.api.*;

public class StaticExtensionResourceTest {
    @Nested
    @DisplayName("Tests for the method getAllStaticExtensions")
    class getAllStaticExtensionsTests {
        @Test
        void test1() {
            StaticExtensionResource object = new StaticExtensionResource();
            object.getAllStaticExtensions();
        }
    }
    @Nested
    @DisplayName("Tests for the method createStaticExtension")
    class createStaticExtensionTests {
        @Test
        void test1() {
            float value = 0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.createStaticExtension(value);
        }
        @Test
        void test2() {
            String value = "v4.0.0-rc.4";
            StaticExtensionResource object = new StaticExtensionResource();
            object.createStaticExtension(value);
        }
        @Test
        void test3() {
            String value = "v1.2.4";
            StaticExtensionResource object = new StaticExtensionResource();
            object.createStaticExtension(value);
        }
        @Test
        void test4() {
            float value = -1;
            StaticExtensionResource object = new StaticExtensionResource();
            object.createStaticExtension(value);
        }
        @Test
        void test5() {
            int value = -1;
            StaticExtensionResource object = new StaticExtensionResource();
            object.createStaticExtension(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.createStaticExtension(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method updateStaticExtension")
    class updateStaticExtensionTests {
        @Test
        void test1() {
            String value = "v1.2.4";
            StaticExtensionResource object = new StaticExtensionResource();
            object.updateStaticExtension(value);
        }
        @Test
        void test2() {
            String value = "4.0.0-beta1\t";
            StaticExtensionResource object = new StaticExtensionResource();
            object.updateStaticExtension(value);
        }
        @Test
        void test3() {
            float value = 0.0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.updateStaticExtension(value);
        }
        @Test
        void test4() {
            int value = 10.23;
            StaticExtensionResource object = new StaticExtensionResource();
            object.updateStaticExtension(value);
        }
        @Test
        void test5() {
            float value = -0.5;
            StaticExtensionResource object = new StaticExtensionResource();
            object.updateStaticExtension(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.updateStaticExtension(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getStaticExtension")
    class getStaticExtensionTests {
        @Test
        void test1() {
            float value = -0.5;
            StaticExtensionResource object = new StaticExtensionResource();
            object.getStaticExtension(value);
        }
        @Test
        void test2() {
            int value = -0.5;
            StaticExtensionResource object = new StaticExtensionResource();
            object.getStaticExtension(value);
        }
        @Test
        void test3() {
            int value = 0.0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.getStaticExtension(value);
        }
        @Test
        void test4() {
            int value = 1.0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.getStaticExtension(value);
        }
        @Test
        void test5() {
            float value = 0.5;
            StaticExtensionResource object = new StaticExtensionResource();
            object.getStaticExtension(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.getStaticExtension(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method deleteStaticExtension")
    class deleteStaticExtensionTests {
        @Test
        void test1() {
            int value = -100;
            StaticExtensionResource object = new StaticExtensionResource();
            object.deleteStaticExtension(value);
        }
        @Test
        void test2() {
            float value = -100;
            StaticExtensionResource object = new StaticExtensionResource();
            object.deleteStaticExtension(value);
        }
        @Test
        void test3() {
            int value = 100;
            StaticExtensionResource object = new StaticExtensionResource();
            object.deleteStaticExtension(value);
        }
        @Test
        void test4() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            StaticExtensionResource object = new StaticExtensionResource();
            object.deleteStaticExtension(value);
        }
        @Test
        void test5() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            StaticExtensionResource object = new StaticExtensionResource();
            object.deleteStaticExtension(value);
        }
        @Test
        void test6() {
            float value = 0;
            StaticExtensionResource object = new StaticExtensionResource();
            object.deleteStaticExtension(value);
        }
    }
}
