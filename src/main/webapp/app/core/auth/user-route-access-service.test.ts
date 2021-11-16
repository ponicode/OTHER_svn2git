import * as user_route_access_service from "app/core/auth/user-route-access-service"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as state_storage_service from "app/core/auth/state-storage.service"

// @ponicode
describe("checkLogin", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new login_modal_service.LoginModalService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new state_storage_service.StateStorageService(undefined)
        inst5 = new user_route_access_service.UserRouteAccessService(undefined, inst, inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.checkLogin(["4.0.0-beta1\t", "^5.0.0", "4.0.0-beta1\t", "4.0.0-beta1\t"], "https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.checkLogin(["4.0.0-beta1\t", "v4.0.0-rc.4", "v1.2.4"], "https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst5.checkLogin(["v1.2.4", "v1.2.4", "1.0.0"], "https://")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst5.checkLogin(["4.0.0-beta1\t", "^5.0.0"], "http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.checkLogin(["1.0.0", "4.0.0-beta1\t", "1.0.0"], "http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst5.checkLogin([], "")
        expect(result).toMatchSnapshot()
    })
})
