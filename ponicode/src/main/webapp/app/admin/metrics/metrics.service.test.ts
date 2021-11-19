import * as metrics_service from "app/admin/metrics/metrics.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("getMetrics", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new metrics_service.JhiMetricsService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getMetrics()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("threadDump", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new metrics_service.JhiMetricsService(inst2)
    })

    test("0", () => {
        let result: any = inst3.threadDump()
        expect(result).toMatchSnapshot()
    })
})
