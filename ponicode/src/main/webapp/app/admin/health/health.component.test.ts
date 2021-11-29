import * as health_component from "app/admin/health/health.component"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as injector from "@angular/core/src/di/injector"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as core from "@angular/core"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"
import * as health_service from "app/admin/health/health.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("baseName", () => {
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
        object = { 0: { provide: true, multi: undefined, useFactory: () => "Data Scientist", deps: undefined }, 1: { provide: true, multi: undefined, useExisting: "c466a48309794261b64a4f02cfcc3d64" }, 2: null }
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(12345)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "bc23a9d531064583ace8f67dad60f6bb", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: "Anas" }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.baseName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.baseName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.baseName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.baseName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.baseName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.baseName("")
        expect(result).toMatchSnapshot()
    })
})

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
        object = [{ provide: false, multi: true, useValue: false }, null, null, ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[10, -45.9, 103.5, 0.955674]"]]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 987650, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create(object,undefined), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.refresh()
        expect(result).toMatchSnapshot()
    })
})

describe("subSystemName", () => {
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
        object = { 0: { provide: false, multi: false, useFactory: () => "Data Scientist", deps: undefined }, 1: null }
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(987650)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "bc23a9d531064583ace8f67dad60f6bb", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create(object,undefined), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.subSystemName("George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.subSystemName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.subSystemName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.subSystemName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.subSystemName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.subSystemName("")
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
        object = [["Data Scientist", "Marketing", "Software Engineer"]]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(56784)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 56784, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("getBadgeClass", () => {
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
        object = [{ provide: false, multi: undefined, useValue: true }, { provide: false, multi: undefined, useValue: false }, { provide: true, multi: undefined, useValue: false }]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(56784)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 56784, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create(object,undefined), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.getBadgeClass("UP")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.getBadgeClass("Software Engineer")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.getBadgeClass("Data Scientist")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.getBadgeClass("Sales")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.getBadgeClass("Marketing")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.getBadgeClass("")
        expect(result).toMatchSnapshot()
    })
})

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
        object = [["Chief Product Officer", "Marketing"], ["Sales", "Data Scientist"], ["Chief Product Officer", "Software Engineer"], ["Software Engineer", "Chief Product Officer"]]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(12)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "a1969970175", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.refresh()
        expect(result).toMatchSnapshot()
    })
})

describe("baseName", () => {
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
        object = { 0: { provide: false, multi: true, useFactory: () => "Sales", deps: undefined } }
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(12)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "a1969970175", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: "Anas" }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.baseName("George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.baseName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.baseName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.baseName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.baseName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.baseName("")
        expect(result).toMatchSnapshot()
    })
})

describe("getBadgeClass", () => {
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
        object = [{ provide: false, multi: undefined, useValue: false }, { provide: true, multi: undefined, useValue: false }]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar("a1969970175")
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 12345, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create(object,undefined), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.getBadgeClass("UP")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.getBadgeClass("Data Scientist")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.getBadgeClass("Software Engineer")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.getBadgeClass("Marketing")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.getBadgeClass("Chief Product Officer")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.getBadgeClass("")
        expect(result).toMatchSnapshot()
    })
})

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
        object = { 0: { provide: true, multi: false, useFactory: () => "https://accounts.google.com/o/oauth2/revoke?token=%s", deps: undefined }, 1: { provide: false, multi: false, useFactory: () => "Software Engineer", deps: undefined }, 2: { provide: true, multi: false, useFactory: () => "methodical", deps: undefined }, 3: { provide: true, multi: false, useFactory: () => "Sales", deps: undefined }, 4: { provide: false, multi: false, useFactory: () => "", deps: undefined } }
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(987650)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "bc23a9d531064583ace8f67dad60f6bb", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: "Pierre Edouard" }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.refresh()
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
        object = [["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]"]]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(987650)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, 56784, inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create(object,undefined), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("subSystemName", () => {
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
        object = [{ provide: true, multi: undefined, useValue: false }, { provide: true, multi: undefined, useValue: true }, { provide: false, multi: undefined, useValue: false }]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(12345)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "a1969970175", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.subSystemName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.subSystemName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.subSystemName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.subSystemName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.subSystemName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.subSystemName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("showHealth", () => {
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
        object = [{ provide: true, multi: true, useValue: false }, { provide: true, multi: true, useValue: false }, { provide: true, multi: true, useValue: false }, { provide: false, multi: true, useValue: false }, { provide: false, multi: true, useValue: false }]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(987650)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "a1969970175", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst5, inst6)
        inst8 = new backend.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new health_service.JhiHealthService(inst9)
        inst11 = new health_component.JhiHealthCheckComponent(inst7, inst10)
    })

    test("0", () => {
        let result: any = inst11.showHealth("4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.showHealth("^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.showHealth("v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.showHealth("v1.2.4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.showHealth("1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.showHealth("")
        expect(result).toMatchSnapshot()
    })
})
