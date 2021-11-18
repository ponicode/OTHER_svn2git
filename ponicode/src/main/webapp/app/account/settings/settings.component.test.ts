import * as settings_component from "app/account/settings/settings.component"
import * as account_service from "app/core/auth/account.service"
import * as principal_service from "app/core/auth/principal.service"
import * as language_helper from "app/core/language/language.helper"

describe("copyAccount", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new account_service.AccountService(56784)
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new language_helper.JhiLanguageHelper(12345, "bc23a9d531064583ace8f67dad60f6bb", 987650, 987650)
        inst5 = new settings_component.SettingsComponent(inst, inst3, "js", inst4)
    })

    test("0", () => {
        let result: any = inst5.copyAccount("66167549")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.copyAccount("30615264")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst5.copyAccount("04079831")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst5.copyAccount("07981006")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.copyAccount("95430333")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst5.copyAccount("")
        expect(result).toMatchSnapshot()
    })
})

describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new account_service.AccountService("a1969970175")
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new language_helper.JhiLanguageHelper(12345, 987650, 12345, 987650)
        inst5 = new settings_component.SettingsComponent(inst, inst3, "erlang", inst4)
    })

    test("0", () => {
        let result: any = inst5.save()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new language_helper.JhiLanguageHelper(987650, 12, "bc23a9d531064583ace8f67dad60f6bb", 987650)
        inst5 = new settings_component.SettingsComponent(inst, inst3, "js", inst4)
    })

    test("0", () => {
        let result: any = inst5.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
