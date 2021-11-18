import * as csrf_service from "app/core/auth/csrf.service"

// @ponicode
describe("getCSRF", () => {
    let inst: any

    beforeEach(() => {
        inst = new csrf_service.CSRFService("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst.getCSRF(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getCSRF("George")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getCSRF("")
        expect(result).toMatchSnapshot()
    })
})
