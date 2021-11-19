import * as errorhandler_interceptor from "app/blocks/interceptor/errorhandler.interceptor"
import * as ng_jhipster from "ng-jhipster"

import * as http from "@angular/common/http"
// @ponicode
describe("intercept", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new ng_jhipster.JhiEventManager()
        inst2 = new errorhandler_interceptor.ErrorHandlerInterceptor(inst)
    })

    test("0", () => {
        let param1: any = new http.HttpRequest("Janet Homenick", "Becky Bednar", "a1969970175", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst2.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new http.HttpRequest("Ronald Keeling", "Janet Homenick", "a1969970175", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst2.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new http.HttpRequest("Becky Bednar", "Maurice Purdy", "a1969970175", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst2.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new http.HttpRequest("Maurice Purdy", "Ronald Keeling", "a1969970175", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst2.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new http.HttpRequest("Becky Bednar", "Ronald Keeling", "bc23a9d531064583ace8f67dad60f6bb", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst2.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new http.HttpRequest("", "", -Infinity, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst2.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })
})
