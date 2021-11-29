import * as user_management_component from "app/admin/user-management/user-management.component"
import * as user_service from "app/core/user/user.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as ng_jhipster from "ng-jhipster"
import * as security from "@angular/core/src/sanitization/security"
import * as config_service from "ng-jhipster/config.service"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as injector from "@angular/core/src/di/injector"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"

// @ponicode
describe("setActive", () => {
    let inst: any
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
    let inst12: any
    let inst13: any
    let inst14: any
    let inst15: any
    let inst16: any
    let inst17: any
    let inst18: any
    let inst19: any
    let inst20: any
    let inst21: any
    let inst22: any
    let object: any
    let inst23: any
    let inst24: any
    let object2: any
    let inst25: any
    let inst26: any
    let inst27: any
    let object3: any
    let inst28: any
    let inst29: any
    let inst30: any
    let inst31: any
    let inst32: any
    let inst33: any
    let inst34: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, false, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new backend.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new account_service.AccountService(inst14)
        inst16 = new principal_service.Principal(inst15)
        inst17 = new ng_jhipster.JhiParseLinks()
        inst18 = new router.ActivatedRoute()
        inst19 = new url_tree.UrlSerializer()
        inst20 = new router_outlet_context.ChildrenOutletContexts()
        inst21 = new location_strategy.LocationStrategy()
        inst22 = new location.Location(inst21)
        object = [["Marketing", "Marketing", "Data Scientist", "Marketing"], ["Data Scientist", "Sales", "Chief Product Officer", "Sales"], ["Chief Product Officer", "Data Scientist", "Chief Product Officer", "Data Scientist"], ["Chief Product Officer", "Data Scientist", "Marketing", "Marketing"]]
        inst23 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst24 = new compiler.Compiler()
        object2 = [{ path: "path/to/folder/", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsChange" }, { path: "C:\\\\path\\to\\file.ext", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsChange" }, { path: ".", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsChange" }, { path: ".", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "bc23a9d531064583ace8f67dad60f6bb", runGuardsAndResolvers: "paramsChange" }]
        inst25 = new router.Router(null, inst19, inst20, inst22, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst23, inst24, object2)
        inst26 = new ng_jhipster.JhiEventManager()
        inst27 = new component_factory_resolver.ComponentFactoryResolver()
        object3 = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[10, -45.9, 103.5, 0.955674]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[10, -45.9, 103.5, 0.955674]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"]]
        inst28 = new application_ref.ApplicationRef()
        inst29 = new scrollbar.ScrollBar(56784)
        inst30 = new core.RendererFactory2()
        inst31 = new modal_stack.NgbModalStack(inst28, null, 56784, inst29, inst30)
        inst32 = new modal_config.NgbModalConfig()
        inst33 = new ng_bootstrap.NgbModal(inst27, injector.Injector.create(object3,undefined), inst31, inst32)
        inst34 = new user_management_component.UserMgmtComponent(inst3, inst12, inst16, inst17, inst18, inst25, inst26, inst33)
    })

    test("0", () => {
        let result: any = inst34.setActive({}, true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst34.setActive({}, false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst34.setActive(null, null)
        expect(result).toMatchSnapshot()
    })
})
