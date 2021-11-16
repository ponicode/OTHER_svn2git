import * as metrics_modal_component from "app/admin/metrics/metrics-modal.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new metrics_modal_component.JhiMetricsMonitoringModalComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getBadgeClass", () => {
    let inst: any

    beforeEach(() => {
        inst = new metrics_modal_component.JhiMetricsMonitoringModalComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.getBadgeClass("WAITING")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getBadgeClass("BLOCKED")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getBadgeClass("TIMED_WAITING")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getBadgeClass(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getBadgeClass(1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getBadgeClass(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
