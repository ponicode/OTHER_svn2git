import * as migration_history_component from "app/entities/migration-history/migration-history.component"
import * as migration_history_service from "app/entities/migration-history/migration-history.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService("a1969970175")
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, "bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(56784)
        inst2 = new account_service.AccountService(987650)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, 56784, "da7588892", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(12345)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, 12345, "bc23a9d531064583ace8f67dad60f6bb", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("trackId", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(56784)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, "bc23a9d531064583ace8f67dad60f6bb", "9876", inst3)
    })

    test("0", () => {
        let result: any = inst4.trackId(100, { id: undefined, step: undefined, status: undefined, date: "32-01-2020", data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.trackId(-100, { id: undefined, step: undefined, status: undefined, date: "01-01-2020", data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.trackId(-1, { id: undefined, step: undefined, status: undefined, date: "01-01-2020", data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.trackId(0, { id: undefined, step: undefined, status: undefined, date: "01-13-2020", data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.trackId(-1, { id: -5.48, step: undefined, status: undefined, date: "32-01-2020", data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.trackId(NaN, { id: undefined, step: undefined, status: undefined, date: "", data: "", migration: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(56784)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, 987650, "c466a48309794261b64a4f02cfcc3d64", inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("missing encoding")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("Sorry, This video cannot be accessed via this website")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("Message originator is not the grader, or the person being graded")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates.")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("Missing FileUri configuration")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("registerChangeInMigrationHistories", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(12345)
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, "bc23a9d531064583ace8f67dad60f6bb", "12345", inst3)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInMigrationHistories()
        expect(result).toMatchSnapshot()
    })
})
