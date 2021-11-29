import * as password_reset_init_component from "app/account/password-reset/init/password-reset-init.component"
import * as password_reset_init_service from "app/account/password-reset/init/password-reset-init.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as core from "@angular/core"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_init_service.PasswordResetInitService(inst2)
        inst4 = new core.ElementRef("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new core.Renderer()
        inst6 = new password_reset_init_component.PasswordResetInitComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("ngAfterViewInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_init_service.PasswordResetInitService(inst2)
        inst4 = new core.ElementRef(56784)
        inst5 = new core.Renderer()
        inst6 = new password_reset_init_component.PasswordResetInitComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.ngAfterViewInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("requestReset", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_init_service.PasswordResetInitService(inst2)
        inst4 = new core.ElementRef(987650)
        inst5 = new core.Renderer()
        inst6 = new password_reset_init_component.PasswordResetInitComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.requestReset()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngAfterViewInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_init_service.PasswordResetInitService(inst2)
        inst4 = new core.ElementRef(12345)
        inst5 = new core.Renderer()
        inst6 = new password_reset_init_component.PasswordResetInitComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.ngAfterViewInit()
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

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_init_service.PasswordResetInitService(inst2)
        inst4 = new core.ElementRef("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new core.Renderer()
        inst6 = new password_reset_init_component.PasswordResetInitComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
