import * as static_extension_component from "app/entities/static-extension/static-extension.component"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"
import * as http from "@angular/common/http"
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, false)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.loadAll()
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, false, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, true, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("trackId", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.trackId(100, { id: undefined, value: undefined, description: undefined, enabled: undefined, name: "Jean-Philippe" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.trackId(1, { id: undefined, value: undefined, description: undefined, enabled: undefined, name: "Jean-Philippe" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.trackId(-100, { id: undefined, value: undefined, description: undefined, enabled: undefined, name: "Michael" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.trackId(1, { id: -100, value: "Dillenberg", description: undefined, enabled: false, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.trackId(-100, { id: 0, value: "Elio", description: undefined, enabled: false, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.trackId(-Infinity, { id: undefined, value: undefined, description: "", enabled: undefined, name: "" })
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInStaticExtensions", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, false, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.registerChangeInStaticExtensions()
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.onError("Sorry, The video you are looking for does not exist.")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.onError("Missing FileUri configuration")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.onError("No os dependencies found. ")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.onError("Invalid data: No data found in any of the field(s)!!!")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.onError("Ran out of iterations")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.onError("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, true, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.loadAll()
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, true, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, undefined, undefined)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("trackId", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, false, true)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.trackId(-100, { id: undefined, value: undefined, description: "This is group1", enabled: true, name: "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.trackId(-100, { id: 1, value: undefined, description: "policy_abc", enabled: true, name: "Pierre Edouard" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.trackId(1, { id: 1, value: undefined, description: "(no description available)", enabled: true, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.trackId(-1, { id: 100, value: undefined, description: "No description available.", enabled: true, name: "Pierre Edouard" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.trackId(-1, { id: -5.48, value: undefined, description: "Organize files in your directory instantly, ", enabled: true, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.trackId(Infinity, { id: Infinity, value: undefined, description: "", enabled: true, name: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("registerChangeInStaticExtensions", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, true, false)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_extension_component.StaticExtensionComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.registerChangeInStaticExtensions()
        expect(result).toMatchSnapshot()
    })
})
