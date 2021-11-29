import * as auth_jwt_service from "app/core/auth/auth-jwt.service"
import * as http from "@angular/common/http"
import * as ngx_webstorage from "ngx-webstorage"
import * as rxjs from "rxjs"

describe("getToken", () => {
    let inst: any
    let inst2: any
    let inst5: any
    let inst4: any
    let inst3: any
    let inst6: any
    let inst8: any
    let inst7: any
    let inst9: any
    let inst10: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst5 = new rxjs.Observable(undefined)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst6 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: true, name: "George", get: () => inst4, set: () => inst5, del: () => null, clear: () => null })
        inst8 = new rxjs.Observable(undefined)
        inst7 = new rxjs.Subject()
        inst9 = new ngx_webstorage.SessionStorageService({ keyChanges: inst7, isAvailable: true, name: "George", get: () => inst8, set: () => null, del: () => null, clear: () => null })
        inst10 = new auth_jwt_service.AuthServerProvider(inst2, inst6, inst9)
    })

    test("0", () => {
        let result: any = inst10.getToken()
        expect(result).toMatchSnapshot()
    })
})

describe("loginWithToken", () => {
    let inst: any
    let inst2: any
    let inst4: any
    let inst3: any
    let inst5: any
    let inst7: any
    let inst6: any
    let inst8: any
    let inst9: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst5 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: true, name: "Pierre Edouard", get: () => inst4, set: () => null, del: () => null, clear: () => null })
        inst7 = new rxjs.Observable(undefined)
        inst6 = new rxjs.Subject()
        inst8 = new ngx_webstorage.SessionStorageService({ keyChanges: inst6, isAvailable: false, name: "Jean-Philippe", get: () => inst7, set: () => null, del: () => null, clear: () => null })
        inst9 = new auth_jwt_service.AuthServerProvider(inst2, inst5, inst8)
    })

    test("0", () => {
        let result: any = inst9.loginWithToken("https://twitter.com/path?abc", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst9.loginWithToken("https://", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst9.loginWithToken("http://www.croplands.org/account/confirm?t=", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst9.loginWithToken("https://", "v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst9.loginWithToken("http://base.com", "v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst9.loginWithToken("", "")
        expect(result).toMatchSnapshot()
    })
})

describe("login", () => {
    let inst: any
    let inst2: any
    let inst5: any
    let inst4: any
    let inst3: any
    let inst6: any
    let inst8: any
    let inst7: any
    let inst9: any
    let inst10: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst5 = new rxjs.Observable(undefined)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst6 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: false, name: "George", get: () => inst4, set: () => inst5, del: () => null, clear: () => null })
        inst8 = new rxjs.Observable(undefined)
        inst7 = new rxjs.Subject()
        inst9 = new ngx_webstorage.SessionStorageService({ keyChanges: inst7, isAvailable: true, name: "Anas", get: () => inst8, set: () => null, del: () => null, clear: () => null })
        inst10 = new auth_jwt_service.AuthServerProvider(inst2, inst6, inst9)
    })

    test("0", () => {
        let result: any = inst10.login("user_name")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst10.login("user123")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst10.login("user name")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst10.login("user-name")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst10.login("username")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst10.login("")
        expect(result).toMatchSnapshot()
    })
})

