import * as auth_interceptor from "app/blocks/interceptor/auth.interceptor"

// @ponicode
describe("intercept", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_interceptor.AuthInterceptor("Www.GooGle.com", "http://base.com")
    })

    test("0", () => {
        let result: any = inst.intercept("DELETE", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.intercept("POST", false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.intercept("PUT", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.intercept("PUT", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.intercept("GET", false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.intercept("", false)
        expect(result).toMatchSnapshot()
    })
})
