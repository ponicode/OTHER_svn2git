package fr.yodamad.svn2git.web.rest;

import org.junit.jupiter.api.*;

public class StaticMappingResourceTest {
    @Nested
    @DisplayName("Tests for the method updateStaticMapping")
    class updateStaticMappingTests {
        @Test
        void test1() {
            float value = -1;
            StaticMappingResource object = new StaticMappingResource();
            object.updateStaticMapping(value);
        }
        @Test
        void test2() {
            String value = "c466a48309794261b64a4f02cfcc3d64";
            StaticMappingResource object = new StaticMappingResource();
            object.updateStaticMapping(value);
        }
        @Test
        void test3() {
            String value = "bc23a9d531064583ace8f67dad60f6bb";
            StaticMappingResource object = new StaticMappingResource();
            object.updateStaticMapping(value);
        }
        @Test
        void test4() {
            int value = -1;
            StaticMappingResource object = new StaticMappingResource();
            object.updateStaticMapping(value);
        }
        @Test
        void test5() {
            float value = 100;
            StaticMappingResource object = new StaticMappingResource();
            object.updateStaticMapping(value);
        }
        @Test
        void test6() {
            float value = 0;
            StaticMappingResource object = new StaticMappingResource();
            object.updateStaticMapping(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getStaticMapping")
    class getStaticMappingTests {
        @Test
        void test1() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            StaticMappingResource object = new StaticMappingResource();
            object.getStaticMapping(value);
        }
        @Test
        void test2() {
            int value = 0.0;
            StaticMappingResource object = new StaticMappingResource();
            object.getStaticMapping(value);
        }
        @Test
        void test3() {
            int value = 1.0;
            StaticMappingResource object = new StaticMappingResource();
            object.getStaticMapping(value);
        }
        @Test
        void test4() {
            int value = 0.5;
            StaticMappingResource object = new StaticMappingResource();
            object.getStaticMapping(value);
        }
        @Test
        void test5() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            StaticMappingResource object = new StaticMappingResource();
            object.getStaticMapping(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticMappingResource object = new StaticMappingResource();
            object.getStaticMapping(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method deleteStaticMapping")
    class deleteStaticMappingTests {
        @Test
        void test1() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            StaticMappingResource object = new StaticMappingResource();
            object.deleteStaticMapping(value);
        }
        @Test
        void test2() {
            int value = 0.5;
            StaticMappingResource object = new StaticMappingResource();
            object.deleteStaticMapping(value);
        }
        @Test
        void test3() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            StaticMappingResource object = new StaticMappingResource();
            object.deleteStaticMapping(value);
        }
        @Test
        void test4() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            StaticMappingResource object = new StaticMappingResource();
            object.deleteStaticMapping(value);
        }
        @Test
        void test5() {
            int value = 10.0;
            StaticMappingResource object = new StaticMappingResource();
            object.deleteStaticMapping(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticMappingResource object = new StaticMappingResource();
            object.deleteStaticMapping(value);
        }
    }
}
