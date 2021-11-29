import * as csrf_service from "app/core/auth/csrf.service"
import * as ngx_cookie from "ngx-cookie"
import * as cookie_options_provider from "ngx-cookie/lib/cookie-options-provider"
import * as core from "@angular/core"

// @ponicode
describe("getCSRF", () => {
    let object: any
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        object = [["Software Engineer", "Software Engineer"], ["Chief Product Officer", "Marketing"], ["Sales", "Software Engineer"], ["Data Scientist", "Sales"], ["Software Engineer", "Sales"]]
        inst = new cookie_options_provider.CookieOptionsProvider({ path: undefined, domain: "com", expires: undefined, secure: true, httpOnly: false, storeUnencoded: false }, core.Injector.create({ providers: object, parent: undefined, name: undefined }))
        inst2 = new ngx_cookie.CookieService(inst)
        inst3 = new csrf_service.CSRFService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getCSRF(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getCSRF("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getCSRF("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getCSRF("Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getCSRF("")
        expect(result).toMatchSnapshot()
    })
})
