package fr.yodamad.svn2git.web.rest;

import org.junit.jupiter.api.*;

public class AccountResourceTest {
    @Nested
    @DisplayName("Tests for the method changePassword")
    class changePasswordTests {
        @Test
        void test1() {
            String value = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E";
            AccountResource object = new AccountResource();
            object.changePassword(value);
        }
        @Test
        void test2() {
            int value = -1;
            AccountResource object = new AccountResource();
            object.changePassword(value);
        }
        @Test
        void test3() {
            float value = -100;
            AccountResource object = new AccountResource();
            object.changePassword(value);
        }
        @Test
        void test4() {
            float value = 0;
            AccountResource object = new AccountResource();
            object.changePassword(value);
        }
        @Test
        void test5() {
            float value = 100;
            AccountResource object = new AccountResource();
            object.changePassword(value);
        }
        @Test
        void test6() {
            int value = 0;
            AccountResource object = new AccountResource();
            object.changePassword(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method finishPasswordReset")
    class finishPasswordResetTests {
        @Test
        void test1() {
            int value = 0.5;
            AccountResource object = new AccountResource();
            object.finishPasswordReset(value);
        }
        @Test
        void test2() {
            float value = 10.0;
            AccountResource object = new AccountResource();
            object.finishPasswordReset(value);
        }
        @Test
        void test3() {
            int value = -1.0;
            AccountResource object = new AccountResource();
            object.finishPasswordReset(value);
        }
        @Test
        void test4() {
            int value = 10.0;
            AccountResource object = new AccountResource();
            object.finishPasswordReset(value);
        }
        @Test
        void test5() {
            String value = "!Lov3MyPianoPony";
            AccountResource object = new AccountResource();
            object.finishPasswordReset(value);
        }
        @Test
        void test6() {
            float value = 0;
            AccountResource object = new AccountResource();
            object.finishPasswordReset(value);
        }
    }
}
