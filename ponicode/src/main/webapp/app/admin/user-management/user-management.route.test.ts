import * as user_management_route from "app/admin/user-management/user-management.route"
import * as user_service from "app/core/user/user.service"

import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
describe("resolve", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new user_service.UserService(56784)
        inst2 = new user_management_route.UserMgmtResolve(inst)
    })

    test("0", () => {
        let result: any = inst2.resolve("http://www.croplands.org/account/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.resolve("Www.GooGle.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.resolve("http://www.example.com/route/123?foo=bar", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.resolve("www.google.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.resolve("https://api.telegram.org/bot", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.resolve("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("canActivate", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
        inst3 = new user_management_route.UserResolve(inst2)
    })

    test("0", () => {
        let result: any = inst3.canActivate()
        expect(result).toMatchSnapshot()
    })
})
