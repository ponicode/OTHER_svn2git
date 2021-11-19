import * as language_helper from "app/core/language/language.helper"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"
import * as platform_browser from "@angular/platform-browser"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"

// @ponicode
describe("updateTitle", () => {
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
    let object: any
    let inst13: any
    let inst14: any
    let object2: any
    let inst15: any
    let inst16: any

    beforeEach(() => {
        inst = new translate_store.TranslateStore()
        inst2 = new translate_loader.TranslateLoader()
        inst3 = new translate_compiler.TranslateCompiler()
        inst4 = new translate_parser.TranslateParser()
        inst5 = new missing_translation_handler.MissingTranslationHandler()
        inst6 = new core.TranslateService(inst, inst2, inst3, inst4, inst5, true, true)
        inst7 = new core.RendererFactory2()
        inst8 = new platform_browser.Title("bc23a9d531064583ace8f67dad60f6bb")
        inst9 = new url_tree.UrlSerializer()
        inst10 = new router_outlet_context.ChildrenOutletContexts()
        inst11 = new location_strategy.LocationStrategy()
        inst12 = new location.Location(inst11)
        object = [{ provide: false, multi: undefined, useValue: false }, null, null, null, null]
        inst13 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst14 = new compiler.Compiler()
        object2 = [{ path: "C:\\\\path\\to\\file.ext", pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: undefined }, { path: "/path/to/file", pathMatch: ".", matcher: undefined, component: undefined, redirectTo: undefined, outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: "pathParamsChange" }, null, null, null]
        inst15 = new router.Router(null, inst9, inst10, inst12, core.Injector.create({ providers: object, parent: undefined, name: "Michael" }), inst13, inst14, object2)
        inst16 = new language_helper.JhiLanguageHelper(inst6, inst7, inst8, inst15)
    })

    test("0", () => {
        let result: any = inst16.updateTitle(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst16.updateTitle("Customer Metrics Consultant")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst16.updateTitle("Product Accountability Executive")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst16.updateTitle("")
        expect(result).toMatchSnapshot()
    })
})
