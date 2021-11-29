import * as password_reset_finish_component from "app/account/password-reset/finish/password-reset-finish.component"
import * as password_reset_finish_service from "app/account/password-reset/finish/password-reset-finish.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as login_modal_service from "app/core/login/login-modal.service"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as injector from "@angular/core/src/di/injector"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as core from "@angular/core"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"
import * as router from "@angular/router"

describe("ngAfterViewInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let object: any
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
    let inst15: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_finish_service.PasswordResetFinishService(inst2)
        inst4 = new component_factory_resolver.ComponentFactoryResolver()
        object = [["Software Engineer", "Software Engineer", "Data Scientist", "Marketing", "Chief Product Officer"], ["Sales", "Data Scientist", "Data Scientist", "Data Scientist", "Software Engineer"], ["Marketing", "Marketing", "Chief Product Officer", "Marketing", "Marketing"], ["Software Engineer", "Software Engineer", "Chief Product Officer", "Software Engineer", "Marketing"]]
        inst5 = new application_ref.ApplicationRef()
        inst6 = new scrollbar.ScrollBar(12)
        inst7 = new core.RendererFactory2()
        inst8 = new modal_stack.NgbModalStack(inst5, null, 987650, inst6, inst7)
        inst9 = new modal_config.NgbModalConfig()
        inst10 = new ng_bootstrap.NgbModal(inst4, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst8, inst9)
        inst11 = new login_modal_service.LoginModalService(inst10)
        inst12 = new router.ActivatedRoute()
        inst13 = new core.ElementRef("a1969970175")
        inst14 = new core.Renderer()
        inst15 = new password_reset_finish_component.PasswordResetFinishComponent(inst3, inst11, inst12, inst13, inst14)
    })

    test("0", () => {
        let result: any = inst15.ngAfterViewInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let object: any
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
    let inst15: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_finish_service.PasswordResetFinishService(inst2)
        inst4 = new component_factory_resolver.ComponentFactoryResolver()
        object = { 0: { provide: false, multi: false, useFactory: () => "http://base.com", deps: undefined }, 1: { provide: true, multi: false, useFactory: () => "bc23a9d531064583ace8f67dad60f6bb", deps: undefined }, 2: { provide: false, multi: false, useFactory: () => "George", deps: undefined }, 3: { provide: true, multi: false, useFactory: () => "Software Engineer", deps: undefined }, 4: { provide: false, multi: false, useFactory: () => "Software Engineer", deps: undefined } }
        inst5 = new application_ref.ApplicationRef()
        inst6 = new scrollbar.ScrollBar(12)
        inst7 = new core.RendererFactory2()
        inst8 = new modal_stack.NgbModalStack(inst5, null, 12345, inst6, inst7)
        inst9 = new modal_config.NgbModalConfig()
        inst10 = new ng_bootstrap.NgbModal(inst4, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), inst8, inst9)
        inst11 = new login_modal_service.LoginModalService(inst10)
        inst12 = new router.ActivatedRoute()
        inst13 = new core.ElementRef(12345)
        inst14 = new core.Renderer()
        inst15 = new password_reset_finish_component.PasswordResetFinishComponent(inst3, inst11, inst12, inst13, inst14)
    })

    test("0", () => {
        let result: any = inst15.login()
        expect(result).toMatchSnapshot()
    })
})
