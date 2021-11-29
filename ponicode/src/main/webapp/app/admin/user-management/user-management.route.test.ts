import * as user_management_route from "app/admin/user-management/user-management.route"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

import * as user_service from "app/core/user/user.service"
import * as router from "@angular/router"
import * as tree from "@angular/router/src/utils/tree"
describe("canActivate", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
        inst5 = new user_management_route.UserResolve(inst4)
    })

    test("0", () => {
        let result: any = inst5.canActivate()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
        inst4 = new user_management_route.UserMgmtResolve(inst3)
    })

    test("0", () => {
        let param1: any = new router.ActivatedRouteSnapshot()
        let inst5: any = new tree.TreeNode(undefined, [])
        let param2: any = new router.RouterStateSnapshot(inst5)
        let result: any = inst4.resolve(param1, param2)
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
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
        inst5 = new user_management_route.UserResolve(inst4)
    })

    test("0", () => {
        let result: any = inst5.canActivate()
        expect(result).toMatchSnapshot()
    })
})
