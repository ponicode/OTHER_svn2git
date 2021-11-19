import * as configuration_component from "app/admin/configuration/configuration.component"
import * as configuration_service from "app/admin/configuration/configuration.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("keys", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.JhiConfigurationService(inst2)
        inst4 = new configuration_component.JhiConfigurationComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.keys("Anas")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.keys("George")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.keys("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.keys("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.keys("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.JhiConfigurationService(inst2)
        inst4 = new configuration_component.JhiConfigurationComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
