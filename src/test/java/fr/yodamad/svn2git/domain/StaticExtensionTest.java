package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class StaticExtensionTest {
    @Nested
    @DisplayName("Tests for the method getValue")
    class getValueTests {
        @Test
        void test1() {
            StaticExtension object = new StaticExtension();
            object.getValue();
        }
    }
    @Nested
    @DisplayName("Tests for the method setId")
    class setIdTests {
        @Test
        void test1() {
            float value = -1.0;
            StaticExtension object = new StaticExtension();
            object.setId(value);
        }
        @Test
        void test2() {
            int value = -1.0;
            StaticExtension object = new StaticExtension();
            object.setId(value);
        }
        @Test
        void test3() {
            float value = 0.0;
            StaticExtension object = new StaticExtension();
            object.setId(value);
        }
        @Test
        void test4() {
            int value = 0.0;
            StaticExtension object = new StaticExtension();
            object.setId(value);
        }
        @Test
        void test5() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            StaticExtension object = new StaticExtension();
            object.setId(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticExtension object = new StaticExtension();
            object.setId(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method value")
    class valueTests {
        @Test
        void test1() {
            String value = "elio@example.com";
            StaticExtension object = new StaticExtension();
            object.value(value);
        }
        @Test
        void test2() {
            String value = "Elio";
            StaticExtension object = new StaticExtension();
            object.value(value);
        }
        @Test
        void test3() {
            String value = "Dillenberg";
            StaticExtension object = new StaticExtension();
            object.value(value);
        }
        @Test
        void test4() {
            String value = "";
            StaticExtension object = new StaticExtension();
            object.value(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setValue")
    class setValueTests {
        @Test
        void test1() {
            String value = "Dillenberg";
            StaticExtension object = new StaticExtension();
            object.setValue(value);
        }
        @Test
        void test2() {
            String value = "Elio";
            StaticExtension object = new StaticExtension();
            object.setValue(value);
        }
        @Test
        void test3() {
            String value = "elio@example.com";
            StaticExtension object = new StaticExtension();
            object.setValue(value);
        }
        @Test
        void test4() {
            String value = "";
            StaticExtension object = new StaticExtension();
            object.setValue(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getDescription")
    class getDescriptionTests {
        @Test
        void test1() {
            StaticExtension object = new StaticExtension();
            object.getDescription();
        }
    }
    @Nested
    @DisplayName("Tests for the method description")
    class descriptionTests {
        @Test
        void test1() {
            String value = " description ";
            StaticExtension object = new StaticExtension();
            object.description(value);
        }
        @Test
        void test2() {
            String value = "No description available.";
            StaticExtension object = new StaticExtension();
            object.description(value);
        }
        @Test
        void test3() {
            String value = "Print Base";
            StaticExtension object = new StaticExtension();
            object.description(value);
        }
        @Test
        void test4() {
            String value = "This is group1";
            StaticExtension object = new StaticExtension();
            object.description(value);
        }
        @Test
        void test5() {
            String value = "policy_abc";
            StaticExtension object = new StaticExtension();
            object.description(value);
        }
        @Test
        void test6() {
            String value = "";
            StaticExtension object = new StaticExtension();
            object.description(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setDescription")
    class setDescriptionTests {
        @Test
        void test1() {
            String value = "(no description available)";
            StaticExtension object = new StaticExtension();
            object.setDescription(value);
        }
        @Test
        void test2() {
            String value = "policy_abc";
            StaticExtension object = new StaticExtension();
            object.setDescription(value);
        }
        @Test
        void test3() {
            String value = "No description.";
            StaticExtension object = new StaticExtension();
            object.setDescription(value);
        }
        @Test
        void test4() {
            String value = "No description available.";
            StaticExtension object = new StaticExtension();
            object.setDescription(value);
        }
        @Test
        void test5() {
            String value = "This is group1";
            StaticExtension object = new StaticExtension();
            object.setDescription(value);
        }
        @Test
        void test6() {
            String value = "";
            StaticExtension object = new StaticExtension();
            object.setDescription(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method isEnabled")
    class isEnabledTests {
        @Test
        void test1() {
            StaticExtension object = new StaticExtension();
            object.isEnabled();
        }
    }
    @Nested
    @DisplayName("Tests for the method enabled")
    class enabledTests {
        @Test
        void test1() {
            float value = 0;
            StaticExtension object = new StaticExtension();
            object.enabled(value);
        }
        @Test
        void test2() {
            String value = 0.1;
            StaticExtension object = new StaticExtension();
            object.enabled(value);
        }
        @Test
        void test3() {
            int value = 100;
            StaticExtension object = new StaticExtension();
            object.enabled(value);
        }
        @Test
        void test4() {
            String value = 10;
            StaticExtension object = new StaticExtension();
            object.enabled(value);
        }
        @Test
        void test5() {
            int value = -1;
            StaticExtension object = new StaticExtension();
            object.enabled(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticExtension object = new StaticExtension();
            object.enabled(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method equals")
    class equalsTests {
        @Test
        void test1() {
            float value = 1;
            StaticExtension object = new StaticExtension();
            object.equals(value);
        }
        @Test
        void test2() {
            String value = "user1+user2@mycompany.com";
            StaticExtension object = new StaticExtension();
            object.equals(value);
        }
        @Test
        void test3() {
            int value = -1;
            StaticExtension object = new StaticExtension();
            object.equals(value);
        }
        @Test
        void test4() {
            String value = "ponicode.com";
            StaticExtension object = new StaticExtension();
            object.equals(value);
        }
        @Test
        void test5() {
            int value = -100;
            StaticExtension object = new StaticExtension();
            object.equals(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticExtension object = new StaticExtension();
            object.equals(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method hashCode")
    class hashCodeTests {
        @Test
        void test1() {
            StaticExtension object = new StaticExtension();
            object.hashCode();
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            StaticExtension object = new StaticExtension();
            object.toString();
        }
    }
}
