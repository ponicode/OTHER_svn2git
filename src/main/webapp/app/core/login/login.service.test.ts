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
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
        inst4 = new login_service.LoginService(undefined, inst2, inst3)
    })

    test("0", () => {
        let result: any = inst4.logout()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("loginWithToken", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
        inst4 = new login_service.LoginService(undefined, inst2, inst3)
    })

    test("0", () => {
        let result: any = inst4.loginWithToken(12345, 12345)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.loginWithToken("!Lov3MyPianoPony", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.loginWithToken("NoWiFi4you", "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.loginWithToken("accessdenied4u", 987650)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.loginWithToken("bc23a9d531064583ace8f67dad60f6bb", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.loginWithToken(-Infinity, -Infinity)
        expect(result).toMatchSnapshot()
    })
})
