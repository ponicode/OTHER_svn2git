import * as migration_history_component from "app/entities/migration-history/migration-history.component"
import * as migration_history_service from "app/entities/migration-history/migration-history.service"
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.onError("No error")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.onError("Exception not raised: %s")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.onError("There is a mismatch")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.onError("missing encoding")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.onError("Error:")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.onError("")
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInMigrationHistories", () => {
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.registerChangeInMigrationHistories()
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.trackId(-100, { id: undefined, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.trackId(100, { id: undefined, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.trackId(100, { id: undefined, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.trackId(-100, { id: undefined, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.trackId(1, { id: undefined, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.trackId(-Infinity, { id: undefined, step: undefined, status: undefined, date: undefined, data: "", migration: undefined })
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("registerChangeInMigrationHistories", () => {
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.registerChangeInMigrationHistories()
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
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
        inst18 = new migration_history_component.MigrationHistoryComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.onError("No response")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.onError("Invalid data: No data found in any of the field(s)!!!")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.onError("No error")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.onError("Could not find a grader object for message from xqueue")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.onError("Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates.")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.onError("")
        expect(result).toMatchSnapshot()
    })
})
