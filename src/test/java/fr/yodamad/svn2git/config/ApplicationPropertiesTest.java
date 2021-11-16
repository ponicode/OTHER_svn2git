package fr.yodamad.svn2git.config;

import org.junit.jupiter.api.*;

public class ApplicationPropertiesTest {
    @Nested
    @DisplayName("Tests for the method Gitlab.setGitPushPauseMilliSeconds")
    class Gitlab_setGitPushPauseMilliSecondsTests {
        @Test
        void test1() {
            long value = 1;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setGitPushPauseMilliSeconds(value);
        }
        @Test
        void test2() {
            long value = -1;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setGitPushPauseMilliSeconds(value);
        }
        @Test
        void test3() {
            long value = 100;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setGitPushPauseMilliSeconds(value);
        }
        @Test
        void test4() {
            long value = -100;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setGitPushPauseMilliSeconds(value);
        }
        @Test
        void test5() {
            long value = 0;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setGitPushPauseMilliSeconds(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method Gitlab.getUrl")
    class Gitlab_getUrlTests {
        @Test
        void test1() {
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.getUrl();
        }
    }
    @Nested
    @DisplayName("Tests for the method Gitlab.getAccount")
    class Gitlab_getAccountTests {
        @Test
        void test1() {
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.getAccount();
        }
    }
    @Nested
    @DisplayName("Tests for the method Gitlab.setUrl")
    class Gitlab_setUrlTests {
        @Test
        void test1() {
            String value = "ponicode.com";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setUrl(value);
        }
        @Test
        void test2() {
            String value = "Www.GooGle.com";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setUrl(value);
        }
        @Test
        void test3() {
            String value = "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setUrl(value);
        }
        @Test
        void test4() {
            String value = "http://base.com";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setUrl(value);
        }
        @Test
        void test5() {
            String value = "https://croplands.org/app/a/reset?token=";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setUrl(value);
        }
        @Test
        void test6() {
            String value = "";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setUrl(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method Gitlab.setAccount")
    class Gitlab_setAccountTests {
        @Test
        void test1() {
            String value = "04079831";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setAccount(value);
        }
        @Test
        void test2() {
            String value = 95430333;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setAccount(value);
        }
        @Test
        void test3() {
            String value = 30615264;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setAccount(value);
        }
        @Test
        void test4() {
            String value = 66167549;
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setAccount(value);
        }
        @Test
        void test5() {
            String value = "07981006";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setAccount(value);
        }
        @Test
        void test6() {
            String value = "";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setAccount(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method Gitlab.getToken")
    class Gitlab_getTokenTests {
        @Test
        void test1() {
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.getToken();
        }
    }
    @Nested
    @DisplayName("Tests for the method Gitlab.getCredentials")
    class Gitlab_getCredentialsTests {
        @Test
        void test1() {
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.getCredentials();
        }
    }
}
;
        }
        @Test
        void test2() {
            String value = "package";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setToken(value);
        }
        @Test
        void test3() {
            String value = "@";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setToken(value);
        }
        @Test
        void test4() {
            String value = "/*";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setToken(value);
        }
        @Test
        void test5() {
            String value = "data";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setToken(value);
        }
        @Test
        void test6() {
            String value = "";
            ApplicationProperties.Gitlab object = new ApplicationProperties.Gitlab();
            object.setToken(value);
        }
    }
}
