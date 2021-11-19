import * as activate_component from "app/account/activate/activate.component"
import * as activate_service from "app/account/activate/activate.service"
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

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new activate_service.ActivateService(inst2)
        inst4 = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: false, multi: undefined, useValue: false }, ["Chief Product Officer"], null]
        inst5 = new application_ref.ApplicationRef()
        inst6 = new scrollbar.ScrollBar("a1969970175")
        inst7 = new core.RendererFactory2()
        inst8 = new modal_stack.NgbModalStack(inst5, null, "bc23a9d531064583ace8f67dad60f6bb", inst6, inst7)
        inst9 = new modal_config.NgbModalConfig()
        inst10 = new ng_bootstrap.NgbModal(inst4, injector.Injector.create({ providers: object, parent: undefined, name: "Michael" }), inst8, inst9)
        inst11 = new login_modal_service.LoginModalService(inst10)
        inst12 = new router.ActivatedRoute()
        inst13 = new activate_component.ActivateComponent(inst3, inst11, inst12)
    })

    test("0", () => {
        let result: any = inst13.login()
        expect(result).toMatchSnapshot()
    })
})
