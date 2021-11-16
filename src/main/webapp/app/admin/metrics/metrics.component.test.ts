import * as metrics_component from "app/admin/metrics/metrics.component"
import * as metrics_service from "app/admin/metrics/metrics.service"

describe("refreshThreadDumpData", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService(undefined)
        inst2 = new metrics_component.JhiMetricsMonitoringComponent(undefined, inst)
    })

    test("0", () => {
        let result: any = inst2.refreshThreadDumpData()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("filterNaN", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService(undefined)
        inst2 = new metrics_component.JhiMetricsMonitoringComponent(undefined, inst)
    })

    test("0", () => {
        let result: any = inst2.filterNaN("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.filterNaN("George")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.filterNaN(true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.filterNaN(false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.filterNaN("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.filterNaN(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
