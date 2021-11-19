import * as audits_service from "app/admin/audits/audits.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

// @ponicode
describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(500)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
