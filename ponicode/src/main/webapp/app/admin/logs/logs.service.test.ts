import * as logs_service from "app/admin/logs/logs.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

import * as log_model from "app/admin/logs/log.model"
describe("changeLevel", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new logs_service.LogsService(inst2)
    })

    test("0", () => {
        let param1: any = new log_model.Log("Janet Homenick", "Ronald Keeling")
        let result: any = inst3.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new log_model.Log("Becky Bednar", "Maurice Purdy")
        let result: any = inst3.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new log_model.Log("Ronald Keeling", "Gail Hoppe")
        let result: any = inst3.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new log_model.Log("Becky Bednar", "Ronald Keeling")
        let result: any = inst3.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new log_model.Log("Ronald Keeling", "Becky Bednar")
        let result: any = inst3.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new log_model.Log("", "")
        let result: any = inst3.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findAll", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new logs_service.LogsService(inst2)
    })

    test("0", () => {
        let result: any = inst3.findAll()
        expect(result).toMatchSnapshot()
    })
})
