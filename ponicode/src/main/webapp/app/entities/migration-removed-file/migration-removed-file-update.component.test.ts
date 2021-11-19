import * as migration_removed_file_update_component from "app/entities/migration-removed-file/migration-removed-file-update.component"
import * as ng_jhipster from "ng-jhipster"
import * as security from "@angular/core/src/sanitization/security"
import * as config_service from "ng-jhipster/config.service"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"
import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
import * as http from "@angular/common/http"
import * as migration_service from "app/entities/migration/migration.service"
import * as router from "@angular/router"

import * as rxjs from "rxjs"
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
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let result: any = inst17.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("previousState", () => {
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
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let result: any = inst17.previousState()
        expect(result).toMatchSnapshot()
    })
})

describe("save", () => {
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
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, false, undefined)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let result: any = inst17.save()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveSuccess", () => {
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
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let result: any = inst17.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveError", () => {
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
        inst8 = new core.TranslateService(inst3, inst4, inst5, inst6, inst7, undefined, false)
        inst9 = new ng_jhipster.JhiAlertService(inst, inst2, inst8)
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let result: any = inst17.onSaveError()
        expect(result).toMatchSnapshot()
    })
})

describe("subscribeToSaveResponse", () => {
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
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let param1: any = new rxjs.Observable(undefined)
        let result: any = inst17.subscribeToSaveResponse(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst17.subscribeToSaveResponse(null)
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
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let result: any = inst17.onError("Missing FileUri configuration")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst17.onError("unexpected error")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst17.onError("Error in retrieving email.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst17.onError("Internal Server Error\n")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst17.onError("Exception not raised: %s")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst17.onError("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("trackMigrationById", () => {
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
        inst10 = new http.HttpHandler()
        inst11 = new http.HttpClient(inst10)
        inst12 = new migration_removed_file_service.MigrationRemovedFileService(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst15 = new migration_service.MigrationService(inst14)
        inst16 = new router.ActivatedRoute()
        inst17 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(inst9, inst12, inst15, inst16)
    })

    test("0", () => {
        let result: any = inst17.trackMigrationById(-1, { id: undefined, svnGroup: "da7588892", svnProject: undefined, user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: "oAuthToken", svnUrl: "http://www.example.com/route/123?foo=bar", svnUser: "Anas", svnPassword: "1.0.0", svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "mpe", branches: "port-generate", tags: "Renner Circle", svnHistory: "9876", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/ports", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst17.trackMigrationById(100, { id: undefined, svnGroup: undefined, svnProject: undefined, user: "Pierre Edouard", date: undefined, gitlabGroup: undefined, gitlabProject: "C:\\\\path\\to\\folder\\", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "www.google.com", gitlabToken: "oAuthToken", svnUrl: "https://croplands.org/app/a/confirm?t=", svnUser: undefined, svnPassword: "v4.0.0-rc.4", svnRevision: undefined, trunk: "pdf", branches: "sensor-copy", tags: undefined, svnHistory: undefined, tagsToMigrate: "1.0.0", branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: undefined, workingDirectory: "/usr/sbin", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst17.trackMigrationById(-1, { id: undefined, svnGroup: "bc23a9d531064583ace8f67dad60f6bb", svnProject: undefined, user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: "https://api.telegram.org/", svnUser: "George", svnPassword: "1.0.0", svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: "jpeg", branches: "sensor-copy", tags: "Corrine Square", svnHistory: "bc23a9d531064583ace8f67dad60f6bb", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/ports", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst17.trackMigrationById(-1, { id: undefined, svnGroup: undefined, svnProject: undefined, user: "Jean-Philippe", date: undefined, gitlabGroup: undefined, gitlabProject: "path/to/folder/", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "https://api.telegram.org/", gitlabToken: "oAuthToken", svnUrl: "https://", svnUser: undefined, svnPassword: "v1.2.4", svnRevision: undefined, trunk: "m2v", branches: "sensor-copy", tags: undefined, svnHistory: undefined, tagsToMigrate: "v1.2.4", branchesToMigrate: "1.0.0", createdTimestamp: undefined, workingDirectory: "/usr/sbin", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst17.trackMigrationById(1, { id: 1, svnGroup: undefined, svnProject: undefined, user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", svnUser: "Anas", svnPassword: "v1.2.4", svnRevision: undefined, trunk: "jpeg", branches: "sensor-copy", tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: "^5.0.0", branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst17.trackMigrationById(NaN, { id: undefined, svnGroup: "", svnProject: undefined, user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: "", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: "", svnUrl: "", svnUser: "", svnPassword: "", svnRevision: "", trunk: "", branches: "", tags: "", svnHistory: "", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })
})
