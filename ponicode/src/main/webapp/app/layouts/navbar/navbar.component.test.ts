import * as navbar_component from "app/layouts/navbar/navbar.component"
import * as login_service from "app/core/login/login.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as auth_jwt_service from "app/core/auth/auth-jwt.service"
import * as language_helper from "app/core/language/language.helper"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as profile_service from "app/layouts/profiles/profile.service"

describe("changeLanguage", () => {
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
        inst = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(12, "a1969970175", 56784)
        inst4 = new login_service.LoginService(987650, inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper("bc23a9d531064583ace8f67dad60f6bb", 12345, 12345, 12345)
        inst6 = new account_service.AccountService("a1969970175")
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService("a1969970175")
        inst9 = new profile_service.ProfileService(987650)
        inst10 = new navbar_component.NavbarComponent(inst4, "javascript", inst5, inst7, inst8, inst9, "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst10.changeLanguage("ar")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst10.changeLanguage("it")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst10.changeLanguage("de")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst10.changeLanguage("en")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst10.changeLanguage("cn")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst10.changeLanguage("")
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
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
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(987650, 12345, 12345)
        inst4 = new login_service.LoginService(56784, inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper(12345, "a1969970175", "a1969970175", "a1969970175")
        inst6 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService(987650)
        inst9 = new profile_service.ProfileService(56784)
        inst10 = new navbar_component.NavbarComponent(inst4, "lua", inst5, inst7, inst8, inst9, "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst10.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

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
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(56784, 987650, 987650)
        inst4 = new login_service.LoginService("bc23a9d531064583ace8f67dad60f6bb", inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper("bc23a9d531064583ace8f67dad60f6bb", 56784, "bc23a9d531064583ace8f67dad60f6bb", 56784)
        inst6 = new account_service.AccountService("a1969970175")
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService(12345)
        inst9 = new profile_service.ProfileService("bc23a9d531064583ace8f67dad60f6bb")
        inst10 = new navbar_component.NavbarComponent(inst4, "javascript", inst5, inst7, inst8, inst9, "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst10.collapseNavbar()
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
    let inst7: any
    let inst8: any
    let inst9: any
    let inst10: any

    beforeEach(() => {
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider("bc23a9d531064583ace8f67dad60f6bb", 12345, 12)
        inst4 = new login_service.LoginService("a1969970175", inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper(56784, 56784, 12, 987650)
        inst6 = new account_service.AccountService("a1969970175")
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService(12)
        inst9 = new profile_service.ProfileService(12)
        inst10 = new navbar_component.NavbarComponent(inst4, "C++", inst5, inst7, inst8, inst9, "http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst10.login()
        expect(result).toMatchSnapshot()
    })
})

describe("isAuthenticated", () => {
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
        inst = new account_service.AccountService(987650)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(56784, 12, "bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new login_service.LoginService("a1969970175", inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper(987650, "a1969970175", 56784, "bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new account_service.AccountService(987650)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService("bc23a9d531064583ace8f67dad60f6bb")
        inst9 = new profile_service.ProfileService("a1969970175")
        inst10 = new navbar_component.NavbarComponent(inst4, "javascript", inst5, inst7, inst8, inst9, "https://croplands.org/app/a/reset?token=")
    })

    test("0", () => {
        let result: any = inst10.isAuthenticated()
        expect(result).toMatchSnapshot()
    })
})

describe("logout", () => {
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
        inst = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider("a1969970175", "a1969970175", "bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new login_service.LoginService("bc23a9d531064583ace8f67dad60f6bb", inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper("a1969970175", 12345, 12, 987650)
        inst6 = new account_service.AccountService(12345)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService(56784)
        inst9 = new profile_service.ProfileService(987650)
        inst10 = new navbar_component.NavbarComponent(inst4, "cpp", inst5, inst7, inst8, inst9, "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst10.logout()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("toggleNavbar", () => {
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
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
        inst3 = new auth_jwt_service.AuthServerProvider(987650, 987650, "a1969970175")
        inst4 = new login_service.LoginService("a1969970175", inst2, inst3)
        inst5 = new language_helper.JhiLanguageHelper(12, "bc23a9d531064583ace8f67dad60f6bb", 12345, 12345)
        inst6 = new account_service.AccountService(12)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new login_modal_service.LoginModalService(12)
        inst9 = new profile_service.ProfileService(987650)
        inst10 = new navbar_component.NavbarComponent(inst4, "lua", inst5, inst7, inst8, inst9, "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst10.toggleNavbar()
        expect(result).toMatchSnapshot()
    })
})
