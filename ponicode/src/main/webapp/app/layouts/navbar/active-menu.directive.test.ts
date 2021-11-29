import * as active_menu_directive from "app/layouts/navbar/active-menu.directive"
import * as core from "@angular/core"
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

    beforeEach(() => {
        inst = new core.ElementRef("a1969970175")
        inst2 = new core.Renderer()
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, undefined, false)
        inst9 = new active_menu_directive.ActiveMenuDirective(inst, inst2, inst8)
    })

    test("0", () => {
        let result: any = inst9.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("updateActiveFlag", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any
    let inst9: any

    beforeEach(() => {
        inst = new core.ElementRef(12)
        inst2 = new core.Renderer()
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, true, false)
        inst9 = new active_menu_directive.ActiveMenuDirective(inst, inst2, inst8)
    })

    test("0", () => {
        let result: any = inst9.updateActiveFlag("ru")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst9.updateActiveFlag("de")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst9.updateActiveFlag("fr")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst9.updateActiveFlag("en")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst9.updateActiveFlag("it")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst9.updateActiveFlag("")
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

    beforeEach(() => {
        inst = new core.ElementRef(56784)
        inst2 = new core.Renderer()
        inst3 = new translate_store.TranslateStore()
        inst4 = new translate_loader.TranslateLoader()
        inst5 = new translate_compiler.TranslateCompiler()
        inst6 = new translate_parser.TranslateParser()
        inst7 = new missing_translation_handler.MissingTranslationHandler()
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, undefined, false)
        inst9 = new active_menu_directive.ActiveMenuDirective(inst, inst2, inst8)
    })

    test("0", () => {
        let result: any = inst9.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
