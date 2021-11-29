import * as home_component from "app/home/home.component"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as core from "@angular/core"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"
import * as configuration_service from "app/shared/service/configuration-service"
import * as ng_jhipster from "ng-jhipster"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"
import * as migration_process_service from "app/migration/migration-process.service"
import * as material from "@angular/material"
import * as overlay from "@angular/cdk/overlay/typings/overlay"
import * as scroll_strategy_options from "@angular/cdk/overlay/typings/scroll/scroll-strategy-options"
import * as scroll_dispatcher from "@angular/cdk/scrolling/typings/scroll-dispatcher"
import * as ng_zone from "@angular/core/src/zone/ng_zone"
import * as platform from "@angular/cdk/platform/typings/platform"
import * as viewport_ruler from "@angular/cdk/scrolling/typings/viewport-ruler"
import * as overlay_container from "@angular/cdk/overlay/typings/overlay-container"
import * as overlay_position_builder from "@angular/cdk/overlay/typings/position/overlay-position-builder"
import * as overlay_keyboard_dispatcher from "@angular/cdk/overlay/typings/keyboard/overlay-keyboard-dispatcher"
import * as directionality from "@angular/cdk/bidi/typings/directionality"
import * as live_announcer from "@angular/cdk/a11y/typings/live-announcer/live-announcer"
import * as breakpoints_observer from "@angular/cdk/layout/typings/breakpoints-observer"
import * as media_matcher from "@angular/cdk/layout/typings/media-matcher"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"

