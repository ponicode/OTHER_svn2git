import * as migration_check_component from "app/migration/migration-check.component"
import * as migration_process_service from "app/migration/migration-process.service"
import * as migration_service from "app/entities/migration/migration.service"

import * as migration_model from "app/shared/model/migration.model"
describe("showResetButton", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_check_component.MigrationCheckComponent("Michael", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", 0, "https://", 0.0, "http://base.com", "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst3.showResetButton()
        expect(result).toMatchSnapshot()
    })
})

describe("load", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_check_component.MigrationCheckComponent("Edmond", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", 0, "Www.GooGle.com", 10.0, "http://www.croplands.org/account/confirm?t=", "www.google.com")
    })

    test("0", () => {
        let result: any = inst3.load("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.load("DROP TABLE tmp;")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.load("DELETE FROM Projects WHERE pid = %s")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.load("UPDATE Projects SET pname = %s WHERE pid = %s")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.load("")
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new migration_check_component.MigrationCheckComponent("Michael", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", -5.48, "https://twitter.com/path?abc", -29.45, "www.google.com", "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst3.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("cssClass", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("a1969970175")
        inst2 = new migration_service.MigrationService(12)
        inst3 = new migration_check_component.MigrationCheckComponent("Jean-Philippe", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", -5.48, "https://api.telegram.org/bot", 10.23, "https://", "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.FAILED)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.DONE_WITH_WARNINGS)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.DONE)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.WAITING)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.cssClass(null)
        expect(result).toMatchSnapshot()
    })
})

describe("retry", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new migration_check_component.MigrationCheckComponent("George", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", -100, "http://www.example.com/route/123?foo=bar", 10.23, "https://twitter.com/path?abc", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst3.retry(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.retry(-100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.retry(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.retry(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.retry(1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.retry(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("openSnackBar", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new migration_check_component.MigrationCheckComponent("Michael", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", 1, "http://www.croplands.org/account/confirm?t=", 0.0, "https://croplands.org/app/a/reset?token=", "http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst3.openSnackBar("Invalid data: No data found in any of the field(s)!!!", false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.openSnackBar("The app does not exist", false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.openSnackBar("To force deletion of the LAG use delete_force: True", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.openSnackBar("TrainerCourseDetailError: Either not an ajax call or not a GET request!!!", false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.openSnackBar("Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates.", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.openSnackBar("", true)
        expect(result).toMatchSnapshot()
    })
})

describe("getFilter", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new migration_check_component.MigrationCheckComponent("George", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", -100, "https://api.telegram.org/bot", 10.23, "Www.GooGle.com", "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst3.getFilter("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getFilter("")
        expect(result).toMatchSnapshot()
    })
})

describe("exportToCsv", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_check_component.MigrationCheckComponent("George", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", -100, "https://croplands.org/app/a/confirm?t=", 10.0, "https://api.telegram.org/bot", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst3.exportToCsv()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("page", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12345)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new migration_check_component.MigrationCheckComponent("Jean-Philippe", inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", -100, "https://", 0.5, "https://twitter.com/path?abc", "https://croplands.org/app/a/reset?token=")
    })

    test("0", () => {
        let result: any = inst3.page("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.page("")
        expect(result).toMatchSnapshot()
    })
})
