import * as metrics_component from "app/admin/metrics/metrics.component"
import * as metrics_service from "app/admin/metrics/metrics.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService(987650)
        inst2 = new metrics_component.JhiMetricsMonitoringComponent(true, inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("refreshThreadDumpData", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService(987650)
        inst2 = new metrics_component.JhiMetricsMonitoringComponent(false, inst)
    })

    test("0", () => {
        let result: any = inst2.refreshThreadDumpData()
        expect(result).toMatchSnapshot()
    })
})

describe("refresh", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService(987650)
        inst2 = new metrics_component.JhiMetricsMonitoringComponent(false, inst)
    })

    test("0", () => {
        let result: any = inst2.refresh()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("filterNaN", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new metrics_service.JhiMetricsService(12345)
        inst2 = new metrics_component.JhiMetricsMonitoringComponent(false, inst)
    })

    test("0", () => {
        let result: any = inst2.filterNaN("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.filterNaN("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.filterNaN("Michael")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.filterNaN("Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.filterNaN("George")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.filterNaN("")
        expect(result).toMatchSnapshot()
    })
})
