import * as static_mapping_component from "app/entities/static-mapping/static-mapping.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
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
        inst18 = new static_mapping_component.StaticMappingComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.loadAll()
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
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
        inst18 = new static_mapping_component.StaticMappingComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnInit()
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
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
        inst18 = new static_mapping_component.StaticMappingComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnDestroy()
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
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
        inst18 = new static_mapping_component.StaticMappingComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.trackId(100, { id: undefined, svnDirectory: "v4.0.0-rc.4", regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: "/usr/ports", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.trackId(100, { id: 100, svnDirectory: "4.0.0-beta1\t", regex: "definition-checksum\\s(?P<checksum>\\w+)", gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.trackId(-1, { id: -5.48, svnDirectory: "4.0.0-beta1\t", regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.trackId(100, { id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: "/opt/share", svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.trackId(-1, { id: undefined, svnDirectory: "1.0.0", regex: undefined, gitDirectory: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.trackId(NaN, { id: NaN, svnDirectory: undefined, regex: "", gitDirectory: "", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInStaticMappings", () => {
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
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
        inst18 = new static_mapping_component.StaticMappingComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.registerChangeInStaticMappings()
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
        inst4 = new security.Sanitizer()
        inst5 = new config_service.JhiConfigService(undefined)
        inst6 = new translate_store.TranslateStore()
        inst7 = new translate_loader.TranslateLoader()
        inst8 = new translate_compiler.TranslateCompiler()
        inst9 = new translate_parser.TranslateParser()
        inst10 = new missing_translation_handler.MissingTranslationHandler()
        inst11 = new core.TranslateService(inst6, inst7, inst8, inst9, inst10, false, false)
        inst12 = new ng_jhipster.JhiAlertService(inst4, inst5, inst11)
        inst13 = new ng_jhipster.JhiEventManager()
        inst14 = new http.HttpHandler()
        inst15 = new http.HttpClient(inst14)
        inst16 = new account_service.AccountService(inst15)
        inst17 = new principal_service.Principal(inst16)
        inst18 = new static_mapping_component.StaticMappingComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.onError("Exception not raised: %s")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.onError("No response")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.onError("No os dependencies found. ")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.onError("There is a mismatch")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.onError("ValueError exception should be raised")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.onError("")
        expect(result).toMatchSnapshot()
    })
})
