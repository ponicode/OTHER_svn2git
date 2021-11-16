package fr.yodamad.svn2git.security;

import org.junit.jupiter.api.*;

public class DomainUserDetailsServiceTest {
    @Nested
    @DisplayName("Tests for the method loadUserByUsername")
    class loadUserByUsernameTests {
        @Test
        void test1() {
            String value = "user_name";
            DomainUserDetailsService object = new DomainUserDetailsService();
            object.loadUserByUsername(value);
        }
        @Test
        void test2() {
            String value = "user-name";
            DomainUserDetailsService object = new DomainUserDetailsService();
            object.loadUserByUsername(value);
        }
        @Test
        void test3() {
            String value = "user name";
            DomainUserDetailsService object = new DomainUserDetailsService();
            object.loadUserByUsername(value);
        }
        @Test
        void test4() {
            String value = "username";
            DomainUserDetailsService object = new DomainUserDetailsService();
            object.loadUserByUsername(value);
        }
        @Test
        void test5() {
            String value = "user123";
            DomainUserDetailsService object = new DomainUserDetailsService();
            object.loadUserByUsername(value);
        }
        @Test
        void test6() {
            String value = "";
            DomainUserDetailsService object = new DomainUserDetailsService();
            object.loadUserByUsername(value);
        }
    }
}
