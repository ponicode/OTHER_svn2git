import * as health_modal_component from "app/admin/health/health-modal.component"
import * as health_service from "app/admin/health/health.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"

describe("baseName", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new health_modal_component.JhiHealthModalComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.baseName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.baseName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst5.baseName("George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst5.baseName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.baseName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst5.baseName("")
        expect(result).toMatchSnapshot()
    })
})

describe("subSystemName", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new health_modal_component.JhiHealthModalComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.subSystemName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.subSystemName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst5.subSystemName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst5.subSystemName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.subSystemName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("readableValue", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new health_modal_component.JhiHealthModalComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.readableValue(1048576)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.readableValue(1048575)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst5.readableValue(1073741824)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst5.readableValue(537395200.0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst5.readableValue(1073741825.0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst5.readableValue(NaN)
        expect(result).toMatchSnapshot()
    })
})
