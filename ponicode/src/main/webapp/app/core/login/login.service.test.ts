import * as login_service from "app/core/login/login.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as auth_jwt_service from "app/core/auth/auth-jwt.service"

describe("logout", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new account_service.AccountService(12)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(987650, 56784, "bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new login_service.LoginService("javascript", inst2, inst3)
    })

    test("0", () => {
        let result: any = inst4.logout()
        expect(result).toMatchSnapshot()
    })
})

describe("loginWithToken", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(12345, 56784, 12345)
        inst4 = new login_service.LoginService("javascript", inst2, inst3)
    })

    test("0", () => {
        let result: any = inst4.loginWithToken("https://accounts.google.com/o/oauth2/revoke?token=%s", "v1.2.4")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.loginWithToken("Www.GooGle.com", "v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.loginWithToken("www.google.com", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.loginWithToken("https://twitter.com/path?abc", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.loginWithToken("http://www.example.com/route/123?foo=bar", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.loginWithToken("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(12345, "a1969970175", 987650)
        inst4 = new login_service.LoginService("erlang", inst2, inst3)
    })

    test("0", () => {
        let result: any = inst4.login(false, () => "return callback value")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.login(false, () => "")
        expect(result).toMatchSnapshot()
    })
})
