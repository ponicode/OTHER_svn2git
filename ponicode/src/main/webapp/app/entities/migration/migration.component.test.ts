import * as migration_component from "app/entities/migration/migration.component"
import * as migration_service from "app/entities/migration/migration.service"
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

import * as migration_model from "app/shared/model/migration.model"
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("reset", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.reset()
        expect(result).toMatchSnapshot()
    })
})

describe("loadPage", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.loadPage("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.loadPage("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.loadPage("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.loadPage("https://api.telegram.org/")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.loadPage("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst19.loadPage("")
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.ngOnInit()
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInMigrations", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.registerChangeInMigrations()
        expect(result).toMatchSnapshot()
    })
})

describe("sort", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.sort()
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.trackId(-1, { id: undefined, svnGroup: undefined, svnProject: "C:\\\\path\\to\\file.ext", user: undefined, date: undefined, gitlabGroup: "9876", gitlabProject: "path/to/folder/", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "m2v", gitlabUrl: "http://www.example.com/route/123?foo=bar", gitlabToken: undefined, svnUrl: "ponicode.com", svnUser: "Edmond", svnPassword: undefined, svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: "m2v", branches: "protocol-reboot", tags: "Renner Circle", svnHistory: "9876", tagsToMigrate: undefined, branchesToMigrate: "1.0.0", createdTimestamp: undefined, workingDirectory: "/opt/share", emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.trackId(100, { id: undefined, svnGroup: undefined, svnProject: "/path/to/file", user: undefined, date: undefined, gitlabGroup: "da7588892", gitlabProject: "./path/to/file", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "jpeg", gitlabUrl: "https://croplands.org/app/a/confirm?t=", gitlabToken: undefined, svnUrl: "www.google.com", svnUser: "Jean-Philippe", svnPassword: undefined, svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: "jpeg", branches: "port-generate", tags: "Corrine Square", svnHistory: "bc23a9d531064583ace8f67dad60f6bb", tagsToMigrate: undefined, branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: undefined, workingDirectory: "/opt/share", emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: "Architect" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.trackId(0, { id: undefined, svnGroup: "12345", svnProject: ".", user: undefined, date: undefined, gitlabGroup: "c466a48309794261b64a4f02cfcc3d64", gitlabProject: "/path/to/file", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "pdf", gitlabUrl: "https://api.telegram.org/", gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "m2v", branches: "microchip-bypass", tags: undefined, svnHistory: undefined, tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: "1.0.0", createdTimestamp: undefined, workingDirectory: "/usr/sbin", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.trackId(0, { id: undefined, svnGroup: "c466a48309794261b64a4f02cfcc3d64", svnProject: ".", user: undefined, date: undefined, gitlabGroup: "da7588892", gitlabProject: "C:\\\\path\\to\\folder\\", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "pdf", gitlabUrl: "http://www.example.com/route/123?foo=bar", gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "mpe", branches: "microchip-bypass", tags: undefined, svnHistory: undefined, tagsToMigrate: "1.0.0", branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: undefined, workingDirectory: "/usr/sbin", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.trackId(1, { id: 1, svnGroup: undefined, svnProject: undefined, user: undefined, date: undefined, gitlabGroup: "da7588892", gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "m2v", gitlabUrl: undefined, gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: undefined, svnUser: undefined, svnPassword: "4.0.0-beta1\t", svnRevision: undefined, trunk: undefined, branches: undefined, tags: "Beryl Coves", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: undefined, workingDirectory: "/opt/share", emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst19.trackId(-Infinity, { id: -Infinity, svnGroup: undefined, svnProject: "", user: undefined, date: undefined, gitlabGroup: "", gitlabProject: "", status: undefined, maxFileSize: "", forbiddenFileExtensions: "", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "", svnRevision: undefined, trunk: "", branches: "", tags: undefined, svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: true, uploadType: "" })
        expect(result).toMatchSnapshot()
    })
})

describe("cssClass", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.cssClass(migration_model.StatusEnum.DONE_WITH_WARNINGS)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.cssClass(migration_model.StatusEnum.DONE)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.cssClass(migration_model.StatusEnum.IGNORED)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.cssClass(null)
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.onError("Message recipient is not the grader, the person being graded, or the controller")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.onError("invalid option")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.onError("the specified credentials were rejected by the server")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.onError("Sorry, The video you are looking for does not exist.")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.onError("No response")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst19.onError("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("paginateMigrations", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let param1: any = [{ id: undefined, svnGroup: undefined, svnProject: "C:\\\\path\\to\\folder\\", user: "Jean-Philippe", date: undefined, gitlabGroup: "9876", gitlabProject: undefined, status: undefined, maxFileSize: "43083", forbiddenFileExtensions: "jpeg", gitlabUrl: "https://twitter.com/path?abc", gitlabToken: undefined, svnUrl: "https://twitter.com/path?abc", svnUser: "Michael", svnPassword: undefined, svnRevision: undefined, trunk: undefined, branches: "microchip-bypass", tags: undefined, svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/sbin", emptyDirs: undefined, histories: undefined, mappings: undefined, flat: true, uploadType: "Producer" }]
        let param2: any = new http.HttpHeaders(undefined)
        let result: any = inst19.paginateMigrations(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = [{ id: -100, svnGroup: "12345", svnProject: "C:\\\\path\\to\\file.ext", user: "Michael", date: undefined, gitlabGroup: "9876", gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: "64832", forbiddenFileExtensions: undefined, gitlabUrl: "http://www.croplands.org/account/confirm?t=", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: "https://api.telegram.org/", svnUser: "George", svnPassword: "4.0.0-beta1\t", svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: undefined, branches: undefined, tags: "Beryl Coves", svnHistory: "da7588892", tagsToMigrate: "v1.2.4", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/sbin", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: "Producer" }, { id: undefined, svnGroup: undefined, svnProject: "/path/to/file", user: "Anas", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "m2v", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "https://api.telegram.org/", svnUser: undefined, svnPassword: "^5.0.0", svnRevision: undefined, trunk: "pdf", branches: "protocol-reboot", tags: undefined, svnHistory: "da7588892", tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: true, uploadType: undefined }, null]
        let param2: any = new http.HttpHeaders(undefined)
        let result: any = inst19.paginateMigrations(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = [{ id: 0, svnGroup: undefined, svnProject: "path/to/folder/", user: undefined, date: undefined, gitlabGroup: "9876", gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: "69660", forbiddenFileExtensions: "mpe", gitlabUrl: "http://www.example.com/route/123?foo=bar", gitlabToken: "oAuthToken", svnUrl: undefined, svnUser: "Edmond", svnPassword: undefined, svnRevision: undefined, trunk: "m2v", branches: undefined, tags: "Beryl Coves", svnHistory: undefined, tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: undefined, workingDirectory: "/selinux", emptyDirs: true, histories: undefined, mappings: undefined, flat: true, uploadType: "Developer" }, null]
        let param2: any = new http.HttpHeaders(undefined)
        let result: any = inst19.paginateMigrations(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = [{ id: -5.48, svnGroup: "12345", svnProject: "path/to/file.ext", user: "Anas", date: undefined, gitlabGroup: "bc23a9d531064583ace8f67dad60f6bb", gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: "59089", forbiddenFileExtensions: undefined, gitlabUrl: "https://api.telegram.org/", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: "https://api.telegram.org/", svnUser: "George", svnPassword: "1.0.0", svnRevision: "Lq8wLspXaJraZSs3CwiCTF85mkvp", trunk: undefined, branches: undefined, tags: "Kailey Bypass", svnHistory: "9876", tagsToMigrate: "^5.0.0", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: "Producer" }, { id: undefined, svnGroup: undefined, svnProject: "C:\\\\path\\to\\folder\\", user: "George", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "pdf", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "http://www.croplands.org/account/confirm?t=", svnUser: undefined, svnPassword: "v4.0.0-rc.4", svnRevision: undefined, trunk: "m2v", branches: "matrix-input", tags: undefined, svnHistory: "c466a48309794261b64a4f02cfcc3d64", tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: true, uploadType: undefined }, null]
        let param2: any = new http.HttpHeaders(undefined)
        let result: any = inst19.paginateMigrations(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = [{ id: undefined, svnGroup: "12345", svnProject: undefined, user: "Michael", date: undefined, gitlabGroup: "c466a48309794261b64a4f02cfcc3d64", gitlabProject: undefined, status: undefined, maxFileSize: "43083", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: "oAuthToken", svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "m2v", branches: "sensor-copy", tags: undefined, svnHistory: "c466a48309794261b64a4f02cfcc3d64", tagsToMigrate: "v1.2.4", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined }]
        let param2: any = new http.HttpHeaders("Ronald Keeling")
        let result: any = inst19.paginateMigrations(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param2: any = new http.HttpHeaders("")
        let result: any = inst19.paginateMigrations([], param2)
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.loadAll()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("reset", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.reset()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("loadPage", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.loadPage(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.loadPage(10)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.loadPage(64)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.loadPage(32)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.loadPage(256)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst19.loadPage(NaN)
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.ngOnInit()
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("sort", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.sort()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("registerChangeInMigrations", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.registerChangeInMigrations()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("cssClass", () => {
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

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.cssClass(migration_model.StatusEnum.DONE_WITH_WARNINGS)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.cssClass(migration_model.StatusEnum.RUNNING)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.cssClass(migration_model.StatusEnum.IGNORED)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.cssClass(migration_model.StatusEnum.FAILED)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.cssClass(null)
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.onError("Sorry, The video you are looking for does not exist.")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.onError("Uploaded file was not added to the resource. ")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.onError("Message originator is not the grader, or the person being graded")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.onError("Connection is closed")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.onError("Exception not raised: %s")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst19.onError("")
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
    let inst19: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
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
        inst14 = new ng_jhipster.JhiParseLinks()
        inst15 = new http.HttpHandler()
        inst16 = new http.HttpClient(inst15)
        inst17 = new account_service.AccountService(inst16)
        inst18 = new principal_service.Principal(inst17)
        inst19 = new migration_component.MigrationComponent(inst3, inst12, inst13, inst14, inst18)
    })

    test("0", () => {
        let result: any = inst19.trackId(0, { id: -5.48, svnGroup: "12345", svnProject: "./path/to/file", user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "43083", forbiddenFileExtensions: undefined, gitlabUrl: "https://twitter.com/path?abc", gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "v4.0.0-rc.4", svnRevision: "Lq8wLspXaJraZSs3CwiCTF85mkvp", trunk: "pdf", branches: undefined, tags: "Beryl Coves", svnHistory: undefined, tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.trackId(0, { id: 1, svnGroup: "12345", svnProject: "C:\\\\path\\to\\folder\\", user: "Jean-Philippe", date: undefined, gitlabGroup: undefined, gitlabProject: ".", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "Michael", svnPassword: undefined, svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: undefined, branches: "sensor-copy", tags: undefined, svnHistory: undefined, tagsToMigrate: "1.0.0", branchesToMigrate: "v1.2.4", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.trackId(-100, { id: undefined, svnGroup: "12345", svnProject: "./path/to/file", user: "George", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "43083", forbiddenFileExtensions: "pdf", gitlabUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", gitlabToken: "oAuthToken", svnUrl: undefined, svnUser: "George", svnPassword: "v1.2.4", svnRevision: undefined, trunk: "mpe", branches: undefined, tags: undefined, svnHistory: undefined, tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.trackId(100, { id: 1, svnGroup: "da7588892", svnProject: "path/to/folder/", user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "44074", forbiddenFileExtensions: undefined, gitlabUrl: "https://api.telegram.org/bot", gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "v1.2.4", svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: "jpeg", branches: undefined, tags: "Kailey Bypass", svnHistory: undefined, tagsToMigrate: "^5.0.0", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Manager" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.trackId(-1, { id: 1, svnGroup: "c466a48309794261b64a4f02cfcc3d64", svnProject: "C:\\\\path\\to\\file.ext", user: "Jean-Philippe", date: undefined, gitlabGroup: "9876", gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: "oAuthToken", svnUrl: undefined, svnUser: "Anas", svnPassword: "^5.0.0", svnRevision: undefined, trunk: undefined, branches: "port-generate", tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst19.trackId(Infinity, { id: Infinity, svnGroup: "", svnProject: "", user: "", date: undefined, gitlabGroup: undefined, gitlabProject: "", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "", svnPassword: undefined, svnRevision: "", trunk: undefined, branches: "", tags: undefined, svnHistory: undefined, tagsToMigrate: "", branchesToMigrate: "", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: "" })
        expect(result).toMatchSnapshot()
    })
})
