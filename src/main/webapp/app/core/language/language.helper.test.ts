import * as language_helper from "app/core/language/language.helper"

// @ponicode
describe("init", () => {
    let inst: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.init()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.getAll()
        expect(result).toMatchSnapshot()
    })
})
sult).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.updateTitle("Customer Metrics Consultant")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.updateTitle("Product Accountability Executive")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.updateTitle("Principal Implementation Strategist")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.updateTitle("National Infrastructure Supervisor")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.updateTitle("")
        expect(result).toMatchSnapshot()
    })
})
