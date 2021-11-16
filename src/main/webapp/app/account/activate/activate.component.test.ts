import * as activate_component from "app/account/activate/activate.component"
import * as activate_service from "app/account/activate/activate.service"
import * as login_modal_service from "app/core/login/login-modal.service"

// @ponicode
describe("login", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new activate_service.ActivateService(undefined)
        inst2 = new login_modal_service.LoginModalService(undefined)
        inst3 = new activate_component.ActivateComponent(inst, inst2, undefined)
    })

    test("0", () => {
        let result: any = inst3.login()
        expect(result).toMatchSnapshot()
    })
})
