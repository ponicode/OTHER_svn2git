package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class StaticMappingTest {
    @Nested
    @DisplayName("Tests for the method getId")
    class getIdTests {
        @Test
        void test1() {
            StaticMapping object = new StaticMapping();
            object.getId();
        }
    }
    @Nested
    @DisplayName("Tests for the method getSvnDirectory")
    class getSvnDirectoryTests {
        @Test
        void test1() {
            StaticMapping object = new StaticMapping();
            object.getSvnDirectory();
        }
    }
    @Nested
    @DisplayName("Tests for the method setId")
    class setIdTests {
        @Test
        void test1() {
            String value = "a85a8e6b-348b-4011-a1ec-1e78e9620782";
            StaticMapping object = new StaticMapping();
            object.setId(value);
        }
        @Test
        void test2() {
            float value = -1;
            StaticMapping object = new StaticMapping();
            object.setId(value);
        }
        @Test
        void test3() {
            float value = 100;
            StaticMapping object = new StaticMapping();
            object.setId(value);
        }
        @Test
        void test4() {
            int value = -100;
            StaticMapping object = new StaticMapping();
            object.setId(value);
        }
        @Test
        void test5() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            StaticMapping object = new StaticMapping();
            object.setId(value);
        }
        @Test
        void test6() {
            float value = 0;
            StaticMapping object = new StaticMapping();
            object.setId(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method svnDirectory")
    class svnDirectoryTests {
        @Test
        void test1() {
            String value = "Inc";
            StaticMapping object = new StaticMapping();
            object.svnDirectory(value);
        }
        @Test
        void test2() {
            String value = "and Sons";
            StaticMapping object = new StaticMapping();
            object.svnDirectory(value);
        }
        @Test
        void test3() {
            String value = "LLC";
            StaticMapping object = new StaticMapping();
            object.svnDirectory(value);
        }
        @Test
        void test4() {
            String value = "";
            StaticMapping object = new StaticMapping();
            object.svnDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setSvnDirectory")
    class setSvnDirectoryTests {
        @Test
        void test1() {
            String value = "Inc";
            StaticMapping object = new StaticMapping();
            object.setSvnDirectory(value);
        }
        @Test
        void test2() {
            String value = "and Sons";
            StaticMapping object = new StaticMapping();
            object.setSvnDirectory(value);
        }
        @Test
        void test3() {
            String value = "LLC";
            StaticMapping object = new StaticMapping();
            object.setSvnDirectory(value);
        }
        @Test
        void test4() {
            String value = "";
            StaticMapping object = new StaticMapping();
            object.setSvnDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getRegex")
    class getRegexTests {
        @Test
        void test1() {
            StaticMapping object = new StaticMapping();
            object.getRegex();
        }
    }
    @Nested
    @DisplayName("Tests for the method regex")
    class regexTests {
        @Test
        void test1() {
            String value = "(?P<first_group_name>.*)-(?P=first_group_name)";
            StaticMapping object = new StaticMapping();
            object.regex(value);
        }
        @Test
        void test2() {
            String value = "(?i)(?L)(?m)(?s)(?u)(?#)";
            StaticMapping object = new StaticMapping();
            object.regex(value);
        }
        @Test
        void test3() {
            String value = "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[";
            StaticMapping object = new StaticMapping();
            object.regex(value);
        }
        @Test
        void test4() {
            String value = "min\\s+\\d+\\s+of";
            StaticMapping object = new StaticMapping();
            object.regex(value);
        }
        @Test
        void test5() {
            String value = "(.*)-(.+)";
            StaticMapping object = new StaticMapping();
            object.regex(value);
        }
        @Test
        void test6() {
            String value = "";
            StaticMapping object = new StaticMapping();
            object.regex(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setRegex")
    class setRegexTests {
        @Test
        void test1() {
            String value = "definition-checksum\\s(?P<checksum>\\w+)";
            StaticMapping object = new StaticMapping();
            object.setRegex(value);
        }
        @Test
        void test2() {
            String value = "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)";
            StaticMapping object = new StaticMapping();
            object.setRegex(value);
        }
        @Test
        void test3() {
            String value = "(?i)(?L)(?m)(?s)(?u)(?#)";
            StaticMapping object = new StaticMapping();
            object.setRegex(value);
        }
        @Test
        void test4() {
            String value = "min\\s+\\d+\\s+of";
            StaticMapping object = new StaticMapping();
            object.setRegex(value);
        }
        @Test
        void test5() {
            String value = "(file format) ([a-zA-Z0-9_\\-]+)";
            StaticMapping object = new StaticMapping();
            object.setRegex(value);
        }
        @Test
        void test6() {
            String value = "";
            StaticMapping object = new StaticMapping();
            object.setRegex(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getGitDirectory")
    class getGitDirectoryTests {
        @Test
        void test1() {
            StaticMapping object = new StaticMapping();
            object.getGitDirectory();
        }
    }
    @Nested
    @DisplayName("Tests for the method gitDirectory")
    class gitDirectoryTests {
        @Test
        void test1() {
            String value = "/opt/share";
            StaticMapping object = new StaticMapping();
            object.gitDirectory(value);
        }
        @Test
        void test2() {
            String value = "/usr/share";
            StaticMapping object = new StaticMapping();
            object.gitDirectory(value);
        }
        @Test
        void test3() {
            String value = "/selinux";
            StaticMapping object = new StaticMapping();
            object.gitDirectory(value);
        }
        @Test
        void test4() {
            String value = "/usr/ports";
            StaticMapping object = new StaticMapping();
            object.gitDirectory(value);
        }
        @Test
        void test5() {
            String value = "/usr/sbin";
            StaticMapping object = new StaticMapping();
            object.gitDirectory(value);
        }
        @Test
        void test6() {
            String value = "";
            StaticMapping object = new StaticMapping();
            object.gitDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setGitDirectory")
    class setGitDirectoryTests {
        @Test
        void test1() {
            String value = "/usr/share";
            StaticMapping object = new StaticMapping();
            object.setGitDirectory(value);
        }
        @Test
        void test2() {
            String value = "/selinux";
            StaticMapping object = new StaticMapping();
            object.setGitDirectory(value);
        }
        @Test
        void test3() {
            String value = "/opt/share";
            StaticMapping object = new StaticMapping();
            object.setGitDirectory(value);
        }
        @Test
        void test4() {
            String value = "/usr/sbin";
            StaticMapping object = new StaticMapping();
            object.setGitDirectory(value);
        }
        @Test
        void test5() {
            String value = "/usr/ports";
            StaticMapping object = new StaticMapping();
            object.setGitDirectory(value);
        }
        @Test
        void test6() {
            String value = "";
            StaticMapping object = new StaticMapping();
            object.setGitDirectory(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method isSvnDirectoryDelete")
    class isSvnDirectoryDeleteTests {
        @Test
        void test1() {
            StaticMapping object = new StaticMapping();
            object.isSvnDirectoryDelete();
        }
    }
    @Nested
    @DisplayName("Tests for the method svnDirectoryDelete")
    class svnDirectoryDeleteTests {
        @Test
        void test1() {
            int value = 10.0;
            StaticMapping object = new StaticMapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test2() {
            float value = -1.0;
            StaticMapping object = new StaticMapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test3() {
            String value = "v1.2.4";
            StaticMapping object = new StaticMapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test4() {
            String value = "^5.0.0";
            StaticMapping object = new StaticMapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test5() {
            String value = "v4.0.0-rc.4";
            StaticMapping object = new StaticMapping();
            object.svnDirectoryDelete(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticMapping object = new StaticMapping();
            object.svnDirectoryDelete(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setSvnDirectoryDelete")
    class setSvnDirectoryDeleteTests {
        @Test
        void test1() {
            String value = "4.0.0-beta1\t";
            StaticMapping object = new StaticMapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test2() {
            int value = -1.0;
            StaticMapping object = new StaticMapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test3() {
            int value = 0.0;
            StaticMapping object = new StaticMapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test4() {
            float value = 10.23;
            StaticMapping object = new StaticMapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test5() {
            int value = -29.45;
            StaticMapping object = new StaticMapping();
            object.setSvnDirectoryDelete(value);
        }
        @Test
        void test6() {
            int value = 0;
            StaticMapping object = new StaticMapping();
            object.setSvnDirectoryDelete(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method hashCode")
    class hashCodeTests {
        @Test
        void test1() {
            StaticMapping object = new StaticMapping();
            object.hashCode();
        }
    }
    @Nested
    @DisplayName("Tests for the method toString")
    class toStringTests {
        @Test
        void test1() {
            StaticMapping object = new StaticMapping();
            object.toString();
        }
    }
}
ls(value);
        }
        @Test
        void test2() {
            int value = -1;
            StaticMapping object = new StaticMapping();
            object.equals(value);
        }
        @Test
        void test3() {
            int value = 1;
            StaticMapping object = new StaticMapping();
            object.equals(value);
        }
        @Test
        void test4() {
            float value = 100;
            StaticMapping object = new StaticMapping();
            object.equals(value);
        }
        @Test
        void test5() {
            float value = -100;
            StaticMapping object = new StaticMapping();
            object.equals(value);
        }
        @Test
        void test6() {
            float value = 0;
            StaticMapping object = new StaticMapping();
            object.equals(value);
        }
    }
}
