import * as metrics_modal_component from "app/admin/metrics/metrics-modal.component"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new ng_bootstrap.NgbActiveModal()
        inst2 = new metrics_modal_component.JhiMetricsMonitoringModalComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getBadgeClass", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new ng_bootstrap.NgbActiveModal()
        inst2 = new metrics_modal_component.JhiMetricsMonitoringModalComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.getBadgeClass("BLOCKED")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.getBadgeClass("RUNNABLE")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.getBadgeClass("WAITING")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.getBadgeClass("TIMED_WAITING")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.getBadgeClass("Abruzzo")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.getBadgeClass("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new ng_bootstrap.NgbActiveModal()
        inst2 = new metrics_modal_component.JhiMetricsMonitoringModalComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
