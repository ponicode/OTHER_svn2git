import * as metrics_service from "app/admin/metrics/metrics.service"

// @ponicode
describe("threadDump", () => {
    let inst: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService(undefined)
    })

    test("0", () => {
        let result: any = inst.threadDump()
        expect(result).toMatchSnapshot()
    })
})