describe("storeAuthenticationToken", () => {
    let inst: any
    let inst2: any
    let inst5: any
    let inst4: any
    let inst3: any
    let inst6: any
    let inst9: any
    let inst8: any
    let inst7: any
    let inst10: any
    let inst11: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst5 = new rxjs.Observable(undefined)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst6 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: false, name: "Edmond", get: () => inst4, set: () => inst5, del: () => null, clear: () => null })
        inst9 = new rxjs.Observable(undefined)
        inst8 = new rxjs.Observable(undefined)
        inst7 = new rxjs.Subject()
        inst10 = new ngx_webstorage.SessionStorageService({ keyChanges: inst7, isAvailable: true, name: "Michael", get: () => inst8, set: () => inst9, del: () => null, clear: () => null })
        inst11 = new auth_jwt_service.AuthServerProvider(inst2, inst6, inst10)
    })

    test("0", () => {
        let result: any = inst11.storeAuthenticationToken("www.google.com", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.storeAuthenticationToken("https://croplands.org/app/a/reset?token=", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.storeAuthenticationToken("https://croplands.org/app/a/reset?token=", "v1.2.4")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.storeAuthenticationToken("Www.GooGle.com", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.storeAuthenticationToken("https://twitter.com/path?abc", "v1.2.4")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.storeAuthenticationToken("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("logout", () => {
    let inst: any
    let inst2: any
    let inst4: any
    let inst3: any
    let inst5: any
    let inst8: any
    let inst7: any
    let inst6: any
    let inst9: any
    let inst10: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst5 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: true, name: "Edmond", get: () => inst4, set: () => null, del: () => null, clear: () => null })
        inst8 = new rxjs.Observable(undefined)
        inst7 = new rxjs.Observable(undefined)
        inst6 = new rxjs.Subject()
        inst9 = new ngx_webstorage.SessionStorageService({ keyChanges: inst6, isAvailable: false, name: "George", get: () => inst7, set: () => null, del: () => null, clear: () => inst8 })
        inst10 = new auth_jwt_service.AuthServerProvider(inst2, inst5, inst9)
    })

    test("0", () => {
        let result: any = inst10.logout()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getToken", () => {
    let inst: any
    let inst2: any
    let inst4: any
    let inst3: any
    let inst5: any
    let inst7: any
    let inst6: any
    let inst8: any
    let inst9: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst5 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: true, name: "Anas", get: () => inst4, set: () => null, del: () => null, clear: () => null })
        inst7 = new rxjs.Observable(undefined)
        inst6 = new rxjs.Subject()
        inst8 = new ngx_webstorage.SessionStorageService({ keyChanges: inst6, isAvailable: true, name: "Anas", get: () => inst7, set: () => null, del: () => null, clear: () => null })
        inst9 = new auth_jwt_service.AuthServerProvider(inst2, inst5, inst8)
    })

    test("0", () => {
        let result: any = inst9.getToken()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("loginWithToken", () => {
    let inst: any
    let inst2: any
    let inst4: any
    let inst3: any
    let inst5: any
    let inst9: any
    let inst8: any
    let inst7: any
    let inst6: any
    let inst10: any
    let inst11: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst5 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: false, name: "Michael", get: () => inst4, set: () => null, del: () => null, clear: () => null })
        inst9 = new rxjs.Observable(undefined)
        inst8 = new rxjs.Observable(undefined)
        inst7 = new rxjs.Observable(undefined)
        inst6 = new rxjs.Subject()
        inst10 = new ngx_webstorage.SessionStorageService({ keyChanges: inst6, isAvailable: false, name: "Anas", get: () => inst7, set: () => null, del: () => inst8, clear: () => inst9 })
        inst11 = new auth_jwt_service.AuthServerProvider(inst2, inst5, inst10)
    })

    test("0", () => {
        let result: any = inst11.loginWithToken("https://croplands.org/app/a/confirm?t=", "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst11.loginWithToken("Www.GooGle.com", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst11.loginWithToken("ponicode.com", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst11.loginWithToken("http://www.example.com/route/123?foo=bar", "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst11.loginWithToken("Www.GooGle.com", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst11.loginWithToken("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
    let inst: any
    let inst2: any
    let inst4: any
    let inst3: any
    let inst5: any
    let inst7: any
    let inst6: any
    let inst8: any
    let inst9: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst5 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: false, name: "Edmond", get: () => inst4, set: () => null, del: () => null, clear: () => null })
        inst7 = new rxjs.Observable(undefined)
        inst6 = new rxjs.Subject()
        inst8 = new ngx_webstorage.SessionStorageService({ keyChanges: inst6, isAvailable: false, name: "George", get: () => inst7, set: () => null, del: () => null, clear: () => null })
        inst9 = new auth_jwt_service.AuthServerProvider(inst2, inst5, inst8)
    })

    test("0", () => {
        let result: any = inst9.login({ username: "user-name", password: "$p3onyycat", rememberMe: "v4.0.0-rc.4" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst9.login({ username: "user123", password: "YouarenotAllowed2Use", rememberMe: "v4.0.0-rc.4" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst9.login({ username: "user-name", password: "!Lov3MyPianoPony", rememberMe: "v1.2.4" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst9.login({ username: "123", password: "accessdenied4u", rememberMe: "v4.0.0-rc.4" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst9.login({ username: "username", password: "$p3onyycat", rememberMe: "1.0.0" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst9.login({ username: "", password: "", rememberMe: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("storeAuthenticationToken", () => {
    let inst: any
    let inst2: any
    let inst4: any
    let inst3: any
    let inst5: any
    let inst8: any
    let inst7: any
    let inst6: any
    let inst9: any
    let inst10: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Subject()
        inst5 = new ngx_webstorage.LocalStorageService({ keyChanges: inst3, isAvailable: true, name: "Anas", get: () => inst4, set: () => null, del: () => null, clear: () => null })
        inst8 = new rxjs.Observable(undefined)
        inst7 = new rxjs.Observable(undefined)
        inst6 = new rxjs.Subject()
        inst9 = new ngx_webstorage.SessionStorageService({ keyChanges: inst6, isAvailable: false, name: "George", get: () => inst7, set: () => null, del: () => null, clear: () => inst8 })
        inst10 = new auth_jwt_service.AuthServerProvider(inst2, inst5, inst9)
    })

    test("0", () => {
        let result: any = inst10.storeAuthenticationToken("https://croplands.org/app/a/reset?token=", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst10.storeAuthenticationToken("https://croplands.org/app/a/confirm?t=", "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst10.storeAuthenticationToken("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst10.storeAuthenticationToken("https://api.telegram.org/bot", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst10.storeAuthenticationToken("Www.GooGle.com", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst10.storeAuthenticationToken("", "")
        expect(result).toMatchSnapshot()
    })
})
