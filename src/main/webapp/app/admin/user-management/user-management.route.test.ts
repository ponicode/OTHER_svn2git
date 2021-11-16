import * as user_management_route from "app/admin/user-management/user-management.route"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

// @ponicode
describe("canActivate", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new user_management_route.UserResolve(inst2)
    })

    test("0", () => {
        let result: any = inst3.canActivate()
        expect(result).toMatchSnapshot()
    })
})
