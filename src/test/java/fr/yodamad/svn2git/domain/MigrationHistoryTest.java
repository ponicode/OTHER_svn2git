package fr.yodamad.svn2git.domain;

import org.junit.jupiter.api.*;

public class MigrationHistoryTest {
    @Nested
    @DisplayName("Tests for the method getStatus")
    class getStatusTests {
        @Test
        void test1() {
            MigrationHistory object = new MigrationHistory();
            object.getStatus();
        }
    }
    @Nested
    @DisplayName("Tests for the method status")
    class statusTests {
        @Test
        void test1() {
            String value = "pending";
            MigrationHistory object = new MigrationHistory();
            object.status(value);
        }
        @Test
        void test2() {
            int value = 10.23;
            MigrationHistory object = new MigrationHistory();
            object.status(value);
        }
        @Test
        void test3() {
            float value = -29.45;
            MigrationHistory object = new MigrationHistory();
            object.status(value);
        }
        @Test
        void test4() {
            int value = -0.5;
            MigrationHistory object = new MigrationHistory();
            object.status(value);
        }
        @Test
        void test5() {
            int value = 0.5;
            MigrationHistory object = new MigrationHistory();
            object.status(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationHistory object = new MigrationHistory();
            object.status(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getDate")
    class getDateTests {
        @Test
        void test1() {
            MigrationHistory object = new MigrationHistory();
            object.getDate();
        }
    }
    @Nested
    @DisplayName("Tests for the method setStatus")
    class setStatusTests {
        @Test
        void test1() {
            float value = -0.5;
            MigrationHistory object = new MigrationHistory();
            object.setStatus(value);
        }
        @Test
        void test2() {
            int value = 0.5;
            MigrationHistory object = new MigrationHistory();
            object.setStatus(value);
        }
        @Test
        void test3() {
            String value = "completed";
            MigrationHistory object = new MigrationHistory();
            object.setStatus(value);
        }
        @Test
        void test4() {
            String value = "draft";
            MigrationHistory object = new MigrationHistory();
            object.setStatus(value);
        }
        @Test
        void test5() {
            String value = "done";
            MigrationHistory object = new MigrationHistory();
            object.setStatus(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationHistory object = new MigrationHistory();
            object.setStatus(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method date")
    class dateTests {
        @Test
        void test1() {
            float value = 1.0;
            MigrationHistory object = new MigrationHistory();
            object.date(value);
        }
        @Test
        void test2() {
            String value = "01-01-2030";
            MigrationHistory object = new MigrationHistory();
            object.date(value);
        }
        @Test
        void test3() {
            int value = 1.0;
            MigrationHistory object = new MigrationHistory();
            object.date(value);
        }
        @Test
        void test4() {
            float value = 0.5;
            MigrationHistory object = new MigrationHistory();
            object.date(value);
        }
        @Test
        void test5() {
            int value = 0.0;
            MigrationHistory object = new MigrationHistory();
            object.date(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationHistory object = new MigrationHistory();
            object.date(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setDate")
    class setDateTests {
        @Test
        void test1() {
            int value = -100;
            MigrationHistory object = new MigrationHistory();
            object.setDate(value);
        }
        @Test
        void test2() {
            String value = "01-01-2030";
            MigrationHistory object = new MigrationHistory();
            object.setDate(value);
        }
        @Test
        void test3() {
            int value = 100;
            MigrationHistory object = new MigrationHistory();
            object.setDate(value);
        }
        @Test
        void test4() {
            float value = -100;
            MigrationHistory object = new MigrationHistory();
            object.setDate(value);
        }
        @Test
        void test5() {
            String value = "01-01-2020";
            MigrationHistory object = new MigrationHistory();
            object.setDate(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationHistory object = new MigrationHistory();
            object.setDate(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getData")
    class getDataTests {
        @Test
        void test1() {
            MigrationHistory object = new MigrationHistory();
            object.getData();
        }
    }
    @Nested
    @DisplayName("Tests for the method data")
    class dataTests {
        @Test
        void test1() {
            String value = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E";
            MigrationHistory object = new MigrationHistory();
            object.data(value);
        }
        @Test
        void test2() {
            String value = "";
            MigrationHistory object = new MigrationHistory();
            object.data(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setData")
    class setDataTests {
        @Test
        void test1() {
            String value = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E";
            MigrationHistory object = new MigrationHistory();
            object.setData(value);
        }
        @Test
        void test2() {
            String value = "";
            MigrationHistory object = new MigrationHistory();
            object.setData(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getExecutionTime")
    class getExecutionTimeTests {
        @Test
        void test1() {
            MigrationHistory object = new MigrationHistory();
            object.getExecutionTime();
        }
    }
    @Nested
    @DisplayName("Tests for the method setExecutionTime")
    class setExecutionTimeTests {
        @Test
        void test1() {
            String value = "2017-09-29T19:01:00.000";
            MigrationHistory object = new MigrationHistory();
            object.setExecutionTime(value);
        }
        @Test
        void test2() {
            String value = "01:04:03";
            MigrationHistory object = new MigrationHistory();
            object.setExecutionTime(value);
        }
        @Test
        void test3() {
            String value = "2017-09-29T23:01:00.000Z";
            MigrationHistory object = new MigrationHistory();
            object.setExecutionTime(value);
        }
        @Test
        void test4() {
            String value = "Mon Aug 03 12:45:00";
            MigrationHistory object = new MigrationHistory();
            object.setExecutionTime(value);
        }
        @Test
        void test5() {
            String value = "";
            MigrationHistory object = new MigrationHistory();
            object.setExecutionTime(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getStartTime")
    class getStartTimeTests {
        @Test
        void test1() {
            MigrationHistory object = new MigrationHistory();
            object.getStartTime();
        }
    }
    @Nested
    @DisplayName("Tests for the method executionTime")
    class executionTimeTests {
        @Test
        void test1() {
            String value = "01:04:03";
            MigrationHistory object = new MigrationHistory();
            object.executionTime(value);
        }
        @Test
        void test2() {
            String value = "Mon Aug 03 12:45:00";
            MigrationHistory object = new MigrationHistory();
            object.executionTime(value);
        }
        @Test
        void test3() {
            String value = "2017-09-29T23:01:00.000Z";
            MigrationHistory object = new MigrationHistory();
            object.executionTime(value);
        }
        @Test
        void test4() {
            String value = "2017-09-29T19:01:00.000";
            MigrationHistory object = new MigrationHistory();
            object.executionTime(value);
        }
        @Test
        void test5() {
            String value = "";
            MigrationHistory object = new MigrationHistory();
            object.executionTime(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setStartTime")
    class setStartTimeTests {
        @Test
        void test1() {
            int value = -100;
            MigrationHistory object = new MigrationHistory();
            object.setStartTime(value);
        }
        @Test
        void test2() {
            float value = 100;
            MigrationHistory object = new MigrationHistory();
            object.setStartTime(value);
        }
        @Test
        void test3() {
            float value = -100;
            MigrationHistory object = new MigrationHistory();
            object.setStartTime(value);
        }
        @Test
        void test4() {
            String value = "2017-09-29T19:01:00.000";
            MigrationHistory object = new MigrationHistory();
            object.setStartTime(value);
        }
        @Test
        void test5() {
            String value = "Mon Aug 03 12:45:00";
            MigrationHistory object = new MigrationHistory();
            object.setStartTime(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationHistory object = new MigrationHistory();
            object.setStartTime(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method getMigration")
    class getMigrationTests {
        @Test
        void test1() {
            MigrationHistory object = new MigrationHistory();
            object.getMigration();
        }
    }
    @Nested
    @DisplayName("Tests for the method startTime")
    class startTimeTests {
        @Test
        void test1() {
            String value = "2017-09-29T23:01:00.000Z";
            MigrationHistory object = new MigrationHistory();
            object.startTime(value);
        }
        @Test
        void test2() {
            float value = -1.0;
            MigrationHistory object = new MigrationHistory();
            object.startTime(value);
        }
        @Test
        void test3() {
            float value = 10.0;
            MigrationHistory object = new MigrationHistory();
            object.startTime(value);
        }
        @Test
        void test4() {
            float value = -29.45;
            MigrationHistory object = new MigrationHistory();
            object.startTime(value);
        }
        @Test
        void test5() {
            String value = "01:04:03";
            MigrationHistory object = new MigrationHistory();
            object.startTime(value);
        }
        @Test
        void test6() {
            int value = 0;
            MigrationHistory object = new MigrationHistory();
            object.startTime(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method migration")
    class migrationTests {
        @Test
        void test1() {
            int value = 1;
            MigrationHistory object = new MigrationHistory();
            object.migration(value);
        }
        @Test
        void test2() {
            int value = -1;
            MigrationHistory object = new MigrationHistory();
            object.migration(value);
        }
        @Test
        void test3() {
            int value = -100;
            MigrationHistory object = new MigrationHistory();
            object.migration(value);
        }
        @Test
        void test4() {
            int value = 100;
            MigrationHistory object = new MigrationHistory();
            object.migration(value);
        }
        @Test
        void test5() {
            String value = "C:\\\\path\\to\\file.ext";
            MigrationHistory object = new MigrationHistory();
            object.migration(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationHistory object = new MigrationHistory();
            object.migration(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method setMigration")
    class setMigrationTests {
        @Test
        void test1() {
            String value = ".";
            MigrationHistory object = new MigrationHistory();
            object.setMigration(value);
        }
        @Test
        void test2() {
            String value = "path/to/file.ext";
            MigrationHistory object = new MigrationHistory();
            object.setMigration(value);
        }
        @Test
        void test3() {
            int value = 0;
            MigrationHistory object = new MigrationHistory();
            object.setMigration(value);
        }
        @Test
        void test4() {
            int value = -100;
            MigrationHistory object = new MigrationHistory();
            object.setMigration(value);
        }
        @Test
        void test5() {
            int value = 100;
            MigrationHistory object = new MigrationHistory();
            object.setMigration(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationHistory object = new MigrationHistory();
            object.setMigration(value);
        }
    }
    @Nested
    @DisplayName("Tests for the method hashCode")
    class hashCodeTests {
        @Test
        void test1() {
            MigrationHistory object = new MigrationHistory();
            object.hashCode();
        }
    }
}
   object.equals(value);
        }
        @Test
        void test2() {
            int value = 1.0;
            MigrationHistory object = new MigrationHistory();
            object.equals(value);
        }
        @Test
        void test3() {
            String value = "bed-free@tutanota.de";
            MigrationHistory object = new MigrationHistory();
            object.equals(value);
        }
        @Test
        void test4() {
            String value = "something.example.com";
            MigrationHistory object = new MigrationHistory();
            object.equals(value);
        }
        @Test
        void test5() {
            float value = 0.5;
            MigrationHistory object = new MigrationHistory();
            object.equals(value);
        }
        @Test
        void test6() {
            float value = 0;
            MigrationHistory object = new MigrationHistory();
            object.equals(value);
        }
    }
}
