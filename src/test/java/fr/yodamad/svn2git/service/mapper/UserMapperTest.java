package fr.yodamad.svn2git.service.mapper;

import org.junit.jupiter.api.*;

public class UserMapperTest {
    @Nested
    @DisplayName("Tests for the method userToUserDTO")
    class userToUserDTOTests {
        @Test
        void test1() {
            int value = 10.23;
            UserMapper object = new UserMapper();
            object.userToUserDTO(value);
        }
        @Test
        void test2() {
            float value = 1.0;
            UserMapper object = new UserMapper();
            object.userToUserDTO(value);
        }
        @Test
        void test3() {
            float value = -1.0;
            UserMapper object = new UserMapper();
            object.userToUserDTO(value);
        }
        @Test
        void test4() {
            int value = 0.5;
            UserMapper object = new UserMapper();
            object.userToUserDTO(value);
        }
        @Test
        void test5() {
            int value = 1.0;
            UserMapper object = new UserMapper();
            object.userToUserDTO(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserMapper object = new UserMapper();
            object.userToUserDTO(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method userDTOToUser")
    class userDTOToUserTests {
        @Test
        void test1() {
            float value = -0.5;
            UserMapper object = new UserMapper();
            object.userDTOToUser(value);
        }
        @Test
        void test2() {
            String value = 123;
            UserMapper object = new UserMapper();
            object.userDTOToUser(value);
        }
        @Test
        void test3() {
            float value = 0.5;
            UserMapper object = new UserMapper();
            object.userDTOToUser(value);
        }
        @Test
        void test4() {
            int value = -0.5;
            UserMapper object = new UserMapper();
            object.userDTOToUser(value);
        }
        @Test
        void test5() {
            float value = 10.0;
            UserMapper object = new UserMapper();
            object.userDTOToUser(value);
        }
        @Test
        void test6() {
            float value = 0;
            UserMapper object = new UserMapper();
            object.userDTOToUser(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method userFromId")
    class userFromIdTests {
        @Test
        void test1() {
            String value = "7289708e-b17a-477c-8a77-9ab575c4b4d8";
            UserMapper object = new UserMapper();
            object.userFromId(value);
        }
        @Test
        void test2() {
            String value = "03ea49f8-1d96-4cd0-b279-0684e3eec3a9";
            UserMapper object = new UserMapper();
            object.userFromId(value);
        }
        @Test
        void test3() {
            int value = -100;
            UserMapper object = new UserMapper();
            object.userFromId(value);
        }
        @Test
        void test4() {
            int value = -1;
            UserMapper object = new UserMapper();
            object.userFromId(value);
        }
        @Test
        void test5() {
            float value = -1;
            UserMapper object = new UserMapper();
            object.userFromId(value);
        }
        @Test
        void test6() {
            int value = 0;
            UserMapper object = new UserMapper();
            object.userFromId(value);
        }
    }
}
