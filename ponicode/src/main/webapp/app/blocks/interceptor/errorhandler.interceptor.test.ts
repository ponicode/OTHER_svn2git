import * as errorhandler_interceptor from "app/blocks/interceptor/errorhandler.interceptor"

// @ponicode
describe("intercept", () => {
    let inst: any

    beforeEach(() => {
        inst = new errorhandler_interceptor.ErrorHandlerInterceptor("12345")
    })

    test("0", () => {
        let result: any = inst.intercept("GET", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.intercept("DELETE", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.intercept("POST", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.intercept("DELETE", false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.intercept("PUT", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.intercept("", true)
        expect(result).toMatchSnapshot()
    })
})
