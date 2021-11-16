import * as navbar_component from "app/layouts/navbar/navbar.component"
import * as login_service from "app/core/login/login.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as auth_jwt_service from "app/core/auth/auth-jwt.service"
import * as language_helper from "app/core/language/language.helper"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as profile_service from "app/layouts/profiles/profile.service"

// @ponicode
describe("collapseNavbar", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any
    let inst9: any
    let inst10: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
        inst4 = new login_service.LoginService(undefined, inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst6 = new account_service.AccountService(undefined)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService(undefined)
        inst9 = new profile_service.ProfileService(undefined)
        inst10 = new navbar_component.NavbarComponent(inst4, undefined, inst5, inst7, inst8, inst9, undefined)
    })

    test("0", () => {
        let result: any = inst10.collapseNavbar()
        expect(result).toMatchSnapshot()
    })
})
)

    test("1", () => {
        let result: any = inst10.changeLanguage("erlang")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst10.changeLanguage("cpp")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst10.changeLanguage("lua")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst10.changeLanguage("python")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst10.changeLanguage("")
        expect(result).toMatchSnapshot()
    })
})
