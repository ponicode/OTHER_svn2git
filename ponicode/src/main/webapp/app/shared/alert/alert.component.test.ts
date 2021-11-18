import * as alert_component from "app/shared/alert/alert.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_component.JhiAlertComponent("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setClasses", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_component.JhiAlertComponent("http://base.com")
    })

    test("0", () => {
        let result: any = inst.setClasses("The line-by-line profiler can only be used in dev.")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setClasses("Message recipient is the same as originator")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.setClasses("Invalid [%s] value. %s")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.setClasses("Invalid Invitation Token.")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.setClasses("invalid option")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.setClasses("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_component.JhiAlertComponent("http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
