import * as user_route_access_service from "app/core/auth/user-route-access-service"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as state_storage_service from "app/core/auth/state-storage.service"

describe("checkLogin", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new login_modal_service.LoginModalService(12345)
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new state_storage_service.StateStorageService(987650)
        inst5 = new user_route_access_service.UserRouteAccessService("https://accounts.google.com/o/oauth2/revoke?token=%s", inst, inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.checkLogin(["9876", "12345", "12345", "c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64"], "http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.checkLogin(["12345", "9876", "9876", "9876", "da7588892"], "Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst5.checkLogin(["9876", "12345", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"], "Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst5.checkLogin(["da7588892", "da7588892", "12345", "12345"], "www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.checkLogin(["9876", "9876", "9876", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"], "Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst5.checkLogin([], "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("canActivate", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new login_modal_service.LoginModalService("a1969970175")
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new state_storage_service.StateStorageService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new user_route_access_service.UserRouteAccessService("https://croplands.org/app/a/confirm?t=", inst, inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.canActivate("https://api.telegram.org/", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.canActivate("https://croplands.org/app/a/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst5.canActivate("http://www.example.com/route/123?foo=bar", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst5.canActivate("https://", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.canActivate("www.google.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst5.canActivate("", "")
        expect(result).toMatchSnapshot()
    })
})
