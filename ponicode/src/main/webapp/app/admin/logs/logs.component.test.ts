import * as logs_component from "app/admin/logs/logs.component"
import * as logs_service from "app/admin/logs/logs.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new logs_service.LogsService(inst2)
        inst4 = new logs_component.LogsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("changeLevel", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new logs_service.LogsService(inst2)
        inst4 = new logs_component.LogsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.changeLevel("George", "9876")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.changeLevel("Edmond", "12345")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.changeLevel("Edmond", "c466a48309794261b64a4f02cfcc3d64")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.changeLevel("Michael", "bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.changeLevel("Jean-Philippe", "12345")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.changeLevel("", "")
        expect(result).toMatchSnapshot()
    })
})
