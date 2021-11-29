import * as migration_removed_file_component from "app/entities/migration-removed-file/migration-removed-file.component"
import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.onError("TypeError exception should be raised")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.onError("Top level object in 'override.yml' needs to be an object")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.onError("cannot be found.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.onError("This is an exception, voilà")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.onError("<error_message>%s</error_message>")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.onError("")
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInMigrationRemovedFiles", () => {
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.registerChangeInMigrationRemovedFiles()
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.trackId(-100, { id: undefined, svnLocation: undefined, path: ".", reason: undefined, fileSize: 32, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.trackId(-100, { id: 0, svnLocation: "www.google.com", path: "C:\\\\path\\to\\file.ext", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.trackId(-100, { id: undefined, svnLocation: undefined, path: "path/to/folder/", reason: undefined, fileSize: 0, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.trackId(1, { id: undefined, svnLocation: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", path: "path/to/file.ext", reason: undefined, fileSize: 0, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.trackId(-1, { id: undefined, svnLocation: "http://base.com", path: "/path/to/file", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.trackId(-Infinity, { id: -Infinity, svnLocation: "", path: "", reason: undefined, fileSize: undefined, migration: undefined })
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("registerChangeInMigrationRemovedFiles", () => {
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.registerChangeInMigrationRemovedFiles()
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        inst18 = new migration_removed_file_component.MigrationRemovedFileComponent(inst3, inst12, inst13, inst17)
    })

    test("0", () => {
        let result: any = inst18.onError("Unknown error")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst18.onError("Warning: ")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst18.onError("Sorry, This video cannot be accessed via this website")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst18.onError("Error getting key from: %s")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst18.onError("Invalid Invitation Token.")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst18.onError("")
        expect(result).toMatchSnapshot()
    })
})
