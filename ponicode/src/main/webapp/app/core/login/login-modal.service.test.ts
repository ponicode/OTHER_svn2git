import * as login_modal_service from "app/core/login/login-modal.service"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as component_factory_resolver from "@angular/core/src/linker/component_factory_resolver"
import * as core from "@angular/core"
import * as modal_stack from "@ng-bootstrap/ng-bootstrap/modal/modal-stack"
import * as application_ref from "@angular/core/src/application_ref"
import * as scrollbar from "@ng-bootstrap/ng-bootstrap/util/scrollbar"
import * as modal_config from "@ng-bootstrap/ng-bootstrap/modal/modal-config"

// @ponicode
describe("open", () => {
    let inst: any
    let object: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new component_factory_resolver.ComponentFactoryResolver()
        object = [{ provide: false, multi: false, useExisting: "9876" }, null]
        inst2 = new application_ref.ApplicationRef()
        inst3 = new scrollbar.ScrollBar(56784)
        inst4 = new core.RendererFactory2()
        inst5 = new modal_stack.NgbModalStack(inst2, null, "bc23a9d531064583ace8f67dad60f6bb", inst3, inst4)
        inst6 = new modal_config.NgbModalConfig()
        inst7 = new ng_bootstrap.NgbModal(inst, core.Injector.create(object,undefined), inst5, inst6)
        inst8 = new login_modal_service.LoginModalService(inst7)
    })

    test("0", () => {
        let result: any = inst8.open()
        expect(result).toMatchSnapshot()
    })
})
