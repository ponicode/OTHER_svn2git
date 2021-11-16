package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class AuthorityTest {
    @Nested
    @DisplayName("Tests for the method getName")
    class getNameTests {
        @Test
        void test1() {
            Authority object = new Authority();
            object.getName();
        }
    }
    @Nested
    @DisplayName("Tests for the method setName")
    class setNameTests {
        @Test
        void test1() {
            String value = "Edmond";
            Authority object = new Authority();
            object.setName(value);
        }
        @Test
        void test2() {
            String value = "George";
            Authority object = new Authority();
            object.setName(value);
        }
        @Test
        void test3() {
            String value = "Michael";
            Authority object = new Authority();
            object.setName(value);
        }
        @Test
        void test4() {
            String value = "Anas";
            Authority object = new Authority();
            object.setName(value);
        }
        @Test
        void test5() {
            String value = "Pierre Edouard";
            Authority object = new Authority();
            object.setName(value);
        }
        @Test
        void test6() {
            String value = "";
            Authority object = new Authority();
            object.setName(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method equals")
    class equalsTests {
        @Test
        void test1() {
            String value = "email@Google.com";
            Authority object = new Authority();
            object.equals(value);
        }
        @Test
        void test2() {
            float value = 1;
            Authority object = new Authority();
            object.equals(value);
        }
        @Test
        void test3() {
            int value = -1;
            Authority object = new Authority();
            object.equals(value);
        }
        @Test
        void test4() {
            String value = "something@example.com";
            Authority object = new Authority();
            object.equals(value);
        }
        @Test
        void test5() {
            float value = -100;
            Authority object = new Authority();
            object.equals(value);
        }
        @Test
        void test6() {
            float value = 0;
            Authority object = new Authority();
            object.equals(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method hashCode")
    class hashCodeTests {
        @Test
        void test1() {
            Authority object = new Authority();
            object.hashCode();
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            Authority object = new Authority();
            object.toString();
        }
    }
}
