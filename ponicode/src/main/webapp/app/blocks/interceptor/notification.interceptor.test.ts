import * as notification_interceptor from "app/blocks/interceptor/notification.interceptor"

// @ponicode
describe("intercept", () => {
    let inst: any

    beforeEach(() => {
        inst = new notification_interceptor.NotificationInterceptor("invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018")
    })

    test("0", () => {
        let result: any = inst.intercept("POST", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.intercept("PUT", false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.intercept("GET", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.intercept("GET", false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.intercept("DELETE", false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.intercept("", false)
        expect(result).toMatchSnapshot()
    })
})
