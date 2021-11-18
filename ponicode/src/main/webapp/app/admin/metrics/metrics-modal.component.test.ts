import * as metrics_modal_component from "app/admin/metrics/metrics-modal.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new metrics_modal_component.JhiMetricsMonitoringModalComponent(true)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
