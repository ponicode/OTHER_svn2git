import * as notification_interceptor from "app/blocks/interceptor/notification.interceptor"
import * as core from "@angular/core"

import * as http from "@angular/common/http"
// @ponicode
describe("intercept", () => {
    let object: any
    let inst: any

    beforeEach(() => {
        object = { 0: { provide: false, multi: undefined, useFactory: () => "Chief Product Officer", deps: undefined }, 1: null }
        inst = new notification_interceptor.NotificationInterceptor(core.Injector.create({ providers: object, parent: undefined, name: "Michael" }))
    })

    test("0", () => {
        let param1: any = new http.HttpRequest("OPTIONS", "Gail Hoppe", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new http.HttpRequest("OPTIONS", "Janet Homenick", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new http.HttpRequest("OPTIONS", "Maurice Purdy", undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new http.HttpRequest("PUT", "Becky Bednar", null, undefined)
        let param2: any = new http.HttpHandler()
        let result: any = inst.intercept(param1, param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new http.HttpRequest("PUT", "Gail Hoppe", null, undefined)
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
