import * as home_component from "app/home/home.component"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as configuration_service from "app/shared/service/configuration-service"
import * as migration_process_service from "app/migration/migration-process.service"

describe("loadActiveMigrations", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(undefined)
        inst4 = new configuration_service.ConfigurationService(undefined)
        inst5 = new migration_process_service.MigrationProcessService(undefined)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, undefined, undefined, inst5, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.loadActiveMigrations()
        expect(result).toMatchSnapshot()
    })
})

describe("login", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(undefined)
        inst4 = new configuration_service.ConfigurationService(undefined)
        inst5 = new migration_process_service.MigrationProcessService(undefined)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, undefined, undefined, inst5, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.login()
        expect(result).toMatchSnapshot()
    })
})

describe("checkMigration", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(undefined)
        inst4 = new configuration_service.ConfigurationService(undefined)
        inst5 = new migration_process_service.MigrationProcessService(undefined)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, undefined, undefined, inst5, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.checkMigration()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("openSnackBar", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(undefined)
        inst4 = new configuration_service.ConfigurationService(undefined)
        inst5 = new migration_process_service.MigrationProcessService(undefined)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, undefined, undefined, inst5, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.openSnackBar("Top level object in 'override.yml' needs to be an object", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.openSnackBar("TypeError exception should be raised", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.openSnackBar("The app does not exist", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.openSnackBar("Invalid [%s] value. %s", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.openSnackBar("The app does not exist", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.openSnackBar("", true)
        expect(result).toMatchSnapshot()
    })
})
