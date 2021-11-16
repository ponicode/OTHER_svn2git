import * as migration_history_component from "app/entities/migration-history/migration-history.component"
import * as migration_history_service from "app/entities/migration-history/migration-history.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInMigrationHistories", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInMigrationHistories()
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
        inst = new migration_history_service.MigrationHistoryService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_history_component.MigrationHistoryComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("The app does not exist")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("Unable to allocate address")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("unexpected error")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("Sorry, This video cannot be accessed via this website")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("Connection is closed")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})
