import * as login_component from "app/shared/login/login.component"
import * as login_service from "app/core/login/login.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as auth_jwt_service from "app/core/auth/auth-jwt.service"
import * as state_storage_service from "app/core/auth/state-storage.service"

describe("cancel", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(987650, 56784, 56784)
        inst4 = new login_service.LoginService("a1969970175", inst2, inst3)
        inst5 = new state_storage_service.StateStorageService(987650)
        inst6 = new login_component.JhiLoginModalComponent("9876", inst4, inst5, "George", false, "ponicode.com", false)
    })

    test("0", () => {
        let result: any = inst6.cancel()
        expect(result).toMatchSnapshot()
    })
})

describe("ngAfterViewInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(987650)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(987650, 12, "bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new login_service.LoginService("a1969970175", inst2, inst3)
        inst5 = new state_storage_service.StateStorageService("a1969970175")
        inst6 = new login_component.JhiLoginModalComponent("c466a48309794261b64a4f02cfcc3d64", inst4, inst5, "Anas", false, "Www.GooGle.com", true)
    })

    test("0", () => {
        let result: any = inst6.ngAfterViewInit()
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
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider("bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", 56784)
        inst4 = new login_service.LoginService(12345, inst2, inst3)
        inst5 = new state_storage_service.StateStorageService(12345)
        inst6 = new login_component.JhiLoginModalComponent("da7588892", inst4, inst5, "Anas", false, "https://croplands.org/app/a/confirm?t=", false)
    })

    test("0", () => {
        let result: any = inst6.login()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("requestResetPassword", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService("a1969970175")
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(12345, 12, "a1969970175")
        inst4 = new login_service.LoginService(987650, inst2, inst3)
        inst5 = new state_storage_service.StateStorageService(987650)
        inst6 = new login_component.JhiLoginModalComponent("c466a48309794261b64a4f02cfcc3d64", inst4, inst5, "Jean-Philippe", true, "http://base.com", false)
    })

    test("0", () => {
        let result: any = inst6.requestResetPassword()
        expect(result).toMatchSnapshot()
    })
})
