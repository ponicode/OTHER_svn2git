import * as alert_component from "app/shared/alert/alert.component"

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_component.JhiAlertComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new alert_component.JhiAlertComponent(undefined)
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
        inst = new alert_component.JhiAlertComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.setClasses({ position: 31040 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setClasses({ position: 1800 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.setClasses({ position: 1.0 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.setClasses(0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.setClasses(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.setClasses(NaN)
        expect(result).toMatchSnapshot()
    })
})
