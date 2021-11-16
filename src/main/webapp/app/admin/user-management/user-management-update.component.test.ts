import * as user_management_update_component from "app/admin/user-management/user-management-update.component"
import * as language_helper from "app/core/language/language.helper"
import * as user_service from "app/core/user/user.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst2 = new user_service.UserService(undefined)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, undefined, undefined)
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
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst2 = new user_service.UserService(undefined)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, undefined, undefined)
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
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst2 = new user_service.UserService(undefined)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.save()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveError", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst2 = new user_service.UserService(undefined)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.onSaveError()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst2 = new user_service.UserService(undefined)
        inst3 = new user_management_update_component.UserMgmtUpdateComponent(inst, inst2, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.onSaveSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.onSaveSuccess(false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.onSaveSuccess(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.onSaveSuccess(true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.onSaveSuccess(0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.onSaveSuccess(NaN)
        expect(result).toMatchSnapshot()
    })
})
