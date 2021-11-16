import * as csrf_service from "app/core/auth/csrf.service"

// @ponicode
describe("getCSRF", () => {
    let inst: any

    beforeEach(() => {
        inst = new csrf_service.CSRFService(undefined)
    })

    test("0", () => {
        let result: any = inst.getCSRF("Anas")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getCSRF("George")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getCSRF("Michael")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getCSRF("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getCSRF("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getCSRF("")
        expect(result).toMatchSnapshot()
    })
})
