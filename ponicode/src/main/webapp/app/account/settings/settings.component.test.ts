import * as settings_component from "app/account/settings/settings.component"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as principal_service from "app/core/auth/principal.service"
import * as ng_jhipster from "ng-jhipster"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"
import * as config_service from "ng-jhipster/config.service"
import * as language_helper from "app/core/language/language.helper"
import * as platform_browser from "@angular/platform-browser"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as injector from "@angular/core/src/di/injector"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"

// @ponicode
describe("save", () => {
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
    let inst23: any
    let inst24: any
    let inst25: any
    let inst26: any
    let inst27: any
    let object: any
    let inst28: any
    let inst29: any
    let object2: any
    let inst30: any
    let inst31: any
    let inst32: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new backend.HttpHandler()
        inst5 = new http.HttpClient(inst4)
        inst6 = new account_service.AccountService(inst5)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new translate_store.TranslateStore()
        inst9 = new translate_loader.TranslateLoader()
        inst10 = new translate_compiler.TranslateCompiler()
        inst11 = new translate_parser.TranslateParser()
        inst12 = new missing_translation_handler.MissingTranslationHandler()
        inst13 = new core.TranslateService(inst8, inst9, inst10, inst11, inst12, undefined, undefined)
        inst14 = new config_service.JhiConfigService(undefined)
        inst15 = new ng_jhipster.JhiLanguageService(inst13, inst14)
        inst16 = new translate_store.TranslateStore()
        inst17 = new translate_loader.TranslateLoader()
        inst18 = new translate_compiler.TranslateCompiler()
        inst19 = new translate_parser.TranslateParser()
        inst20 = new missing_translation_handler.MissingTranslationHandler()
        inst21 = new core.TranslateService(inst16, inst17, inst18, inst19, inst20, undefined, false)
        inst22 = new core.RendererFactory2()
        inst23 = new platform_browser.Title("a1969970175")
        inst24 = new url_tree.UrlSerializer()
        inst25 = new router_outlet_context.ChildrenOutletContexts()
        inst26 = new location_strategy.LocationStrategy()
        inst27 = new location.Location(inst26)
        object = [{ provide: true, multi: undefined, useValue: true }, { provide: false, multi: undefined, useValue: true }, { provide: false, multi: undefined, useValue: false }, { provide: false, multi: undefined, useValue: false }, { provide: false, multi: undefined, useValue: true }]
        inst28 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst29 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://twitter.com/path?abc", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: undefined }]
        inst30 = new router.Router(null, inst24, inst25, inst27, injector.Injector.create(object,undefined), inst28, inst29, object2)
        inst31 = new language_helper.JhiLanguageHelper(inst21, inst22, inst23, inst30)
        inst32 = new settings_component.SettingsComponent(inst3, inst7, inst15, inst31)
    })

    test("0", () => {
        let result: any = inst32.save()
        expect(result).toMatchSnapshot()
    })
})
