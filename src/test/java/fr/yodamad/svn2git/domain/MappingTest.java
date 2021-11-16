package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class MappingTest {
    @Nested
    @DisplayName("Tests for the method getId")
    class getIdTests {
        @Test
        void test1() {
            Mapping object = new Mapping();
            object.getId();
        }
    }
    @Nested
    @DisplayName("Tests for the method getSvnDirectory")
    class getSvnDirectoryTests {
        @Test
        void test1() {
            Mapping object = new Mapping();
            object.getSvnDirectory();
        }
    }
    @Nested
    @DisplayName("Tests for the method setId")
    class setIdTests {
        @Test
        void test1() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            Mapping object = new Mapping();
            object.setId(value);
        }
        @Test
        void test2() {
            float value = 1.0;
            Mapping object = new Mapping();
            object.setId(value);
        }
        @Test
        void test3() {
            float value = 10.23;
            Mapping object = new Mapping();
            object.setId(value);
        }
        @Test
        void test4() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            Mapping object = new Mapping();
            object.setId(value);
        }
        @Test
        void test5() {
            int value = 1.0;
            Mapping object = new Mapping();
            object.setId(value);
        }
        @Test
        void test6() {
            float value = 0;
            Mapping object = new Mapping();
            object.setId(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method svnDirectory")
    class svnDirectoryTests {
        @Test
        void test1() {
            String value = "and Sons";
            Mapping object = new Mapping();
            object.svnDirectory(value);
        }
        @Test
        void test2() {
            String value = "LLC";
            Mapping object = new Mapping();
            object.svnDirectory(value);
        }
        @Test
        void test3() {
            String value = "Inc";
            Mapping object = new Mapping();
            object.svnDirectory(value);
        }
        @Test
        void test4() {
            String value = "";
            Mapping object = new Mapping();
            object.svnDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setSvnDirectory")
    class setSvnDirectoryTests {
        @Test
        void test1() {
            String value = "and Sons";
            Mapping object = new Mapping();
            object.setSvnDirectory(value);
        }
        @Test
        void test2() {
            String value = "Inc";
            Mapping object = new Mapping();
            object.setSvnDirectory(value);
        }
        @Test
        void test3() {
            String value = "LLC";
            Mapping object = new Mapping();
            object.setSvnDirectory(value);
        }
        @Test
        void test4() {
            String value = "";
            Mapping object = new Mapping();
            object.setSvnDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getRegex")
    class getRegexTests {
        @Test
        void test1() {
            Mapping object = new Mapping();
            object.getRegex();
        }
    }
    @Nested
    @DisplayName("Tests for the method regex")
    class regexTests {
        @Test
        void test1() {
            String value = "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)";
            Mapping object = new Mapping();
            object.regex(value);
        }
        @Test
        void test2() {
            String value = "(file format) ([a-zA-Z0-9_\\-]+)";
            Mapping object = new Mapping();
            object.regex(value);
        }
        @Test
        void test3() {
            String value = "(definition-(checksum|signature)\\s[\\w=\\/+]+)";
            Mapping object = new Mapping();
            object.regex(value);
        }
        @Test
        void test4() {
            String value = "(?:non-capturing)";
            Mapping object = new Mapping();
            object.regex(value);
        }
        @Test
        void test5() {
            String value = "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)";
            Mapping object = new Mapping();
            object.regex(value);
        }
        @Test
        void test6() {
            String value = "";
            Mapping object = new Mapping();
            object.regex(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setRegex")
    class setRegexTests {
        @Test
        void test1() {
            String value = "min\\s+\\d+\\s+of";
            Mapping object = new Mapping();
            object.setRegex(value);
        }
        @Test
        void test2() {
            String value = "(file format) ([a-zA-Z0-9_\\-]+)";
            Mapping object = new Mapping();
            object.setRegex(value);
        }
        @Test
        void test3() {
            String value = "definition-checksum\\s(?P<checksum>\\w+)";
            Mapping object = new Mapping();
            object.setRegex(value);
        }
        @Test
        void test4() {
            String value = "(?:non-capturing)";
            Mapping object = new Mapping();
            object.setRegex(value);
        }
        @Test
        void test5() {
            String value = "(?P<first_group_name>.*)-(?P=first_group_name)";
            Mapping object = new Mapping();
            object.setRegex(value);
        }
        @Test
        void test6() {
            String value = "";
            Mapping object = new Mapping();
            object.setRegex(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method gitDirectory")
    class gitDirectoryTests {
        @Test
        void test1() {
            String value = "/usr/sbin";
            Mapping object = new Mapping();
            object.gitDirectory(value);
        }
        @Test
        void test2() {
            String value = "/opt/share";
            Mapping object = new Mapping();
            object.gitDirectory(value);
        }
        @Test
        void test3() {
            String value = "/usr/share";
            Mapping object = new Mapping();
            object.gitDirectory(value);
        }
        @Test
        void test4() {
            String value = "/usr/ports";
            Mapping object = new Mapping();
            object.gitDirectory(value);
        }
        @Test
        void test5() {
            String value = "/selinux";
            Mapping object = new Mapping();
            object.gitDirectory(value);
        }
        @Test
        void test6() {
            String value = "";
            Mapping object = new Mapping();
            object.gitDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method isSvnDirectoryDelete")
    class isSvnDirectoryDeleteTests {
        @Test
        void test1() {
            Mapping object = new Mapping();
            object.isSvnDirectoryDelete();
        }
    }
    @Nested
    @DisplayName("Tests for the method setGitDirectory")
    class setGitDirectoryTests {
        @Test
        void test1() {
            String value = "/selinux";
            Mapping object = new Mapping();
            object.setGitDirectory(value);
        }
        @Test
        void test2() {
            String value = "/usr/sbin";
            Mapping object = new Mapping();
            object.setGitDirectory(value);
        }
        @Test
        void test3() {
            String value = "/usr/share";
            Mapping object = new Mapping();
            object.setGitDirectory(value);
        }
        @Test
        void test4() {
            String value = "/opt/share";
            Mapping object = new Mapping();
            object.setGitDirectory(value);
        }
        @Test
        void test5() {
            String value = "/usr/ports";
            Mapping object = new Mapping();
            object.setGitDirectory(value);
        }
        @Test
        void test6() {
            String value = "";
            Mapping object = new Mapping();
            object.setGitDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method svnDirectoryDelete")
    class svnDirectoryDeleteTests {
        @Test
        void test1() {
            int value = 10.0;
            Mapping object = new Mapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test2() {
            String value = "v1.2.4";
            Mapping object = new Mapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test3() {
            int value = 0.5;
            Mapping object = new Mapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test4() {
            float value = -29.45;
            Mapping object = new Mapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test5() {
            int value = 10.23;
            Mapping object = new Mapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test6() {
            float value = 0;
            Mapping object = new Mapping();
            object.svnDirectoryDelete(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setSvnDirectoryDelete")
    class setSvnDirectoryDeleteTests {
        @Test
        void test1() {
            int value = 1;
            Mapping object = new Mapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test2() {
            float value = 1;
            Mapping object = new Mapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test3() {
            int value = -1;
            Mapping object = new Mapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test4() {
            String value = "v4.0.0-rc.4";
            Mapping object = new Mapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test5() {
            float value = 100;
            Mapping object = new Mapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test6() {
            int value = 0;
            Mapping object = new Mapping();
            object.setSvnDirectoryDelete(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method migration")
    class migrationTests {
        @Test
        void test1() {
            int value = 10.0;
            Mapping object = new Mapping();
            object.migration(value);
        }
        @Test
        void test2() {
            int value = -0.5;
            Mapping object = new Mapping();
            object.migration(value);
        }
        @Test
        void test3() {
            int value = 0.0;
            Mapping object = new Mapping();
            object.migration(value);
        }
        @Test
        void test4() {
            int value = 10.23;
            Mapping object = new Mapping();
            object.migration(value);
        }
        @Test
        void test5() {
            String value = "C:\\\\path\\to\\file.ext";
            Mapping object = new Mapping();
            object.migration(value);
        }
        @Test
        void test6() {
            float value = 0;
            Mapping object = new Mapping();
            object.migration(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method equals")
    class equalsTests {
        @Test
        void test1() {
            String value = "bed-free@tutanota.de";
            Mapping object = new Mapping();
            object.equals(value);
        }
        @Test
        void test2() {
            float value = 10.0;
            Mapping object = new Mapping();
            object.equals(value);
        }
        @Test
        void test3() {
            String value = "user1+user2@mycompany.com";
            Mapping object = new Mapping();
            object.equals(value);
        }
        @Test
        void test4() {
            int value = -1.0;
            Mapping object = new Mapping();
            object.equals(value);
        }
        @Test
        void test5() {
            String value = "something@example.com";
            Mapping object = new Mapping();
            object.equals(value);
        }
        @Test
        void test6() {
            int value = 0;
            Mapping object = new Mapping();
            object.equals(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method hashCode")
    class hashCodeTests {
        @Test
        void test1() {
            Mapping object = new Mapping();
            object.hashCode();
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            Mapping object = new Mapping();
            object.toString();
        }
    }
}
