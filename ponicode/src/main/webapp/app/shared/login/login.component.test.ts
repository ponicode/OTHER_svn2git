import * as login_component from "app/shared/login/login.component"
import * as ng_jhipster from "ng-jhipster"
import * as login_service from "app/core/login/login.service"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"
import * as config_service from "ng-jhipster/config.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"
import * as auth_jwt_service from "app/core/auth/auth-jwt.service"
import * as ngx_webstorage from "ngx-webstorage"
import * as rxjs from "rxjs"
import * as class_transformer from "class-transformer"
import * as state_storage_service from "app/core/auth/state-storage.service"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"

describe("ngAfterViewInit", () => {
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
    let inst15: any
    let inst14: any
    let inst16: any
    let inst17: any
    let inst18: any
    let inst20: any
    let inst19: any
    let inst21: any
    let inst22: any
    let inst23: any
    let inst24: any
    let inst25: any
    let inst26: any
    let inst27: any
    let inst28: any
    let object: any
    let inst29: any
    let inst30: any
    let object2: any
    let inst31: any
    let inst32: any
    let inst33: any

    beforeEach(() => {
        inst = new ng_jhipster.JhiEventManager()
        inst2 = new translate_store.TranslateStore()
        inst3 = new translate_loader.TranslateLoader()
        inst4 = new translate_compiler.TranslateCompiler()
        inst5 = new translate_parser.TranslateParser()
        inst6 = new missing_translation_handler.MissingTranslationHandler()
        inst7 = new core.TranslateService(inst2, inst3, inst4, inst5, inst6, false, true)
        inst8 = new config_service.JhiConfigService(undefined)
        inst9 = new ng_jhipster.JhiLanguageService(inst7, inst8)
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new account_service.AccountService(inst11)
        inst13 = new principal_service.Principal(inst12)
        inst15 = new rxjs.Observable(undefined)
        inst14 = new rxjs.Subject()
        inst16 = new ngx_webstorage.LocalStorageService({ keyChanges: inst14, isAvailable: true, name: "Jean-Philippe", get: () => inst15, set: () => null, del: () => null, clear: () => null })
        inst17 = new auth_jwt_service.AuthServerProvider(null, inst16, class_transformer.plainToClass(ngx_webstorage.SessionStorageService,{}))
        inst18 = new login_service.LoginService(inst9, inst13, inst17)
        inst20 = new rxjs.Observable(undefined)
        inst19 = new rxjs.Subject()
        inst21 = new ngx_webstorage.SessionStorageService({ keyChanges: inst19, isAvailable: true, name: "Edmond", get: () => inst20, set: () => null, del: () => null, clear: () => null })
        inst22 = new state_storage_service.StateStorageService(inst21)
        inst23 = new core.ElementRef(12345)
        inst24 = new core.Renderer()
        inst25 = new url_tree.UrlSerializer()
        inst26 = new router_outlet_context.ChildrenOutletContexts()
        inst27 = new location_strategy.LocationStrategy()
        inst28 = new location.Location(inst27)
        object = [{ provide: false, multi: undefined, useExisting: "da7588892" }]
        inst29 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst30 = new compiler.Compiler()
        object2 = [{ path: "C:\\\\path\\to\\file.ext", pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "always" }, null]
        inst31 = new router.Router(null, inst25, inst26, inst28, core.Injector.create({ providers: object, parent: undefined, name: "Pierre Edouard" }), inst29, inst30, object2)
        inst32 = new ng_bootstrap.NgbActiveModal()
        inst33 = new login_component.JhiLoginModalComponent(inst, inst18, inst22, inst23, inst24, inst31, inst32)
    })

    test("0", () => {
        let result: any = inst33.ngAfterViewInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("cancel", () => {
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
    let inst15: any
    let inst14: any
    let inst16: any
    let inst17: any
    let inst18: any
    let inst21: any
    let inst20: any
    let inst19: any
    let inst22: any
    let inst23: any
    let inst24: any
    let inst25: any
    let inst26: any
    let inst27: any
    let inst28: any
    let inst29: any
    let object: any
    let inst30: any
    let inst31: any
    let object2: any
    let inst32: any
    let inst33: any
    let inst34: any

    beforeEach(() => {
        inst = new ng_jhipster.JhiEventManager()
        inst2 = new translate_store.TranslateStore()
        inst3 = new translate_loader.TranslateLoader()
        inst4 = new translate_compiler.TranslateCompiler()
        inst5 = new translate_parser.TranslateParser()
        inst6 = new missing_translation_handler.MissingTranslationHandler()
        inst7 = new core.TranslateService(inst2, inst3, inst4, inst5, inst6, false, undefined)
        inst8 = new config_service.JhiConfigService(undefined)
        inst9 = new ng_jhipster.JhiLanguageService(inst7, inst8)
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new account_service.AccountService(inst11)
        inst13 = new principal_service.Principal(inst12)
        inst15 = new rxjs.Observable(undefined)
        inst14 = new rxjs.Subject()
        inst16 = new ngx_webstorage.LocalStorageService({ keyChanges: inst14, isAvailable: true, name: "Anas", get: () => inst15, set: () => null, del: () => null, clear: () => null })
        inst17 = new auth_jwt_service.AuthServerProvider(null, inst16, class_transformer.plainToClass(ngx_webstorage.SessionStorageService,{}))
        inst18 = new login_service.LoginService(inst9, inst13, inst17)
        inst21 = new rxjs.Observable(undefined)
        inst20 = new rxjs.Observable(undefined)
        inst19 = new rxjs.Subject()
        inst22 = new ngx_webstorage.SessionStorageService({ keyChanges: inst19, isAvailable: false, name: "Pierre Edouard", get: () => inst20, set: () => null, del: () => inst21, clear: () => null })
        inst23 = new state_storage_service.StateStorageService(inst22)
        inst24 = new core.ElementRef("bc23a9d531064583ace8f67dad60f6bb")
        inst25 = new core.Renderer()
        inst26 = new url_tree.UrlSerializer()
        inst27 = new router_outlet_context.ChildrenOutletContexts()
        inst28 = new location_strategy.LocationStrategy()
        inst29 = new location.Location(inst28)
        object = { 0: { provide: false, multi: true, useFactory: () => "Marketing", deps: undefined }, 1: null, 2: null }
        inst30 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst31 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: "/path/to/file", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "paramsOrQueryParamsChange" }, null, null, null, null]
        inst32 = new router.Router(null, inst26, inst27, inst29, core.Injector.create({ providers: object, parent: undefined, name: undefined }), inst30, inst31, object2)
        inst33 = new ng_bootstrap.NgbActiveModal()
        inst34 = new login_component.JhiLoginModalComponent(inst, inst18, inst23, inst24, inst25, inst32, inst33)
    })

    test("0", () => {
        let result: any = inst34.cancel()
        expect(result).toMatchSnapshot()
    })
})
