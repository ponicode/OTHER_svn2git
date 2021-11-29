import * as password_component from "app/account/password/password.component"
import * as password_service from "app/account/password/password.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_service.PasswordService(inst2)
        inst4 = new backend.HttpHandler()
        inst5 = new http.HttpClient(inst4)
        inst6 = new account_service.AccountService(inst5)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new password_component.PasswordComponent(inst3, inst7)
    })

    test("0", () => {
        let result: any = inst8.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("changePassword", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_service.PasswordService(inst2)
        inst4 = new backend.HttpHandler()
        inst5 = new http.HttpClient(inst4)
        inst6 = new account_service.AccountService(inst5)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new password_component.PasswordComponent(inst3, inst7)
    })

    test("0", () => {
        let result: any = inst8.changePassword()
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

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_service.PasswordService(inst2)
        inst4 = new backend.HttpHandler()
        inst5 = new http.HttpClient(inst4)
        inst6 = new account_service.AccountService(inst5)
        inst7 = new principal_service.Principal(inst6)
        inst8 = new password_component.PasswordComponent(inst3, inst7)
    })

    test("0", () => {
        let result: any = inst8.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
