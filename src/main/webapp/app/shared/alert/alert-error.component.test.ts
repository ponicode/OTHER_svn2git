import * as alert_error_component from "app/shared/alert/alert-error.component"

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_error_component.JhiAlertErrorComponent(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setClasses", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_error_component.JhiAlertErrorComponent(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.setClasses({ position: 31 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setClasses({ position: 320 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.setClasses("\n\nThe first error message:\n")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.setClasses("Warning: ")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.setClasses("The line-by-line profiler can only be used in dev.")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.setClasses(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("addErrorAlert", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_error_component.JhiAlertErrorComponent(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.addErrorAlert(false, "elio@example.com", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.addErrorAlert(true, "Elio", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.addErrorAlert("Exception not raised: %s", 12, 256)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.addErrorAlert(false, "Elio", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.addErrorAlert(400, 56784, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.addErrorAlert("", Infinity, Infinity)
        expect(result).toMatchSnapshot()
    })
})
