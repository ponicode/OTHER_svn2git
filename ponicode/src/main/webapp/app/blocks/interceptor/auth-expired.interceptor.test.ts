import * as auth_expired_interceptor from "app/blocks/interceptor/auth-expired.interceptor"

// @ponicode
describe("intercept", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_expired_interceptor.AuthExpiredInterceptor("invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668")
    })

    test("0", () => {
        let result: any = inst.intercept("PUT", false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.intercept("GET", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.intercept("DELETE", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.intercept("PUT", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.intercept("DELETE", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.intercept("", false)
        expect(result).toMatchSnapshot()
    })
})
