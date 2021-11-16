import * as login_component from "app/shared/login/login.component"
import * as login_service from "app/core/login/login.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as auth_jwt_service from "app/core/auth/auth-jwt.service"
import * as state_storage_service from "app/core/auth/state-storage.service"

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
        inst3 = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
        inst4 = new login_service.LoginService(undefined, inst2, inst3)
        inst5 = new state_storage_service.StateStorageService(undefined)
        inst6 = new login_component.JhiLoginModalComponent(undefined, inst4, inst5, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.login()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("register", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
        inst4 = new login_service.LoginService(undefined, inst2, inst3)
        inst5 = new state_storage_service.StateStorageService(undefined)
        inst6 = new login_component.JhiLoginModalComponent(undefined, inst4, inst5, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.register()
        expect(result).toMatchSnapshot()
    })
})
