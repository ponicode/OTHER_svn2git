import * as audits_component from "app/admin/audits/audits.component"
import * as audits_service from "app/admin/audits/audits.service"
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
import * as router from "@angular/router"
import * as common from "@angular/common"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as injector from "@angular/core/src/di/injector"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"

describe("previousMonth", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Maurice Purdy")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = [{ provide: true, multi: true, useValue: true }, null, null, null]
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create(object,undefined), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.previousMonth()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, false, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Janet Homenick")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = [["[\"foo bar\",  -0.353, \"**text**\", 4653]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"]]
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: ".", pathMatch: "path/to/folder/", matcher: undefined, component: undefined, redirectTo: "https://accounts.google.com/o/oauth2/revoke?token=%s", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }, null, null, null]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create(object,undefined), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("sort", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, false)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Janet Homenick")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = [{ provide: true, multi: false, useValue: false }, null]
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Awesome Frozen Computer", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "pathParamsChange" }, null, null]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.sort()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("today", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Ronald Keeling")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = [{ provide: false, multi: false, useExisting: "bc23a9d531064583ace8f67dad60f6bb" }]
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: "path/to/folder/", matcher: undefined, component: undefined, redirectTo: "https://", outlet: "Handmade Fresh Chicken", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "c466a48309794261b64a4f02cfcc3d64", runGuardsAndResolvers: "paramsChange" }, { path: undefined, pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: undefined, redirectTo: "https://api.telegram.org/", outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "paramsChange" }]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create(object,undefined), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.today()
        expect(result).toMatchSnapshot()
    })
})

describe("previousMonth", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, true, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Becky Bednar")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = { 0: { provide: false, multi: true, useFactory: () => "Data Scientist", deps: undefined }, 1: { provide: true, multi: true, useFactory: () => "Sales", deps: undefined }, 2: { provide: true, multi: true, useFactory: () => "581-660-3163", deps: undefined } }
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: "C:\\\\path\\to\\file.ext", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "ponicode.com", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "always" }, { path: ".", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://croplands.org/app/a/confirm?t=", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "always" }, { path: "C:\\\\path\\to\\folder\\", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "always" }]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create(object,undefined), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.previousMonth()
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, false, false)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Ronald Keeling")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = { 0: { provide: false, multi: false, useFactory: () => "807-870-7660", deps: undefined }, 1: { provide: false, multi: false, useFactory: () => "Marketing", deps: undefined }, 2: { provide: true, multi: false, useFactory: () => "TestUpperCase@Example.com", deps: undefined }, 3: { provide: false, multi: false, useFactory: () => "Software Engineer", deps: undefined } }
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: "C:\\\\path\\to\\file.ext", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Awesome Frozen Computer", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsOrQueryParamsChange" }]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create({ providers: object, parent: undefined, name: "George" }), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("transition", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Maurice Purdy")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = { 0: { provide: true, multi: false, useFactory: () => 16, deps: undefined } }
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "paramsChange" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsChange" }]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create({ providers: object, parent: undefined, name: "George" }), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.transition()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onError", () => {
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
    let object: any
    let inst20: any
    let inst21: any
    let object2: any
    let inst22: any
    let inst23: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new audits_service.AuditsService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, true, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiParseLinks()
        inst14 = new router.ActivatedRoute()
        inst15 = new common.DatePipe("Maurice Purdy")
        inst16 = new url_tree.UrlSerializer()
        inst17 = new router_outlet_context.ChildrenOutletContexts()
        inst18 = new location_strategy.LocationStrategy()
        inst19 = new location.Location(inst18)
        object = [["[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[-1, 0.5, 1, 2, 3, 4, 5]"], ["[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"foo bar\",  -0.353, \"**text**\", 4653]"], ["[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"]]
        inst20 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst21 = new compiler.Compiler()
        object2 = [{ path: "./path/to/file", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://api.telegram.org/", outlet: "Awesome Frozen Computer", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "bc23a9d531064583ace8f67dad60f6bb", runGuardsAndResolvers: "always" }, { path: "path/to/folder/", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "http://base.com", outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "always" }, { path: "/path/to/file", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://twitter.com/path?abc", outlet: "Handmade Fresh Chicken", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "bc23a9d531064583ace8f67dad60f6bb", runGuardsAndResolvers: "always" }, { path: "/path/to/file", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://", outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "c466a48309794261b64a4f02cfcc3d64", runGuardsAndResolvers: "always" }]
        inst22 = new router.Router(null, inst16, inst17, inst19, injector.Injector.create(object,undefined), inst20, inst21, object2)
        inst23 = new audits_component.AuditsComponent(inst3, inst12, inst13, inst14, inst15, inst22)
    })

    test("0", () => {
        let result: any = inst23.onError({ error: "invalid choice", message: "Uploaded file was not added to the resource. " })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst23.onError({ error: "ValueError", message: "ValueError exception should be raised" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst23.onError({ error: "multiple errors occurred", message: "There is a mismatch" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst23.onError({ error: "too many arguments", message: "the specified credentials were rejected by the server" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst23.onError({ error: "multiple errors occurred", message: "" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst23.onError({ error: "", message: "" })
        expect(result).toMatchSnapshot()
    })
})
