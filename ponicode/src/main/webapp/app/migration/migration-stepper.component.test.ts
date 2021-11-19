import * as migration_stepper_component from "app/migration/migration-stepper.component"
import * as forms from "@angular/forms"
import * as migration_process_service from "app/migration/migration-process.service"
import * as http from "@angular/common/http"
import * as migration_service from "app/entities/migration/migration.service"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as material from "@angular/material"
import * as overlay from "@angular/cdk/overlay/typings/overlay"
import * as scroll_strategy_options from "@angular/cdk/overlay/typings/scroll/scroll-strategy-options"
import * as scroll_dispatcher from "@angular/cdk/scrolling/typings/scroll-dispatcher"
import * as ng_zone from "@angular/core/src/zone/ng_zone"
import * as platform from "@angular/cdk/platform/typings/platform"
import * as viewport_ruler from "@angular/cdk/scrolling/typings/viewport-ruler"
import * as overlay_container from "@angular/cdk/overlay/typings/overlay-container"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as overlay_position_builder from "@angular/cdk/overlay/typings/position/overlay-position-builder"
import * as overlay_keyboard_dispatcher from "@angular/cdk/overlay/typings/keyboard/overlay-keyboard-dispatcher"
import * as core from "@angular/core"
import * as directionality from "@angular/cdk/bidi/typings/directionality"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as dialog_config from "@angular/material/dialog/typings/dialog-config"
import * as live_announcer from "@angular/cdk/a11y/typings/live-announcer/live-announcer"
import * as breakpoints_observer from "@angular/cdk/layout/typings/breakpoints-observer"
import * as media_matcher from "@angular/cdk/layout/typings/media-matcher"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"
import * as configuration_service from "app/shared/service/configuration-service"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"

import * as migration_model from "app/shared/model/migration.model"
describe("getGitlabUser", () => {
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
    let object: any
    let inst21: any
    let inst22: any
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
    let inst36: any
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let inst59: any
    let inst60: any
    let object3: any
    let inst61: any
    let inst62: any
    let object4: any
    let inst63: any
    let inst64: any
    let inst65: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new viewport_ruler.ViewportRuler(null, null)
        inst15 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst14, null, 987650)
        inst16 = new overlay_container.OverlayContainer("a1969970175")
        inst17 = new component_factory_resolver.ComponentFactoryResolver()
        inst18 = new viewport_ruler.ViewportRuler(null, null)
        inst19 = new overlay_position_builder.OverlayPositionBuilder(inst18, 12345, undefined, undefined)
        inst20 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(56784)
        object = [{ provide: false, multi: true, useValue: false }, null, null]
        inst21 = new directionality.Directionality(987650)
        inst22 = new overlay.Overlay(inst15, inst16, inst17, inst19, inst20, core.Injector.create(object,undefined), null, "a1969970175", inst21, undefined)
        inst23 = new location_strategy.LocationStrategy()
        inst24 = new location.Location(inst23)
        inst25 = new dialog_config.MatDialogConfig()
        inst26 = new material.MatDialog(inst22, null, inst24, inst25, 56784, null, null)
        inst27 = new core.ChangeDetectorRef()
        inst28 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst29 = new platform.Platform(undefined)
        inst30 = new scroll_dispatcher.ScrollDispatcher(inst28, inst29)
        inst31 = new viewport_ruler.ViewportRuler(null, null)
        inst32 = new scroll_strategy_options.ScrollStrategyOptions(inst30, inst31, null, "a1969970175")
        inst33 = new overlay_container.OverlayContainer("bc23a9d531064583ace8f67dad60f6bb")
        inst34 = new component_factory_resolver.ComponentFactoryResolver()
        inst35 = new overlay_position_builder.OverlayPositionBuilder(null, 56784, undefined, undefined)
        inst36 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher("bc23a9d531064583ace8f67dad60f6bb")
        object2 = { 0: { provide: false, multi: false, useFactory: () => "Software Engineer", deps: undefined }, 1: null, 2: null, 3: { provide: false, multi: undefined, useExisting: "bc23a9d531064583ace8f67dad60f6bb" }, 4: null }
        inst37 = new directionality.Directionality(12345)
        inst38 = new overlay.Overlay(inst32, inst33, inst34, inst35, inst36, core.Injector.create(object2,undefined), null, 56784, inst37, undefined)
        inst39 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst40 = new live_announcer.LiveAnnouncer("bc23a9d531064583ace8f67dad60f6bb", inst39, "a1969970175")
        inst41 = new media_matcher.MediaMatcher(null)
        inst42 = new breakpoints_observer.BreakpointObserver(inst41, null)
        inst43 = new material.MatSnackBarConfig()
        inst44 = new material.MatSnackBar(inst38, inst40, null, inst42, null, inst43)
        inst45 = new translate_store.TranslateStore()
        inst46 = new translate_loader.TranslateLoader()
        inst47 = new translate_compiler.TranslateCompiler()
        inst48 = new translate_parser.TranslateParser()
        inst49 = new missing_translation_handler.MissingTranslationHandler()
        inst50 = new core.TranslateService(inst45, inst46, inst47, inst48, inst49, false, false)
        inst51 = new http.HttpHandler()
        inst52 = new http.HttpClient(inst51)
        inst53 = new static_extension_service.StaticExtensionService(inst52)
        inst54 = new http.HttpHandler()
        inst55 = new http.HttpClient(inst54)
        inst56 = new configuration_service.ConfigurationService(inst55)
        inst57 = new url_tree.UrlSerializer()
        inst58 = new router_outlet_context.ChildrenOutletContexts()
        inst59 = new location_strategy.LocationStrategy()
        inst60 = new location.Location(inst59)
        object3 = [{ provide: false, multi: false, useValue: false }, null, null]
        inst61 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst62 = new compiler.Compiler()
        object4 = [{ path: ".", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "always" }]
        inst63 = new router.Router(null, inst57, inst58, inst60, core.Injector.create(object3,undefined), inst61, inst62, object4)
        inst64 = new router.ActivatedRoute()
        inst65 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst26, inst27, inst44, inst50, inst53, inst56, inst63, inst64)
    })

    test("0", () => {
        let result: any = inst65.getGitlabUser()
        expect(result).toMatchSnapshot()
    })
})

