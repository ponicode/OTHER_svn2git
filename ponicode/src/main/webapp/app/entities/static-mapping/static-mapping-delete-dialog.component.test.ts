import * as static_mapping_delete_dialog_component from "app/entities/static-mapping/static-mapping-delete-dialog.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as http from "@angular/common/http"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as ng_jhipster from "ng-jhipster"

import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as core from "@angular/core"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"
describe("clear", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_mapping_service.StaticMappingService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new static_mapping_delete_dialog_component.StaticMappingDeleteDialogComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.clear()
        expect(result).toMatchSnapshot()
    })
})

describe("confirmDelete", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_mapping_service.StaticMappingService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new static_mapping_delete_dialog_component.StaticMappingDeleteDialogComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.confirmDelete(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.confirmDelete(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.confirmDelete(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.confirmDelete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.confirmDelete(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.confirmDelete(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let object: any
    let inst6: any
    let inst7: any
    let object2: any
    let inst8: any
    let inst9: any
    let object3: any
    let inst10: any
    let inst11: any
    let inst12: any
    let inst13: any
    let inst14: any
    let inst15: any
    let inst16: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new url_tree.UrlSerializer()
        inst3 = new router_outlet_context.ChildrenOutletContexts()
        inst4 = new location_strategy.LocationStrategy()
        inst5 = new location.Location(inst4)
        object = { 0: { provide: true, multi: undefined, useFactory: () => "Software Engineer", deps: undefined }, 1: null }
        inst6 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst7 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "c466a48309794261b64a4f02cfcc3d64", runGuardsAndResolvers: "paramsChange" }]
        inst8 = new router.Router(null, inst2, inst3, inst5, core.Injector.create({ providers: object, parent: undefined, name: "Anas" }), inst6, inst7, object2)
        inst9 = new component_factory_resolver.ComponentFactoryResolver()
        object3 = [["Software Engineer", "Data Scientist", "Marketing", "Data Scientist", "Marketing"], null, null, null, null]
        inst10 = new application_ref.ApplicationRef()
        inst11 = new scrollbar.ScrollBar("bc23a9d531064583ace8f67dad60f6bb")
        inst12 = new core.RendererFactory2()
        inst13 = new modal_stack.NgbModalStack(inst10, null, 56784, inst11, inst12)
        inst14 = new modal_config.NgbModalConfig()
        inst15 = new ng_bootstrap.NgbModal(inst9, core.Injector.create({ providers: object3, parent: undefined, name: "Jean-Philippe" }), inst13, inst14)
        inst16 = new static_mapping_delete_dialog_component.StaticMappingDeletePopupComponent(inst, inst8, inst15)
    })

    test("0", () => {
        let result: any = inst16.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("clear", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_mapping_service.StaticMappingService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new static_mapping_delete_dialog_component.StaticMappingDeleteDialogComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.clear()
        expect(result).toMatchSnapshot()
    })
})

describe("confirmDelete", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_mapping_service.StaticMappingService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new static_mapping_delete_dialog_component.StaticMappingDeleteDialogComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.confirmDelete(-100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.confirmDelete(1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.confirmDelete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.confirmDelete(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.confirmDelete(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let object: any
    let inst6: any
    let inst7: any
    let object2: any
    let inst8: any
    let inst9: any
    let object3: any
    let inst10: any
    let inst11: any
    let inst12: any
    let inst13: any
    let inst14: any
    let inst15: any
    let inst16: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new url_tree.UrlSerializer()
        inst3 = new router_outlet_context.ChildrenOutletContexts()
        inst4 = new location_strategy.LocationStrategy()
        inst5 = new location.Location(inst4)
        object = [{ provide: true, multi: false, useValue: true }, { provide: true, multi: false, useValue: false }]
        inst6 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst7 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "bc23a9d531064583ace8f67dad60f6bb", runGuardsAndResolvers: undefined }, { path: undefined, pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Awesome Frozen Computer", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: undefined }, { path: undefined, pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Awesome Frozen Computer", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: undefined }]
        inst8 = new router.Router(null, inst2, inst3, inst5, core.Injector.create(object,undefined), inst6, inst7, object2)
        inst9 = new component_factory_resolver.ComponentFactoryResolver()
        object3 = [["Marketing"]]
        inst10 = new application_ref.ApplicationRef()
        inst11 = new scrollbar.ScrollBar(12)
        inst12 = new core.RendererFactory2()
        inst13 = new modal_stack.NgbModalStack(inst10, null, 987650, inst11, inst12)
        inst14 = new modal_config.NgbModalConfig()
        inst15 = new ng_bootstrap.NgbModal(inst9, core.Injector.create({ providers: object3, parent: undefined, name: "George" }), inst13, inst14)
        inst16 = new static_mapping_delete_dialog_component.StaticMappingDeletePopupComponent(inst, inst8, inst15)
    })

    test("0", () => {
        let result: any = inst16.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
