import * as auth_interceptor from "app/blocks/interceptor/auth.interceptor"
import * as ngx_webstorage from "ngx-webstorage"
import * as rxjs from "rxjs"

import * as http from "@angular/common/http"
// @ponicode
describe("intercept", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst5: any
    let inst4: any
    let inst6: any
    let inst7: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.LocalStorageService({ keyChanges: inst, isAvailable: true, name: "George", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst5 = new rxjs.Observable(undefined)
        inst4 = new rxjs.Subject()
        inst6 = new ngx_webstorage.SessionStorageService({ keyChanges: inst4, isAvailable: false, name: "Jean-Philippe", get: () => inst5, set: () => null, del: () => null, clear: () => null })
        inst7 = new auth_interceptor.AuthInterceptor(inst3, inst6)
    })

    test("0", () => {
        let param1: any = new http.HttpRequest("Gail Hoppe", "Becky Bednar", null, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst7.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new http.HttpRequest("PATCH", "Becky Bednar", null, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst7.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new http.HttpRequest("POST", "Maurice Purdy", 56784, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst7.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new http.HttpRequest("Janet Homenick", "Gail Hoppe", null, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst7.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new http.HttpRequest("Gail Hoppe", "Janet Homenick", null, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst7.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new http.HttpRequest("GET", "", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst7.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })
})
