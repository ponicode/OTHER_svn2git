import * as alert_component from "app/shared/alert/alert.component"
import * as ng_jhipster from "ng-jhipster"
import * as security from "@angular/core/src/sanitization/security"
import * as config_service from "ng-jhipster/config.service"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"

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

    beforeEach(() => {
        inst = new security.Sanitizer()
        inst2 = new config_service.JhiConfigService(undefined)
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, false, false)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new alert_component.JhiAlertComponent(inst9)
    })

    test("0", () => {
        let result: any = inst10.ngOnInit()
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

    beforeEach(() => {
        inst = new security.Sanitizer()
        inst2 = new config_service.JhiConfigService(undefined)
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, undefined, undefined)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new alert_component.JhiAlertComponent(inst9)
    })

    test("0", () => {
        let result: any = inst10.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setClasses", () => {
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

    beforeEach(() => {
        inst = new security.Sanitizer()
        inst2 = new config_service.JhiConfigService(undefined)
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, undefined, undefined)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new alert_component.JhiAlertComponent(inst9)
    })

    test("0", () => {
        let result: any = inst10.setClasses("New Error ")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst10.setClasses("Internal Server Error\n")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst10.setClasses("Warning: ")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst10.setClasses("invalid option")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst10.setClasses("unexpected error")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst10.setClasses("")
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

    beforeEach(() => {
        inst = new security.Sanitizer()
        inst2 = new config_service.JhiConfigService(undefined)
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, true, true)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new alert_component.JhiAlertComponent(inst9)
    })

    test("0", () => {
        let result: any = inst10.ngOnInit()
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

    beforeEach(() => {
        inst = new security.Sanitizer()
        inst2 = new config_service.JhiConfigService(undefined)
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, undefined, false)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new alert_component.JhiAlertComponent(inst9)
    })

    test("0", () => {
        let result: any = inst10.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
