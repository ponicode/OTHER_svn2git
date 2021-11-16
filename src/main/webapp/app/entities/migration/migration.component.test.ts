import * as migration_component from "app/entities/migration/migration.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

import * as migration_model from "app/shared/model/migration.model"
describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, undefined, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("loadPage", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, undefined, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.loadPage(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.loadPage(16)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.loadPage("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.loadPage(10)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.loadPage("https://api.telegram.org/")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.loadPage(Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, undefined, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInMigrations", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, undefined, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInMigrations()
        expect(result).toMatchSnapshot()
    })
})

describe("cssClass", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, undefined, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.IGNORED)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.DONE)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.DONE_WITH_WARNINGS)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.RUNNING)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.FAILED)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, undefined, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("missing encoding")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("No os dependencies found. ")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("Could not find an existing submission in location.  rubric is original.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("Sorry, This video cannot be accessed via this website")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("An error occurred processing your request.")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})
