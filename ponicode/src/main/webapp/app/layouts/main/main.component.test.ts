import * as main_component from "app/layouts/main/main.component"
import * as language_helper from "app/core/language/language.helper"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(12, 987650, 56784, 12345)
        inst2 = new main_component.JhiMainComponent(inst, "www.google.com")
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getPageTitle", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(12, "bc23a9d531064583ace8f67dad60f6bb", 987650, 12)
        inst2 = new main_component.JhiMainComponent(inst, "https://")
    })

    test("0", () => {
        let result: any = inst2.getPageTitle(true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.getPageTitle(false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.getPageTitle(null)
        expect(result).toMatchSnapshot()
    })
})
