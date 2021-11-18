import * as user_management_update_component from "app/admin/user-management/user-management-update.component"
import * as language_helper from "app/core/language/language.helper"
import * as user_service from "app/core/user/user.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper("a1969970175", "a1969970175", 12345, "bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new user_service.UserService(56784)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, "https://twitter.com/path?abc", "https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst3.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("previousState", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(56784, 12345, "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new user_service.UserService(56784)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, "www.google.com", "https://croplands.org/app/a/reset?token=")
    })

    test("0", () => {
        let result: any = inst3.previousState()
        expect(result).toMatchSnapshot()
    })
})

describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(12345, "a1969970175", 987650, 12345)
        inst2 = new user_service.UserService(12)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst3.save()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper("a1969970175", 12, 56784, "bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new user_service.UserService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, "http://base.com", "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst3.onSaveSuccess("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.onSaveSuccess("https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.onSaveSuccess("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.onSaveSuccess("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.onSaveSuccess("https://accounts.google.com/o/oauth2/revoke?token=%s")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.onSaveSuccess("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveError", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper("bc23a9d531064583ace8f67dad60f6bb", 56784, "a1969970175", "bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new user_service.UserService(12)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, "https://", "ponicode.com")
    })

    test("0", () => {
        let result: any = inst3.onSaveError()
        expect(result).toMatchSnapshot()
    })
})
