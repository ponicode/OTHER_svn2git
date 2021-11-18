import * as home_component from "app/home/home.component"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as configuration_service from "app/shared/service/configuration-service"
import * as migration_process_service from "app/migration/migration-process.service"

import * as migration_model from "app/shared/model/migration.model"
describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(987650)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new configuration_service.ConfigurationService(12)
        inst5 = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "c466a48309794261b64a4f02cfcc3d64", "http://base.com", inst5, 100, "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst6.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("loadActiveMigrations", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new configuration_service.ConfigurationService(12345)
        inst5 = new migration_process_service.MigrationProcessService(56784)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "bc23a9d531064583ace8f67dad60f6bb", "https://twitter.com/path?abc", inst5, 0, "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst6.loadActiveMigrations()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new configuration_service.ConfigurationService(12)
        inst5 = new migration_process_service.MigrationProcessService(12)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "c466a48309794261b64a4f02cfcc3d64", "https://twitter.com/path?abc", inst5, 100, "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst6.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("registerAuthenticationSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new configuration_service.ConfigurationService(12345)
        inst5 = new migration_process_service.MigrationProcessService(12345)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "bc23a9d531064583ace8f67dad60f6bb", "https://twitter.com/path?abc", inst5, -5.48, "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst6.registerAuthenticationSuccess()
        expect(result).toMatchSnapshot()
    })
})

describe("isAuthenticated", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(12345)
        inst4 = new configuration_service.ConfigurationService(12345)
        inst5 = new migration_process_service.MigrationProcessService(987650)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "9876", "https://api.telegram.org/bot", inst5, -5.48, "https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst6.isAuthenticated()
        expect(result).toMatchSnapshot()
    })
})

describe("startStepper", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService("a1969970175")
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService("a1969970175")
        inst4 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new migration_process_service.MigrationProcessService(12)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "bc23a9d531064583ace8f67dad60f6bb", "www.google.com", inst5, -5.48, "https://")
    })

    test("0", () => {
        let result: any = inst6.startStepper()
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
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(56784)
        inst4 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new migration_process_service.MigrationProcessService("a1969970175")
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "da7588892", "Www.GooGle.com", inst5, -5.48, "http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst6.checkMigration()
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
        inst = new account_service.AccountService(987650)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(12345)
        inst4 = new configuration_service.ConfigurationService(12)
        inst5 = new migration_process_service.MigrationProcessService(56784)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "bc23a9d531064583ace8f67dad60f6bb", "https://api.telegram.org/", inst5, 100, "http://base.com")
    })

    test("0", () => {
        let result: any = inst6.login()
        expect(result).toMatchSnapshot()
    })
})

describe("cssClass", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(987650)
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService("a1969970175")
        inst4 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new migration_process_service.MigrationProcessService(12)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "12345", "https://accounts.google.com/o/oauth2/revoke?token=%s", inst5, 1, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst6.cssClass(migration_model.StatusEnum.IGNORED)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.cssClass(migration_model.StatusEnum.RUNNING)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.cssClass(null)
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
        inst = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new principal_service.Principal(inst)
        inst3 = new login_modal_service.LoginModalService(12)
        inst4 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new migration_process_service.MigrationProcessService(12345)
        inst6 = new home_component.HomeComponent(inst2, inst3, inst4, "da7588892", "Www.GooGle.com", inst5, 100, "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst6.openSnackBar("TrainerCourseDetailError: Either not an ajax call or not a GET request!!!", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.openSnackBar("Uploaded file was not added to the resource. ", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.openSnackBar("Could not find a submission object for message from xqueue", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.openSnackBar("To force deletion of the LAG use delete_force: True", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.openSnackBar("Invalid Invitation Token.", false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.openSnackBar("", true)
        expect(result).toMatchSnapshot()
    })
})