describe("renameModule", () => {
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
    let object: any
    let inst21: any
    let inst22: any
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
    let inst36: any
    let inst37: any
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let inst59: any
    let inst60: any
    let inst61: any
    let object3: any
    let inst62: any
    let inst63: any
    let object4: any
    let inst64: any
    let inst65: any
    let inst66: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new viewport_ruler.ViewportRuler(null, null)
        inst15 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst16 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst14, inst15, 12345)
        inst17 = new overlay_container.OverlayContainer(987650)
        inst18 = new component_factory_resolver.ComponentFactoryResolver()
        inst19 = new overlay_position_builder.OverlayPositionBuilder(null, "bc23a9d531064583ace8f67dad60f6bb", undefined, undefined)
        inst20 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(12345)
        object = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]"], null, null, null]
        inst21 = new directionality.Directionality(12)
        inst22 = new overlay.Overlay(inst16, inst17, inst18, inst19, inst20, core.Injector.create(object,undefined), null, 56784, inst21, undefined)
        inst23 = new location_strategy.LocationStrategy()
        inst24 = new location.Location(inst23)
        inst25 = new dialog_config.MatDialogConfig()
        inst26 = new material.MatDialog(inst22, null, inst24, inst25, 12, null, null)
        inst27 = new core.ChangeDetectorRef()
        inst28 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst29 = new platform.Platform(undefined)
        inst30 = new scroll_dispatcher.ScrollDispatcher(inst28, inst29)
        inst31 = new viewport_ruler.ViewportRuler(null, null)
        inst32 = new scroll_strategy_options.ScrollStrategyOptions(inst30, inst31, null, 56784)
        inst33 = new overlay_container.OverlayContainer(12345)
        inst34 = new component_factory_resolver.ComponentFactoryResolver()
        inst35 = new viewport_ruler.ViewportRuler(null, null)
        inst36 = new overlay_position_builder.OverlayPositionBuilder(inst35, 987650, undefined, undefined)
        inst37 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher("a1969970175")
        object2 = [{ provide: true, multi: false, useExisting: "da7588892" }, null, null]
        inst38 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst39 = new directionality.Directionality(56784)
        inst40 = new overlay.Overlay(inst32, inst33, inst34, inst36, inst37, core.Injector.create({ providers: object2, parent: undefined, name: undefined }), inst38, 987650, inst39, undefined)
        inst41 = new live_announcer.LiveAnnouncer(12, null, 12345)
        inst42 = new media_matcher.MediaMatcher(null)
        inst43 = new breakpoints_observer.BreakpointObserver(inst42, null)
        inst44 = new material.MatSnackBarConfig()
        inst45 = new material.MatSnackBar(inst40, inst41, null, inst43, null, inst44)
        inst46 = new translate_store.TranslateStore()
        inst47 = new translate_loader.TranslateLoader()
        inst48 = new translate_compiler.TranslateCompiler()
        inst49 = new translate_parser.TranslateParser()
        inst50 = new missing_translation_handler.MissingTranslationHandler()
        inst51 = new core.TranslateService(inst46, inst47, inst48, inst49, inst50, false, undefined)
        inst52 = new http.HttpHandler()
        inst53 = new http.HttpClient(inst52)
        inst54 = new static_extension_service.StaticExtensionService(inst53)
        inst55 = new http.HttpHandler()
        inst56 = new http.HttpClient(inst55)
        inst57 = new configuration_service.ConfigurationService(inst56)
        inst58 = new url_tree.UrlSerializer()
        inst59 = new router_outlet_context.ChildrenOutletContexts()
        inst60 = new location_strategy.LocationStrategy()
        inst61 = new location.Location(inst60)
        object3 = { 0: { provide: false, multi: true, useFactory: () => "Data Scientist", deps: undefined } }
        inst62 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst63 = new compiler.Compiler()
        object4 = [{ path: "path/to/folder/", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "http://www.example.com/route/123?foo=bar", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }, null, null, null]
        inst64 = new router.Router(null, inst58, inst59, inst61, core.Injector.create({ providers: object3, parent: undefined, name: "Pierre Edouard" }), inst62, inst63, object4)
        inst65 = new router.ActivatedRoute()
        inst66 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst26, inst27, inst45, inst51, inst54, inst57, inst64, inst65)
    })

    test("0", () => {
        let param1: any = new migration_model.MigrationRenaming("Becky Bednar", "Gail Hoppe")
        let result: any = inst66.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_model.MigrationRenaming("Maurice Purdy", "Janet Homenick")
        let result: any = inst66.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_model.MigrationRenaming("Gail Hoppe", "Gail Hoppe")
        let result: any = inst66.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_model.MigrationRenaming("Ronald Keeling", "Maurice Purdy")
        let result: any = inst66.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_model.MigrationRenaming("Ronald Keeling", "Ronald Keeling")
        let result: any = inst66.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_model.MigrationRenaming("", "")
        let result: any = inst66.renameModule(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("isRealMappingRow", () => {
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
    let object: any
    let inst21: any
    let inst22: any
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
    let inst36: any
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let inst59: any
    let inst60: any
    let object3: any
    let inst61: any
    let inst62: any
    let object4: any
    let inst63: any
    let inst64: any
    let inst65: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new platform.Platform(undefined)
        inst15 = new viewport_ruler.ViewportRuler(inst14, null)
        inst16 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst15, null, 12)
        inst17 = new overlay_container.OverlayContainer("a1969970175")
        inst18 = new component_factory_resolver.ComponentFactoryResolver()
        inst19 = new overlay_position_builder.OverlayPositionBuilder(null, 12, undefined, undefined)
        inst20 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher("a1969970175")
        object = [{ provide: true, multi: undefined, useExisting: "c466a48309794261b64a4f02cfcc3d64" }, ["Marketing", "Data Scientist", "Marketing", "Data Scientist"]]
        inst21 = new directionality.Directionality(987650)
        inst22 = new overlay.Overlay(inst16, inst17, inst18, inst19, inst20, core.Injector.create({ providers: object, parent: undefined, name: "Michael" }), null, 12345, inst21, undefined)
        inst23 = new location_strategy.LocationStrategy()
        inst24 = new location.Location(inst23)
        inst25 = new dialog_config.MatDialogConfig()
        inst26 = new material.MatDialog(inst22, null, inst24, inst25, 12345, null, null)
        inst27 = new core.ChangeDetectorRef()
        inst28 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst29 = new platform.Platform(undefined)
        inst30 = new scroll_dispatcher.ScrollDispatcher(inst28, inst29)
        inst31 = new viewport_ruler.ViewportRuler(null, null)
        inst32 = new scroll_strategy_options.ScrollStrategyOptions(inst30, inst31, null, 56784)
        inst33 = new overlay_container.OverlayContainer("a1969970175")
        inst34 = new component_factory_resolver.ComponentFactoryResolver()
        inst35 = new overlay_position_builder.OverlayPositionBuilder(null, "a1969970175", undefined, undefined)
        inst36 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(987650)
        object2 = [{ provide: false, multi: false, useValue: true }, null]
        inst37 = new directionality.Directionality(56784)
        inst38 = new overlay.Overlay(inst32, inst33, inst34, inst35, inst36, core.Injector.create({ providers: object2, parent: undefined, name: "Edmond" }), null, "a1969970175", inst37, undefined)
        inst39 = new ng_zone.NgZone({ enableLongStackTrace: undefined })
        inst40 = new live_announcer.LiveAnnouncer(12, inst39, 56784)
        inst41 = new media_matcher.MediaMatcher(null)
        inst42 = new breakpoints_observer.BreakpointObserver(inst41, null)
        inst43 = new material.MatSnackBarConfig()
        inst44 = new material.MatSnackBar(inst38, inst40, null, inst42, null, inst43)
        inst45 = new translate_store.TranslateStore()
        inst46 = new translate_loader.TranslateLoader()
        inst47 = new translate_compiler.TranslateCompiler()
        inst48 = new translate_parser.TranslateParser()
        inst49 = new missing_translation_handler.MissingTranslationHandler()
        inst50 = new core.TranslateService(inst45, inst46, inst47, inst48, inst49, true, true)
        inst51 = new http.HttpHandler()
        inst52 = new http.HttpClient(inst51)
        inst53 = new static_extension_service.StaticExtensionService(inst52)
        inst54 = new http.HttpHandler()
        inst55 = new http.HttpClient(inst54)
        inst56 = new configuration_service.ConfigurationService(inst55)
        inst57 = new url_tree.UrlSerializer()
        inst58 = new router_outlet_context.ChildrenOutletContexts()
        inst59 = new location_strategy.LocationStrategy()
        inst60 = new location.Location(inst59)
        object3 = [["[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]", "[10, -45.9, 103.5, 0.955674]"], null, null]
        inst61 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst62 = new compiler.Compiler()
        object4 = [{ path: undefined, pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: undefined, redirectTo: "http://www.croplands.org/account/confirm?t=", outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "pathParamsChange" }, null, null, null, null]
        inst63 = new router.Router(null, inst57, inst58, inst60, core.Injector.create(object3,undefined), inst61, inst62, object4)
        inst64 = new router.ActivatedRoute()
        inst65 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst26, inst27, inst44, inst50, inst53, inst56, inst63, inst64)
    })

    test("0", () => {
        let result: any = inst65.isRealMappingRow({ id: -5.48, svnDirectory: "", regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: "/usr/ports", migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst65.isRealMappingRow({ id: 100, svnDirectory: "", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", gitDirectory: "/opt/share", migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst65.isRealMappingRow({ id: 0, svnDirectory: "", regex: "(?:non-capturing)", gitDirectory: "/usr/share", migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst65.isRealMappingRow({ id: undefined, svnDirectory: "", regex: "(?:non-capturing)", gitDirectory: "/usr/ports", migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst65.isRealMappingRow({ id: undefined, svnDirectory: "", regex: "(?:non-capturing)", gitDirectory: "/selinux", migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst65.isRealMappingRow({ id: Infinity, svnDirectory: "", regex: "", gitDirectory: undefined, migration: Infinity, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })
})

describe("toggleMappingEntryType", () => {
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
    let inst22: any
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
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let inst59: any
    let object3: any
    let inst60: any
    let inst61: any
    let object4: any
    let inst62: any
    let inst63: any
    let inst64: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new viewport_ruler.ViewportRuler(null, null)
        inst15 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst14, null, 12345)
        inst16 = new overlay_container.OverlayContainer("bc23a9d531064583ace8f67dad60f6bb")
        inst17 = new component_factory_resolver.ComponentFactoryResolver()
        inst18 = new overlay_position_builder.OverlayPositionBuilder(null, 12, undefined, undefined)
        inst19 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher("bc23a9d531064583ace8f67dad60f6bb")
        object = [["Software Engineer", "Data Scientist", "Data Scientist"], null, null, null, null]
        inst20 = new directionality.Directionality("bc23a9d531064583ace8f67dad60f6bb")
        inst21 = new overlay.Overlay(inst15, inst16, inst17, inst18, inst19, core.Injector.create({ providers: object, parent: undefined, name: undefined }), null, 12, inst20, undefined)
        inst22 = new location_strategy.LocationStrategy()
        inst23 = new location.Location(inst22)
        inst24 = new dialog_config.MatDialogConfig()
        inst25 = new material.MatDialog(inst21, null, inst23, inst24, "bc23a9d531064583ace8f67dad60f6bb", null, null)
        inst26 = new core.ChangeDetectorRef()
        inst27 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst28 = new platform.Platform(undefined)
        inst29 = new scroll_dispatcher.ScrollDispatcher(inst27, inst28)
        inst30 = new viewport_ruler.ViewportRuler(null, null)
        inst31 = new scroll_strategy_options.ScrollStrategyOptions(inst29, inst30, null, "bc23a9d531064583ace8f67dad60f6bb")
        inst32 = new overlay_container.OverlayContainer(56784)
        inst33 = new component_factory_resolver.ComponentFactoryResolver()
        inst34 = new overlay_position_builder.OverlayPositionBuilder(null, 12, undefined, undefined)
        inst35 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(56784)
        object2 = [{ provide: false, multi: false, useValue: true }, null, null, null]
        inst36 = new directionality.Directionality(12)
        inst37 = new overlay.Overlay(inst31, inst32, inst33, inst34, inst35, core.Injector.create(object2,undefined), null, 12, inst36, undefined)
        inst38 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst39 = new live_announcer.LiveAnnouncer(987650, inst38, 987650)
        inst40 = new media_matcher.MediaMatcher(null)
        inst41 = new breakpoints_observer.BreakpointObserver(inst40, null)
        inst42 = new material.MatSnackBarConfig()
        inst43 = new material.MatSnackBar(inst37, inst39, null, inst41, null, inst42)
        inst44 = new translate_store.TranslateStore()
        inst45 = new translate_loader.TranslateLoader()
        inst46 = new translate_compiler.TranslateCompiler()
        inst47 = new translate_parser.TranslateParser()
        inst48 = new missing_translation_handler.MissingTranslationHandler()
        inst49 = new core.TranslateService(inst44, inst45, inst46, inst47, inst48, undefined, false)
        inst50 = new http.HttpHandler()
        inst51 = new http.HttpClient(inst50)
        inst52 = new static_extension_service.StaticExtensionService(inst51)
        inst53 = new http.HttpHandler()
        inst54 = new http.HttpClient(inst53)
        inst55 = new configuration_service.ConfigurationService(inst54)
        inst56 = new url_tree.UrlSerializer()
        inst57 = new router_outlet_context.ChildrenOutletContexts()
        inst58 = new location_strategy.LocationStrategy()
        inst59 = new location.Location(inst58)
        object3 = { 0: { provide: false, multi: false, useFactory: () => "Chief Product Officer", deps: undefined }, 1: null }
        inst60 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst61 = new compiler.Compiler()
        object4 = [{ path: undefined, pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: undefined, redirectTo: "https://croplands.org/app/a/reset?token=", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "pathParamsOrQueryParamsChange" }, null]
        inst62 = new router.Router(null, inst56, inst57, inst59, core.Injector.create(object3,undefined), inst60, inst61, object4)
        inst63 = new router.ActivatedRoute()
        inst64 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst25, inst26, inst43, inst49, inst52, inst55, inst62, inst63)
    })

    test("0", () => {
        let result: any = inst64.toggleMappingEntryType({ id: 0, svnDirectory: "4.0.0-beta1\t", regex: "definition-checksum\\s(?P<checksum>\\w+)", gitDirectory: undefined, migration: 75, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst64.toggleMappingEntryType({ id: 0, svnDirectory: "1.0.0", regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: undefined, migration: 18, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst64.toggleMappingEntryType({ id: undefined, svnDirectory: "4.0.0-beta1\t", regex: undefined, gitDirectory: "/usr/sbin", migration: 75, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst64.toggleMappingEntryType({ id: 100, svnDirectory: undefined, regex: "min\\s+\\d+\\s+of", gitDirectory: "/usr/share", migration: undefined, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst64.toggleMappingEntryType({ id: 1, svnDirectory: undefined, regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: "/usr/sbin", migration: undefined, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst64.toggleMappingEntryType({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: "", migration: Infinity, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

describe("reverseGitlab", () => {
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
    let object: any
    let inst21: any
    let inst22: any
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
    let inst36: any
    let inst37: any
    let inst38: any
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let inst59: any
    let inst60: any
    let inst61: any
    let inst62: any
    let inst63: any
    let object3: any
    let inst64: any
    let inst65: any
    let object4: any
    let inst66: any
    let inst67: any
    let inst68: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new platform.Platform(undefined)
        inst15 = new viewport_ruler.ViewportRuler(inst14, null)
        inst16 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst15, null, "bc23a9d531064583ace8f67dad60f6bb")
        inst17 = new overlay_container.OverlayContainer("a1969970175")
        inst18 = new component_factory_resolver.ComponentFactoryResolver()
        inst19 = new overlay_position_builder.OverlayPositionBuilder(null, 987650, undefined, undefined)
        inst20 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(56784)
        object = [["Marketing"], null, null]
        inst21 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst22 = new directionality.Directionality("a1969970175")
        inst23 = new overlay.Overlay(inst16, inst17, inst18, inst19, inst20, core.Injector.create({ providers: object, parent: undefined, name: undefined }), inst21, 12345, inst22, undefined)
        inst24 = new location_strategy.LocationStrategy()
        inst25 = new location.Location(inst24)
        inst26 = new dialog_config.MatDialogConfig()
        inst27 = new material.MatDialog(inst23, null, inst25, inst26, "bc23a9d531064583ace8f67dad60f6bb", null, null)
        inst28 = new core.ChangeDetectorRef()
        inst29 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst30 = new platform.Platform(undefined)
        inst31 = new scroll_dispatcher.ScrollDispatcher(inst29, inst30)
        inst32 = new viewport_ruler.ViewportRuler(null, null)
        inst33 = new scroll_strategy_options.ScrollStrategyOptions(inst31, inst32, null, 56784)
        inst34 = new overlay_container.OverlayContainer("bc23a9d531064583ace8f67dad60f6bb")
        inst35 = new component_factory_resolver.ComponentFactoryResolver()
        inst36 = new viewport_ruler.ViewportRuler(null, null)
        inst37 = new overlay_position_builder.OverlayPositionBuilder(inst36, 12345, undefined, undefined)
        inst38 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher("bc23a9d531064583ace8f67dad60f6bb")
        object2 = [{ provide: false, multi: undefined, useExisting: "bc23a9d531064583ace8f67dad60f6bb" }, null, null, null, null]
        inst39 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst40 = new directionality.Directionality("bc23a9d531064583ace8f67dad60f6bb")
        inst41 = new overlay.Overlay(inst33, inst34, inst35, inst37, inst38, core.Injector.create({ providers: object2, parent: undefined, name: "Jean-Philippe" }), inst39, 12, inst40, undefined)
        inst42 = new live_announcer.LiveAnnouncer(12, null, 56784)
        inst43 = new media_matcher.MediaMatcher(null)
        inst44 = new breakpoints_observer.BreakpointObserver(inst43, null)
        inst45 = new material.MatSnackBarConfig()
        inst46 = new material.MatSnackBar(null, null, null, null, null, inst45)
        inst47 = new material.MatSnackBar(inst41, inst42, null, inst44, inst46, null)
        inst48 = new translate_store.TranslateStore()
        inst49 = new translate_loader.TranslateLoader()
        inst50 = new translate_compiler.TranslateCompiler()
        inst51 = new translate_parser.TranslateParser()
        inst52 = new missing_translation_handler.MissingTranslationHandler()
        inst53 = new core.TranslateService(inst48, inst49, inst50, inst51, inst52, undefined, true)
        inst54 = new http.HttpHandler()
        inst55 = new http.HttpClient(inst54)
        inst56 = new static_extension_service.StaticExtensionService(inst55)
        inst57 = new http.HttpHandler()
        inst58 = new http.HttpClient(inst57)
        inst59 = new configuration_service.ConfigurationService(inst58)
        inst60 = new url_tree.UrlSerializer()
        inst61 = new router_outlet_context.ChildrenOutletContexts()
        inst62 = new location_strategy.LocationStrategy()
        inst63 = new location.Location(inst62)
        object3 = [{ provide: true, multi: undefined, useValue: true }, null, null]
        inst64 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst65 = new compiler.Compiler()
        object4 = [{ path: undefined, pathMatch: "path/to/file.ext", matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }, null, null]
        inst66 = new router.Router(null, inst60, inst61, inst63, core.Injector.create(object3,undefined), inst64, inst65, object4)
        inst67 = new router.ActivatedRoute()
        inst68 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst27, inst28, inst47, inst53, inst56, inst59, inst66, inst67)
    })

    test("0", () => {
        let result: any = inst68.reverseGitlab()
        expect(result).toMatchSnapshot()
    })
})

describe("getSvnRepoKo", () => {
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
    let inst22: any
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
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let inst59: any
    let object3: any
    let inst60: any
    let inst61: any
    let object4: any
    let inst62: any
    let inst63: any
    let inst64: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new viewport_ruler.ViewportRuler(null, null)
        inst15 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst14, null, 12)
        inst16 = new overlay_container.OverlayContainer("a1969970175")
        inst17 = new component_factory_resolver.ComponentFactoryResolver()
        inst18 = new overlay_position_builder.OverlayPositionBuilder(null, 987650, undefined, undefined)
        inst19 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher("bc23a9d531064583ace8f67dad60f6bb")
        object = [{ provide: false, multi: true, useExisting: "c466a48309794261b64a4f02cfcc3d64" }, null]
        inst20 = new directionality.Directionality(56784)
        inst21 = new overlay.Overlay(inst15, inst16, inst17, inst18, inst19, core.Injector.create(object,undefined), null, 12, inst20, undefined)
        inst22 = new location_strategy.LocationStrategy()
        inst23 = new location.Location(inst22)
        inst24 = new dialog_config.MatDialogConfig()
        inst25 = new material.MatDialog(inst21, null, inst23, inst24, 56784, null, null)
        inst26 = new core.ChangeDetectorRef()
        inst27 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst28 = new platform.Platform(undefined)
        inst29 = new scroll_dispatcher.ScrollDispatcher(inst27, inst28)
        inst30 = new viewport_ruler.ViewportRuler(null, null)
        inst31 = new scroll_strategy_options.ScrollStrategyOptions(inst29, inst30, null, 12345)
        inst32 = new overlay_container.OverlayContainer(987650)
        inst33 = new component_factory_resolver.ComponentFactoryResolver()
        inst34 = new overlay_position_builder.OverlayPositionBuilder(null, "a1969970175", undefined, undefined)
        inst35 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(12)
        object2 = [["[10, -45.9, 103.5, 0.955674]", "[\"a\", \"b\", \"043\", \"holasenior\"]", "[10, -45.9, 103.5, 0.955674]"]]
        inst36 = new directionality.Directionality("bc23a9d531064583ace8f67dad60f6bb")
        inst37 = new overlay.Overlay(inst31, inst32, inst33, inst34, inst35, core.Injector.create(object2,undefined), null, "a1969970175", inst36, undefined)
        inst38 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst39 = new live_announcer.LiveAnnouncer(12, inst38, "a1969970175")
        inst40 = new media_matcher.MediaMatcher(null)
        inst41 = new breakpoints_observer.BreakpointObserver(inst40, null)
        inst42 = new material.MatSnackBarConfig()
        inst43 = new material.MatSnackBar(inst37, inst39, null, inst41, null, inst42)
        inst44 = new translate_store.TranslateStore()
        inst45 = new translate_loader.TranslateLoader()
        inst46 = new translate_compiler.TranslateCompiler()
        inst47 = new translate_parser.TranslateParser()
        inst48 = new missing_translation_handler.MissingTranslationHandler()
        inst49 = new core.TranslateService(inst44, inst45, inst46, inst47, inst48, true, false)
        inst50 = new http.HttpHandler()
        inst51 = new http.HttpClient(inst50)
        inst52 = new static_extension_service.StaticExtensionService(inst51)
        inst53 = new http.HttpHandler()
        inst54 = new http.HttpClient(inst53)
        inst55 = new configuration_service.ConfigurationService(inst54)
        inst56 = new url_tree.UrlSerializer()
        inst57 = new router_outlet_context.ChildrenOutletContexts()
        inst58 = new location_strategy.LocationStrategy()
        inst59 = new location.Location(inst58)
        object3 = [{ provide: false, multi: true, useValue: false }]
        inst60 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst61 = new compiler.Compiler()
        object4 = [{ path: undefined, pathMatch: ".", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "pathParamsChange" }, null, null, null, null]
        inst62 = new router.Router(null, inst56, inst57, inst59, core.Injector.create({ providers: object3, parent: undefined, name: undefined }), inst60, inst61, object4)
        inst63 = new router.ActivatedRoute()
        inst64 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst25, inst26, inst43, inst49, inst52, inst55, inst62, inst63)
    })

    test("0", () => {
        let result: any = inst64.getSvnRepoKo()
        expect(result).toMatchSnapshot()
    })
})

describe("addMapping", () => {
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
    let inst22: any
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
    let inst36: any
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let inst59: any
    let inst60: any
    let object3: any
    let inst61: any
    let inst62: any
    let object4: any
    let inst63: any
    let inst64: any
    let inst65: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new viewport_ruler.ViewportRuler(null, null)
        inst15 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst14, null, 56784)
        inst16 = new overlay_container.OverlayContainer(12)
        inst17 = new component_factory_resolver.ComponentFactoryResolver()
        inst18 = new overlay_position_builder.OverlayPositionBuilder(null, "bc23a9d531064583ace8f67dad60f6bb", undefined, undefined)
        inst19 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(987650)
        object = { 0: { provide: false, multi: true, useFactory: () => "Chief Product Officer", deps: undefined }, 1: null }
        inst20 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst21 = new directionality.Directionality("bc23a9d531064583ace8f67dad60f6bb")
        inst22 = new overlay.Overlay(inst15, inst16, inst17, inst18, inst19, core.Injector.create(object,undefined), inst20, "a1969970175", inst21, undefined)
        inst23 = new location_strategy.LocationStrategy()
        inst24 = new location.Location(inst23)
        inst25 = new dialog_config.MatDialogConfig()
        inst26 = new material.MatDialog(inst22, null, inst24, inst25, "bc23a9d531064583ace8f67dad60f6bb", null, null)
        inst27 = new core.ChangeDetectorRef()
        inst28 = new ng_zone.NgZone({ enableLongStackTrace: undefined })
        inst29 = new platform.Platform(undefined)
        inst30 = new scroll_dispatcher.ScrollDispatcher(inst28, inst29)
        inst31 = new viewport_ruler.ViewportRuler(null, null)
        inst32 = new scroll_strategy_options.ScrollStrategyOptions(inst30, inst31, null, 12345)
        inst33 = new overlay_container.OverlayContainer("bc23a9d531064583ace8f67dad60f6bb")
        inst34 = new component_factory_resolver.ComponentFactoryResolver()
        inst35 = new overlay_position_builder.OverlayPositionBuilder(null, "a1969970175", undefined, undefined)
        inst36 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(56784)
        object2 = [["Sales", "Marketing"], null, null, null]
        inst37 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst38 = new directionality.Directionality("bc23a9d531064583ace8f67dad60f6bb")
        inst39 = new overlay.Overlay(inst32, inst33, inst34, inst35, inst36, core.Injector.create({ providers: object2, parent: undefined, name: "Anas" }), inst37, 12, inst38, undefined)
        inst40 = new live_announcer.LiveAnnouncer(987650, null, 12345)
        inst41 = new media_matcher.MediaMatcher(null)
        inst42 = new breakpoints_observer.BreakpointObserver(inst41, null)
        inst43 = new material.MatSnackBarConfig()
        inst44 = new material.MatSnackBar(inst39, inst40, null, inst42, null, inst43)
        inst45 = new translate_store.TranslateStore()
        inst46 = new translate_loader.TranslateLoader()
        inst47 = new translate_compiler.TranslateCompiler()
        inst48 = new translate_parser.TranslateParser()
        inst49 = new missing_translation_handler.MissingTranslationHandler()
        inst50 = new core.TranslateService(inst45, inst46, inst47, inst48, inst49, false, undefined)
        inst51 = new http.HttpHandler()
        inst52 = new http.HttpClient(inst51)
        inst53 = new static_extension_service.StaticExtensionService(inst52)
        inst54 = new http.HttpHandler()
        inst55 = new http.HttpClient(inst54)
        inst56 = new configuration_service.ConfigurationService(inst55)
        inst57 = new url_tree.UrlSerializer()
        inst58 = new router_outlet_context.ChildrenOutletContexts()
        inst59 = new location_strategy.LocationStrategy()
        inst60 = new location.Location(inst59)
        object3 = { 0: { provide: false, multi: false, useFactory: () => "Software Engineer", deps: undefined }, 1: null, 2: { provide: false, multi: false, useExisting: "12345" } }
        inst61 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst62 = new compiler.Compiler()
        object4 = [{ path: "./path/to/file", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }, null, null]
        inst63 = new router.Router(null, inst57, inst58, inst60, core.Injector.create(object3,undefined), inst61, inst62, object4)
        inst64 = new router.ActivatedRoute()
        inst65 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst26, inst27, inst44, inst50, inst53, inst56, inst63, inst64)
    })

    test("0", () => {
        let result: any = inst65.addMapping()
        expect(result).toMatchSnapshot()
    })
})

describe("containsFlatRepo", () => {
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
    let inst22: any
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
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let object3: any
    let inst59: any
    let inst60: any
    let object4: any
    let inst61: any
    let inst62: any
    let inst63: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new viewport_ruler.ViewportRuler(null, null)
        inst15 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst14, null, 987650)
        inst16 = new overlay_container.OverlayContainer("bc23a9d531064583ace8f67dad60f6bb")
        inst17 = new component_factory_resolver.ComponentFactoryResolver()
        inst18 = new overlay_position_builder.OverlayPositionBuilder(null, "a1969970175", undefined, undefined)
        inst19 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(987650)
        object = [{ provide: true, multi: true, useExisting: "9876" }, null]
        inst20 = new directionality.Directionality(12)
        inst21 = new overlay.Overlay(inst15, inst16, inst17, inst18, inst19, core.Injector.create(object,undefined), null, 12345, inst20, undefined)
        inst22 = new location_strategy.LocationStrategy()
        inst23 = new location.Location(inst22)
        inst24 = new dialog_config.MatDialogConfig()
        inst25 = new material.MatDialog(inst21, null, inst23, inst24, "a1969970175", null, null)
        inst26 = new core.ChangeDetectorRef()
        inst27 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst28 = new platform.Platform(undefined)
        inst29 = new scroll_dispatcher.ScrollDispatcher(inst27, inst28)
        inst30 = new viewport_ruler.ViewportRuler(null, null)
        inst31 = new scroll_strategy_options.ScrollStrategyOptions(inst29, inst30, null, 12345)
        inst32 = new overlay_container.OverlayContainer("bc23a9d531064583ace8f67dad60f6bb")
        inst33 = new component_factory_resolver.ComponentFactoryResolver()
        inst34 = new overlay_position_builder.OverlayPositionBuilder(null, 987650, undefined, undefined)
        inst35 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(987650)
        object2 = [{ provide: false, multi: undefined, useExisting: "c466a48309794261b64a4f02cfcc3d64" }]
        inst36 = new directionality.Directionality(12345)
        inst37 = new overlay.Overlay(inst31, inst32, inst33, inst34, inst35, core.Injector.create({ providers: object2, parent: undefined, name: "Anas" }), null, "bc23a9d531064583ace8f67dad60f6bb", inst36, undefined)
        inst38 = new live_announcer.LiveAnnouncer("bc23a9d531064583ace8f67dad60f6bb", null, 12)
        inst39 = new media_matcher.MediaMatcher(null)
        inst40 = new breakpoints_observer.BreakpointObserver(inst39, null)
        inst41 = new material.MatSnackBarConfig()
        inst42 = new material.MatSnackBar(inst37, inst38, core.Injector.create([],undefined), inst40, null, inst41)
        inst43 = new translate_store.TranslateStore()
        inst44 = new translate_loader.TranslateLoader()
        inst45 = new translate_compiler.TranslateCompiler()
        inst46 = new translate_parser.TranslateParser()
        inst47 = new missing_translation_handler.MissingTranslationHandler()
        inst48 = new core.TranslateService(inst43, inst44, inst45, inst46, inst47, false, false)
        inst49 = new http.HttpHandler()
        inst50 = new http.HttpClient(inst49)
        inst51 = new static_extension_service.StaticExtensionService(inst50)
        inst52 = new http.HttpHandler()
        inst53 = new http.HttpClient(inst52)
        inst54 = new configuration_service.ConfigurationService(inst53)
        inst55 = new url_tree.UrlSerializer()
        inst56 = new router_outlet_context.ChildrenOutletContexts()
        inst57 = new location_strategy.LocationStrategy()
        inst58 = new location.Location(inst57)
        object3 = [["Chief Product Officer", "Chief Product Officer", "Marketing"], null, null]
        inst59 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst60 = new compiler.Compiler()
        object4 = [{ path: "C:\\\\path\\to\\file.ext", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Awesome Frozen Computer", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "always" }, null, null, null]
        inst61 = new router.Router(null, inst55, inst56, inst58, core.Injector.create({ providers: object3, parent: undefined, name: "George" }), inst59, inst60, object4)
        inst62 = new router.ActivatedRoute()
        inst63 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst25, inst26, inst42, inst48, inst51, inst54, inst61, inst62)
    })

    test("0", () => {
        let result: any = inst63.containsFlatRepo()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("svnFontStyle", () => {
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
    let inst22: any
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
    let object2: any
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
    let inst51: any
    let inst52: any
    let inst53: any
    let inst54: any
    let inst55: any
    let inst56: any
    let inst57: any
    let inst58: any
    let object3: any
    let inst59: any
    let inst60: any
    let object4: any
    let inst61: any
    let inst62: any
    let inst63: any

    beforeEach(() => {
        inst = new forms.FormBuilder()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_process_service.MigrationProcessService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_service.MigrationService(inst6)
        inst8 = new http.HttpHandler()
        inst9 = new http.HttpClient(inst8)
        inst10 = new static_mapping_service.StaticMappingService(inst9)
        inst11 = new ng_zone.NgZone({ enableLongStackTrace: false })
        inst12 = new platform.Platform(undefined)
        inst13 = new scroll_dispatcher.ScrollDispatcher(inst11, inst12)
        inst14 = new viewport_ruler.ViewportRuler(null, null)
        inst15 = new scroll_strategy_options.ScrollStrategyOptions(inst13, inst14, null, 12)
        inst16 = new overlay_container.OverlayContainer(987650)
        inst17 = new component_factory_resolver.ComponentFactoryResolver()
        inst18 = new overlay_position_builder.OverlayPositionBuilder(null, "a1969970175", undefined, undefined)
        inst19 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(12345)
        object = { 0: { provide: true, multi: true, useFactory: () => "Marketing", deps: undefined }, 1: null, 2: null, 3: null, 4: null }
        inst20 = new directionality.Directionality(12345)
        inst21 = new overlay.Overlay(inst15, inst16, inst17, inst18, inst19, core.Injector.create({ providers: object, parent: undefined, name: "George" }), null, 56784, inst20, undefined)
        inst22 = new location_strategy.LocationStrategy()
        inst23 = new location.Location(inst22)
        inst24 = new dialog_config.MatDialogConfig()
        inst25 = new material.MatDialog(inst21, null, inst23, inst24, 56784, null, null)
        inst26 = new core.ChangeDetectorRef()
        inst27 = new ng_zone.NgZone({ enableLongStackTrace: true })
        inst28 = new platform.Platform(undefined)
        inst29 = new scroll_dispatcher.ScrollDispatcher(inst27, inst28)
        inst30 = new viewport_ruler.ViewportRuler(null, null)
        inst31 = new scroll_strategy_options.ScrollStrategyOptions(inst29, inst30, null, 12)
        inst32 = new overlay_container.OverlayContainer(56784)
        inst33 = new component_factory_resolver.ComponentFactoryResolver()
        inst34 = new overlay_position_builder.OverlayPositionBuilder(null, 987650, undefined, undefined)
        inst35 = new overlay_keyboard_dispatcher.OverlayKeyboardDispatcher(56784)
        object2 = [{ provide: true, multi: true, useExisting: "12345" }, null, null, null]
        inst36 = new directionality.Directionality(12345)
        inst37 = new overlay.Overlay(inst31, inst32, inst33, inst34, inst35, core.Injector.create({ providers: object2, parent: undefined, name: undefined }), null, 12345, inst36, undefined)
        inst38 = new live_announcer.LiveAnnouncer(12345, null, "bc23a9d531064583ace8f67dad60f6bb")
        inst39 = new media_matcher.MediaMatcher(null)
        inst40 = new breakpoints_observer.BreakpointObserver(inst39, null)
        inst41 = new material.MatSnackBarConfig()
        inst42 = new material.MatSnackBar(inst37, inst38, null, inst40, null, inst41)
        inst43 = new translate_store.TranslateStore()
        inst44 = new translate_loader.TranslateLoader()
        inst45 = new translate_compiler.TranslateCompiler()
        inst46 = new translate_parser.TranslateParser()
        inst47 = new missing_translation_handler.MissingTranslationHandler()
        inst48 = new core.TranslateService(inst43, inst44, inst45, inst46, inst47, undefined, true)
        inst49 = new http.HttpHandler()
        inst50 = new http.HttpClient(inst49)
        inst51 = new static_extension_service.StaticExtensionService(inst50)
        inst52 = new http.HttpHandler()
        inst53 = new http.HttpClient(inst52)
        inst54 = new configuration_service.ConfigurationService(inst53)
        inst55 = new url_tree.UrlSerializer()
        inst56 = new router_outlet_context.ChildrenOutletContexts()
        inst57 = new location_strategy.LocationStrategy()
        inst58 = new location.Location(inst57)
        object3 = [{ provide: false, multi: false, useExisting: "c466a48309794261b64a4f02cfcc3d64" }, null, null, null, null]
        inst59 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst60 = new compiler.Compiler()
        object4 = [{ path: "./path/to/file", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Handmade Fresh Chicken", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "paramsChange" }]
        inst61 = new router.Router(null, inst55, inst56, inst58, core.Injector.create(object3,undefined), inst59, inst60, object4)
        inst62 = new router.ActivatedRoute()
        inst63 = new migration_stepper_component.MigrationStepperComponent(inst, inst4, inst7, inst10, inst25, inst26, inst42, inst48, inst51, inst54, inst61, inst62)
    })

    test("0", () => {
        let param1: any = new migration_process_service.SvnModule(["Maurice Purdy", "Ronald Keeling", "Gail Hoppe", "Janet Homenick"], "Becky Bednar", "Ronald Keeling", [], false)
        let result: any = inst63.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_process_service.SvnModule(["Gail Hoppe"], "Gail Hoppe", "Gail Hoppe", [], true)
        let result: any = inst63.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_process_service.SvnModule(["Janet Homenick"], "Janet Homenick", "Ronald Keeling", [], false)
        let result: any = inst63.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_process_service.SvnModule(["Maurice Purdy", "Gail Hoppe", "Maurice Purdy", "Ronald Keeling"], "Ronald Keeling", "Janet Homenick", [], false)
        let result: any = inst63.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_process_service.SvnModule(["Becky Bednar", "Janet Homenick", "Janet Homenick", "Janet Homenick"], "Ronald Keeling", "Gail Hoppe", [], true)
        let result: any = inst63.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_process_service.SvnModule([], "", "", [], true)
        let result: any = inst63.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })
})
