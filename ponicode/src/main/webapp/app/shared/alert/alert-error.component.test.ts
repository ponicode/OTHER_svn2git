import * as alert_error_component from "app/shared/alert/alert-error.component"
import * as ng_jhipster from "ng-jhipster"
import * as security from "@angular/core/src/sanitization/security"
import * as config_service from "ng-jhipster/config.service"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"

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
    let inst11: any
    let inst12: any
    let inst13: any
    let inst14: any
    let inst15: any
    let inst16: any
    let inst17: any

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
        inst10 = new ng_jhipster.JhiEventManager()
        inst11 = new translate_store.TranslateStore()
        inst12 = new translate_loader.TranslateLoader()
        inst13 = new translate_compiler.TranslateCompiler()
        inst14 = new translate_parser.TranslateParser()
        inst15 = new missing_translation_handler.MissingTranslationHandler()
        inst16 = new core.TranslateService(inst11, inst12, inst13, inst14, inst15, false, true)
        inst17 = new alert_error_component.JhiAlertErrorComponent(inst9, inst10, inst16)
    })

    test("0", () => {
        let result: any = inst17.setClasses("Invalid Invitation Token.")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst17.setClasses("\n\nThe first error message:\n")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst17.setClasses("Ran out of iterations")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst17.setClasses("Sorry, This video cannot be accessed via this website")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst17.setClasses("TrainerCourseDetailError: Either not an ajax call or not a GET request!!!")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst17.setClasses("")
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
        inst10 = new ng_jhipster.JhiEventManager()
        inst11 = new translate_store.TranslateStore()
        inst12 = new translate_loader.TranslateLoader()
        inst13 = new translate_compiler.TranslateCompiler()
        inst14 = new translate_parser.TranslateParser()
        inst15 = new missing_translation_handler.MissingTranslationHandler()
        inst16 = new core.TranslateService(inst11, inst12, inst13, inst14, inst15, false, undefined)
        inst17 = new alert_error_component.JhiAlertErrorComponent(inst9, inst10, inst16)
    })

    test("0", () => {
        let result: any = inst17.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("addErrorAlert", () => {
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

    beforeEach(() => {
        inst = new security.Sanitizer()
        inst2 = new config_service.JhiConfigService(undefined)
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, false, true)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new ng_jhipster.JhiEventManager()
        inst11 = new translate_store.TranslateStore()
        inst12 = new translate_loader.TranslateLoader()
        inst13 = new translate_compiler.TranslateCompiler()
        inst14 = new translate_parser.TranslateParser()
        inst15 = new missing_translation_handler.MissingTranslationHandler()
        inst16 = new core.TranslateService(inst11, inst12, inst13, inst14, inst15, false, true)
        inst17 = new alert_error_component.JhiAlertErrorComponent(inst9, inst10, inst16)
    })

    test("0", () => {
        let result: any = inst17.addErrorAlert("Unknown Error", "elio@example.com", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst17.addErrorAlert("the specified credentials were rejected by the server", "elio@example.com", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst17.addErrorAlert("The line-by-line profiler can only be used in dev.", "elio@example.com", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst17.addErrorAlert("To force deletion of the LAG use delete_force: True", "Elio", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst17.addErrorAlert("Sorry, The video you are looking for does not exist.", "Dillenberg", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst17.addErrorAlert("", "", "")
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

    beforeEach(() => {
        inst = new security.Sanitizer()
        inst2 = new config_service.JhiConfigService(undefined)
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, true, undefined)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new ng_jhipster.JhiEventManager()
        inst11 = new translate_store.TranslateStore()
        inst12 = new translate_loader.TranslateLoader()
        inst13 = new translate_compiler.TranslateCompiler()
        inst14 = new translate_parser.TranslateParser()
        inst15 = new missing_translation_handler.MissingTranslationHandler()
        inst16 = new core.TranslateService(inst11, inst12, inst13, inst14, inst15, false, undefined)
        inst17 = new alert_error_component.JhiAlertErrorComponent(inst9, inst10, inst16)
    })

    test("0", () => {
        let result: any = inst17.ngOnDestroy()
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
    let inst11: any
    let inst12: any
    let inst13: any
    let inst14: any
    let inst15: any
    let inst16: any
    let inst17: any

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
        inst10 = new ng_jhipster.JhiEventManager()
        inst11 = new translate_store.TranslateStore()
        inst12 = new translate_loader.TranslateLoader()
        inst13 = new translate_compiler.TranslateCompiler()
        inst14 = new translate_parser.TranslateParser()
        inst15 = new missing_translation_handler.MissingTranslationHandler()
        inst16 = new core.TranslateService(inst11, inst12, inst13, inst14, inst15, true, undefined)
        inst17 = new alert_error_component.JhiAlertErrorComponent(inst9, inst10, inst16)
    })

    test("0", () => {
        let result: any = inst17.setClasses({ toast: "c466a48309794261b64a4f02cfcc3d64", position: 31040 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst17.setClasses({ toast: "c466a48309794261b64a4f02cfcc3d64", position: 320 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst17.setClasses({ toast: "da7588892", position: 0.0 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst17.setClasses({ toast: "9876", position: 3600 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst17.setClasses({ toast: "da7588892", position: 0 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst17.setClasses({ toast: "", position: Infinity })
        expect(result).toMatchSnapshot()
    })
})
