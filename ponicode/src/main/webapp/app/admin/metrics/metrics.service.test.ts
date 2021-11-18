import * as metrics_service from "app/admin/metrics/metrics.service"

// @ponicode
describe("threadDump", () => {
    let inst: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService("POST")
    })

    test("0", () => {
        let result: any = inst.threadDump()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getMetrics", () => {
    let inst: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService("DELETE")
    })

    test("0", () => {
        let result: any = inst.getMetrics()
        expect(result).toMatchSnapshot()
    })
})
