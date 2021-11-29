import * as metrics_component from "app/admin/metrics/metrics.component"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as injector from "@angular/core/src/di/injector"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as core from "@angular/core"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"
import * as metrics_service from "app/admin/metrics/metrics.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("ngOnInit", () => {
    let inst: any
    let object: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any
    let inst9: any
    let inst10: any
    let inst11: any

    beforeEach(() => {
        inst = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: false, multi: undefined, useValue: false }, null]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 12345, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new metrics_service.JhiMetricsService(inst9)
        inst11 = new metrics_component.JhiMetricsMonitoringComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("refreshThreadDumpData", () => {
    let inst: any
    let object: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any
    let inst9: any
    let inst10: any
    let inst11: any

    beforeEach(() => {
        inst = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: false, multi: false, useValue: true }, null, null, null, null]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(987650)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "a1969970175", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new metrics_service.JhiMetricsService(inst9)
        inst11 = new metrics_component.JhiMetricsMonitoringComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.refreshThreadDumpData()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("filterNaN", () => {
    let inst: any
    let object: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any
    let inst9: any
    let inst10: any
    let inst11: any

    beforeEach(() => {
        inst = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: true, multi: true, useExisting: "c466a48309794261b64a4f02cfcc3d64" }, null, null, null]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 56784, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create(object,undefined), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new metrics_service.JhiMetricsService(inst9)
        inst11 = new metrics_component.JhiMetricsMonitoringComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.filterNaN("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.filterNaN("Michael")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.filterNaN("George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.filterNaN("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.filterNaN("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.filterNaN("")
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let object: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any
    let inst9: any
    let inst10: any
    let inst11: any

    beforeEach(() => {
        inst = new component_factory_resolver.ComponentFactoryResolver()
        object = { 0: { provide: true, multi: false, useFactory: () => "Marketing", deps: undefined }, 1: { provide: false, multi: false, useFactory: () => "Sales", deps: undefined }, 2: { provide: true, multi: false, useFactory: () => "Data Scientist", deps: undefined }, 3: { provide: false, multi: false, useFactory: () => true, deps: undefined } }
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(987650)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "bc23a9d531064583ace8f67dad60f6bb", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: "Jean-Philippe" }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new metrics_service.JhiMetricsService(inst9)
        inst11 = new metrics_component.JhiMetricsMonitoringComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("refresh", () => {
    let inst: any
    let object: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any
    let inst9: any
    let inst10: any
    let inst11: any

    beforeEach(() => {
        inst = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: false, multi: false, useExisting: "12345" }, { provide: false, multi: false, useExisting: "bc23a9d531064583ace8f67dad60f6bb" }, { provide: false, multi: false, useExisting: "12345" }, { provide: true, multi: false, useExisting: "da7588892" }, { provide: false, multi: false, useExisting: "bc23a9d531064583ace8f67dad60f6bb" }]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 987650, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create(object,undefined), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new metrics_service.JhiMetricsService(inst9)
        inst11 = new metrics_component.JhiMetricsMonitoringComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.refresh()
        expect(result).toMatchSnapshot()
    })
})
