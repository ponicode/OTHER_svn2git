import * as user_route_access_service from "app/core/auth/user-route-access-service"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as core from "@angular/core"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"
import * as state_storage_service from "app/core/auth/state-storage.service"
import * as ngx_webstorage from "ngx-webstorage"
import * as rxjs from "rxjs"

import * as tree from "@angular/router/src/utils/tree"
// @ponicode
describe("canActivate", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let object: any
    let inst5: any
    let inst6: any
    let object2: any
    let inst7: any
    let inst8: any
    let object3: any
    let inst9: any
    let inst10: any
    let inst11: any
    let inst12: any
    let inst13: any
    let inst14: any
    let inst15: any
    let inst16: any
    let inst17: any
    let inst18: any
    let inst19: any
    let inst21: any
    let inst20: any
    let inst22: any
    let inst23: any
    let inst24: any

    beforeEach(() => {
        inst = new url_tree.UrlSerializer()
        inst2 = new router_outlet_context.ChildrenOutletContexts()
        inst3 = new location_strategy.LocationStrategy()
        inst4 = new location.Location(inst3)
        object = [{ provide: false, multi: false, useExisting: "9876" }, { provide: true, multi: false, useExisting: "da7588892" }]
        inst5 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst6 = new compiler.Compiler()
        object2 = [{ path: "C:\\\\path\\to\\folder\\", pathMatch: "path/to/file.ext", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Handmade Fresh Chicken", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }, { path: ".", pathMatch: "./path/to/file", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }, { path: ".", pathMatch: "/path/to/file", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }]
        inst7 = new router.Router(null, inst, inst2, inst4, core.Injector.create({ providers: object, parent: undefined, name: "Anas" }), inst5, inst6, object2)
        inst8 = new component_factory_resolver.ComponentFactoryResolver()
        object3 = { 0: { provide: false, multi: true, useFactory: () => "", deps: undefined }, 1: { provide: false, multi: true, useFactory: () => "581-660-3163", deps: undefined }, 2: { provide: false, multi: true, useFactory: () => "850-826-8625", deps: undefined }, 3: { provide: true, multi: true, useFactory: () => "813-639-1831", deps: undefined } }
        inst9 = new application_ref.ApplicationRef()
        inst10 = new scrollbar.ScrollBar("a1969970175")
        inst11 = new core.RendererFactory2()
        inst12 = new modal_stack.NgbModalStack(inst9, null, 12345, inst10, inst11)
        inst13 = new modal_config.NgbModalConfig()
        inst14 = new ng_bootstrap.NgbModal(inst8, core.Injector.create(object3,undefined), inst12, inst13)
        inst15 = new login_modal_service.LoginModalService(inst14)
        inst16 = new http.HttpHandler()
        inst17 = new http.HttpClient(inst16)
        inst18 = new account_service.AccountService(inst17)
        inst19 = new principal_service.Principal(inst18)
        inst21 = new rxjs.Observable(undefined)
        inst20 = new rxjs.Subject()
        inst22 = new ngx_webstorage.SessionStorageService({ keyChanges: inst20, isAvailable: true, name: "Michael", get: () => inst21, set: () => null, del: () => null, clear: () => null })
        inst23 = new state_storage_service.StateStorageService(inst22)
        inst24 = new user_route_access_service.UserRouteAccessService(inst7, inst15, inst19, inst23)
    })

    test("0", () => {
        let param1: any = new router.ActivatedRouteSnapshot()
        let inst25: any = new tree.TreeNode(undefined, [])
        let param2: any = new router.RouterStateSnapshot(inst25)
        let result: any = inst24.canActivate(param1, param2)
        expect(result).toMatchSnapshot()
    })
})
