import * as language_helper from "app/core/language/language.helper"

// @ponicode
describe("updateTitle", () => {
    let inst: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(-0.5, "da7588892", "Product Accountability Executive", "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst.updateTitle("Customer Metrics Consultant")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.updateTitle(undefined)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.updateTitle("National Infrastructure Supervisor")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.updateTitle("Principal Implementation Strategist")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.updateTitle("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(0.5, "9876", "Customer Metrics Consultant", "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst.getAll()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("init", () => {
    let inst: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(-29.45, "bc23a9d531064583ace8f67dad60f6bb", "Principal Implementation Strategist", "www.google.com")
    })

    test("0", () => {
        let result: any = inst.init()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getPageTitle", () => {
    let inst: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(-1.0, "9876", "National Infrastructure Supervisor", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst.getPageTitle(true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getPageTitle(false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getPageTitle(null)
        expect(result).toMatchSnapshot()
    })
})
