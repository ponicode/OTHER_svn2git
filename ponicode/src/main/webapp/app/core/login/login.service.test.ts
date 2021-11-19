import * as login_service from "app/core/login/login.service"
import * as ng_jhipster from "ng-jhipster"
import * as core from "@ngx-translate/core"
import * as translate_store from "@ngx-translate/core/lib/translate.store"
import * as translate_loader from "@ngx-translate/core/lib/translate.loader"
import * as translate_compiler from "@ngx-translate/core/lib/translate.compiler"
import * as translate_parser from "@ngx-translate/core/lib/translate.parser"
import * as missing_translation_handler from "@ngx-translate/core/lib/missing-translation-handler"
import * as config_service from "ng-jhipster/config.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"
import * as auth_jwt_service from "app/core/auth/auth-jwt.service"
import * as ngx_webstorage from "ngx-webstorage"
import * as rxjs from "rxjs"
import * as class_transformer from "class-transformer"

describe("logout", () => {
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
    let inst16: any
    let inst15: any
    let inst17: any
    let inst18: any
    let inst19: any

    beforeEach(() => {
        inst = new translate_store.TranslateStore()
        inst2 = new translate_loader.TranslateLoader()
        inst3 = new translate_compiler.TranslateCompiler()
        inst4 = new translate_parser.TranslateParser()
        inst5 = new missing_translation_handler.MissingTranslationHandler()
        inst6 = new core.TranslateService(inst, inst2, inst3, inst4, inst5, undefined, undefined)
        inst7 = new config_service.JhiConfigService(undefined)
        inst8 = new ng_jhipster.JhiLanguageService(inst6, inst7)
        inst9 = new http.HttpHandler()
        inst10 = new http.HttpClient(inst9)
        inst11 = new account_service.AccountService(inst10)
        inst12 = new principal_service.Principal(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst16 = new rxjs.Observable(undefined)
        inst15 = new rxjs.Subject()
        inst17 = new ngx_webstorage.LocalStorageService({ keyChanges: inst15, isAvailable: true, name: "Michael", get: () => inst16, set: () => null, del: () => null, clear: () => null })
        inst18 = new auth_jwt_service.AuthServerProvider(inst14, inst17, class_transformer.plainToClass(ngx_webstorage.SessionStorageService,{}))
        inst19 = new login_service.LoginService(inst8, inst12, inst18)
    })

    test("0", () => {
        let result: any = inst19.logout()
        expect(result).toMatchSnapshot()
    })
})

describe("loginWithToken", () => {
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
    let inst16: any
    let inst15: any
    let inst17: any
    let inst18: any
    let inst19: any

    beforeEach(() => {
        inst = new translate_store.TranslateStore()
        inst2 = new translate_loader.TranslateLoader()
        inst3 = new translate_compiler.TranslateCompiler()
        inst4 = new translate_parser.TranslateParser()
        inst5 = new missing_translation_handler.MissingTranslationHandler()
        inst6 = new core.TranslateService(inst, inst2, inst3, inst4, inst5, undefined, true)
        inst7 = new config_service.JhiConfigService(undefined)
        inst8 = new ng_jhipster.JhiLanguageService(inst6, inst7)
        inst9 = new http.HttpHandler()
        inst10 = new http.HttpClient(inst9)
        inst11 = new account_service.AccountService(inst10)
        inst12 = new principal_service.Principal(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst16 = new rxjs.Observable(undefined)
        inst15 = new rxjs.Subject()
        inst17 = new ngx_webstorage.LocalStorageService({ keyChanges: inst15, isAvailable: false, name: "Jean-Philippe", get: () => inst16, set: () => null, del: () => null, clear: () => null })
        inst18 = new auth_jwt_service.AuthServerProvider(inst14, inst17, class_transformer.plainToClass(ngx_webstorage.SessionStorageService,{}))
        inst19 = new login_service.LoginService(inst8, inst12, inst18)
    })

    test("0", () => {
        let result: any = inst19.loginWithToken("http://www.croplands.org/account/confirm?t=", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.loginWithToken("http://base.com", "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.loginWithToken("http://www.example.com/route/123?foo=bar", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst19.loginWithToken("https://twitter.com/path?abc", "v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst19.loginWithToken("Www.GooGle.com", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst19.loginWithToken("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
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
    let inst16: any
    let inst15: any
    let inst17: any
    let inst18: any
    let inst19: any

    beforeEach(() => {
        inst = new translate_store.TranslateStore()
        inst2 = new translate_loader.TranslateLoader()
        inst3 = new translate_compiler.TranslateCompiler()
        inst4 = new translate_parser.TranslateParser()
        inst5 = new missing_translation_handler.MissingTranslationHandler()
        inst6 = new core.TranslateService(inst, inst2, inst3, inst4, inst5, true, true)
        inst7 = new config_service.JhiConfigService(undefined)
        inst8 = new ng_jhipster.JhiLanguageService(inst6, inst7)
        inst9 = new http.HttpHandler()
        inst10 = new http.HttpClient(inst9)
        inst11 = new account_service.AccountService(inst10)
        inst12 = new principal_service.Principal(inst11)
        inst13 = new http.HttpHandler()
        inst14 = new http.HttpClient(inst13)
        inst16 = new rxjs.Observable(undefined)
        inst15 = new rxjs.Subject()
        inst17 = new ngx_webstorage.LocalStorageService({ keyChanges: inst15, isAvailable: true, name: "George", get: () => inst16, set: () => null, del: () => null, clear: () => null })
        inst18 = new auth_jwt_service.AuthServerProvider(inst14, inst17, class_transformer.plainToClass(ngx_webstorage.SessionStorageService,{}))
        inst19 = new login_service.LoginService(inst8, inst12, inst18)
    })

    test("0", () => {
        let result: any = inst19.login(true, () => "return callback value")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst19.login(false, () => "return callback value")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst19.login(false, () => "")
        expect(result).toMatchSnapshot()
    })
})