describe("registerAuthenticationSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let object: any
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
    let object2: any
    let inst21: any
    let inst22: any
    let object3: any
    let inst23: any
    let inst24: any
    let inst25: any
    let inst26: any
    let inst27: any
    let inst28: any
    let inst29: any
    let inst30: any
    let inst31: any
    let inst32: any
    let inst33: any
    let inst34: any
    let inst35: any
    let object4: any
    let inst36: any
    let inst37: any
    let inst38: any
    let inst39: any
    let inst40: any
    let inst41: any
    let inst42: any
    let inst43: any
    let inst44: any
    let inst45: any
    let inst46: any
    let inst47: any
    let inst48: any
    let inst49: any
    let inst50: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
        inst5 = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: false, multi: undefined, useValue: false }, { provide: true, multi: undefined, useValue: true }]
        inst6 = new application_ref.ApplicationRef()
        inst7 = new scrollbar.ScrollBar("bc23a9d531064583ace8f67dad60f6bb")
        inst8 = new core.RendererFactory2()
        inst9 = new modal_stack.NgbModalStack(inst6, null, 56784, inst7, inst8)
        inst10 = new modal_config.NgbModalConfig()
        inst11 = new ng_bootstrap.NgbModal(inst5, core.Injector.create(object,undefined), inst9, inst10)
        inst12 = new login_modal_service.LoginModalService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new configuration_service.ConfigurationService(inst14)
        inst16 = new ng_jhipster.JhiEventManager()
        inst17 = new url_tree.UrlSerializer()
        inst18 = new router_outlet_context.ChildrenOutletContexts()
        inst19 = new location_strategy.LocationStrategy()
        inst20 = new location.Location(inst19)
        object2 = [{ provide: true, multi: false, useValue: true }]
        inst21 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst22 = new compiler.Compiler()
        object3 = [{ path: undefined, pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Awesome Frozen Computer", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "pathParamsOrQueryParamsChange" }]
        inst23 = new router.Router(null, inst17, inst18, inst20, core.Injector.create({ providers: object2, parent: undefined, name: "Michael" }), inst21, inst22, object3)
        inst24 = new http.HttpHandler()
        inst25 = new http.HttpClient(inst24)
        inst26 = new migration_process_service.MigrationProcessService(inst25)
        inst27 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst28 = new platform.Platform(undefined)
        inst29 = new scroll_dispatcher.ScrollDispatcher(inst27, inst28)
        inst30 = new viewport_ruler.ViewportRuler(null, null)
        inst31 = new scroll_strategy_options.ScrollStrategyOptions(inst29, inst30, null, "bc23a9d531064583ace8f67dad60f6bb")
        inst32 = new overlay_container.OverlayContainer("bc23a9d531064583ace8f67dad60f6bb")
        inst33 = new component_factory_resolver.ComponentFactoryResolver()
        inst34 = new overlay_position_builder.OverlayPositionBuilder(null, 56784, undefined, undefined)
        inst35 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(12)
        object4 = [{ provide: true, multi: true, useExisting: "bc23a9d531064583ace8f67dad60f6bb" }, { provide: false, multi: true, useExisting: "12345" }, { provide: false, multi: true, useExisting: "c466a48309794261b64a4f02cfcc3d64" }, { provide: false, multi: true, useExisting: "12345" }, { provide: false, multi: true, useExisting: "bc23a9d531064583ace8f67dad60f6bb" }]
        inst36 = new directionality.Directionality("a1969970175")
        inst37 = new overlay.Overlay(inst31, inst32, inst33, inst34, inst35, core.Injector.create({ providers: object4, parent: undefined, name: "Pierre Edouard" }), null, 12345, inst36, undefined)
        inst38 = new live_announcer.LiveAnnouncer(987650, null, "bc23a9d531064583ace8f67dad60f6bb")
        inst39 = new platform.Platform(undefined)
        inst40 = new media_matcher.MediaMatcher(inst39)
        inst41 = new breakpoints_observer.BreakpointObserver(inst40, null)
        inst42 = new material.MatSnackBarConfig()
        inst43 = new material.MatSnackBar(inst37, inst38, null, inst41, null, inst42)
        inst44 = new translate_store.TranslateStore()
        inst45 = new translate_loader.TranslateLoader()
        inst46 = new translate_compiler.TranslateCompiler()
        inst47 = new translate_parser.TranslateParser()
        inst48 = new missing_translation_handler.MissingTranslationHandler()
        inst49 = new core.TranslateService(inst44, inst45, inst46, inst47, inst48, true, false)
        inst50 = new home_component.HomeComponent(inst4, inst12, inst15, inst16, inst23, inst26, inst43, inst49)
    })

    test("0", () => {
        let result: any = inst50.registerAuthenticationSuccess()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let object: any
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
    let object2: any
    let inst21: any
    let inst22: any
    let object3: any
    let inst23: any
    let inst24: any
    let inst25: any
    let inst26: any
    let inst27: any
    let inst28: any
    let inst29: any
    let inst30: any
    let inst31: any
    let inst32: any
    let inst33: any
    let inst34: any
    let inst35: any
    let object4: any
    let inst36: any
    let inst37: any
    let inst38: any
    let inst39: any
    let inst40: any
    let inst41: any
    let inst42: any
    let inst43: any
    let inst44: any
    let inst45: any
    let inst46: any
    let inst47: any
    let inst48: any
    let inst49: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
        inst5 = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: true, multi: false, useValue: false }, { provide: false, multi: false, useValue: false }, { provide: false, multi: false, useValue: true }, { provide: false, multi: false, useValue: false }]
        inst6 = new application_ref.ApplicationRef()
        inst7 = new scrollbar.ScrollBar(987650)
        inst8 = new core.RendererFactory2()
        inst9 = new modal_stack.NgbModalStack(inst6, null, "bc23a9d531064583ace8f67dad60f6bb", inst7, inst8)
        inst10 = new modal_config.NgbModalConfig()
        inst11 = new ng_bootstrap.NgbModal(inst5, core.Injector.create(object,undefined), inst9, inst10)
        inst12 = new login_modal_service.LoginModalService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new configuration_service.ConfigurationService(inst14)
        inst16 = new ng_jhipster.JhiEventManager()
        inst17 = new url_tree.UrlSerializer()
        inst18 = new router_outlet_context.ChildrenOutletContexts()
        inst19 = new location_strategy.LocationStrategy()
        inst20 = new location.Location(inst19)
        object2 = { 0: { provide: false, multi: true, useFactory: () => "Chief Product Officer", deps: undefined }, 1: { provide: true, multi: true, useFactory: () => "2021-07-29T15:31:46.922Z", deps: undefined }, 2: { provide: false, multi: true, useFactory: () => "", deps: undefined }, 3: { provide: false, multi: true, useFactory: () => "813-639-1831", deps: undefined }, 4: { provide: true, multi: true, useFactory: () => "green", deps: undefined } }
        inst21 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst22 = new compiler.Compiler()
        object3 = [{ path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "Www.GooGle.com", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "pathParamsOrQueryParamsChange" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "www.google.com", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: "pathParamsOrQueryParamsChange" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: "pathParamsOrQueryParamsChange" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "c466a48309794261b64a4f02cfcc3d64", runGuardsAndResolvers: "pathParamsOrQueryParamsChange" }]
        inst23 = new router.Router(null, inst17, inst18, inst20, core.Injector.create({ providers: object2, parent: undefined, name: "Edmond" }), inst21, inst22, object3)
        inst24 = new http.HttpHandler()
        inst25 = new http.HttpClient(inst24)
        inst26 = new migration_process_service.MigrationProcessService(inst25)
        inst27 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst28 = new platform.Platform(undefined)
        inst29 = new scroll_dispatcher.ScrollDispatcher(inst27, inst28)
        inst30 = new viewport_ruler.ViewportRuler(null, null)
        inst31 = new scroll_strategy_options.ScrollStrategyOptions(inst29, inst30, null, 12)
        inst32 = new overlay_container.OverlayContainer(12)
        inst33 = new component_factory_resolver.ComponentFactoryResolver()
        inst34 = new overlay_position_builder.OverlayPositionBuilder(null, 987650, undefined, undefined)
        inst35 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(987650)
        object4 = [{ provide: false, multi: true, useExisting: "9876" }, { provide: false, multi: true, useExisting: "c466a48309794261b64a4f02cfcc3d64" }]
        inst36 = new directionality.Directionality(12345)
        inst37 = new overlay.Overlay(inst31, inst32, inst33, inst34, inst35, core.Injector.create(object4,undefined), null, "a1969970175", inst36, undefined)
        inst38 = new live_announcer.LiveAnnouncer("a1969970175", null, 12)
        inst39 = new media_matcher.MediaMatcher(null)
        inst40 = new breakpoints_observer.BreakpointObserver(inst39, null)
        inst41 = new material.MatSnackBarConfig()
        inst42 = new material.MatSnackBar(inst37, inst38, null, inst40, null, inst41)
        inst43 = new translate_store.TranslateStore()
        inst44 = new translate_loader.TranslateLoader()
        inst45 = new translate_compiler.TranslateCompiler()
        inst46 = new translate_parser.TranslateParser()
        inst47 = new missing_translation_handler.MissingTranslationHandler()
        inst48 = new core.TranslateService(inst43, inst44, inst45, inst46, inst47, false, true)
        inst49 = new home_component.HomeComponent(inst4, inst12, inst15, inst16, inst23, inst26, inst42, inst48)
    })

    test("0", () => {
        let result: any = inst49.login()
        expect(result).toMatchSnapshot()
    })
})
