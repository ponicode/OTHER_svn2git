import * as auth_expired_interceptor from "app/blocks/interceptor/auth-expired.interceptor"
import * as core from "@angular/core"

import * as http from "@angular/common/http"
// @ponicode
describe("intercept", () => {
    let object: any
    let inst: any

    beforeEach(() => {
        object = [{ provide: true, multi: undefined, useValue: false }, null, null, null, null]
        inst = new auth_expired_interceptor.AuthExpiredInterceptor(core.Injector.create({ providers: object, parent: undefined, name: "Edmond" }))
    })

    test("0", () => {
        let param1: any = new http.HttpRequest("PATCH", "Ronald Keeling", "a1969970175", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new http.HttpRequest("PATCH", "Janet Homenick", 12345, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new http.HttpRequest("PUT", "Ronald Keeling", null, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new http.HttpRequest("GET", "Gail Hoppe", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new http.HttpRequest("GET", "Becky Bednar", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new http.HttpRequest("PUT", "", null, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })
})
