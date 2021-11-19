import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"

describe("get", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
    })

    test("0", () => {
        let result: any = inst3.get()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
    })

    test("0", () => {
        let result: any = inst3.save("66167549")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.save("30615264")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.save("04079831")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.save("07981006")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.save("95430333")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.save("")
        expect(result).toMatchSnapshot()
    })
})
