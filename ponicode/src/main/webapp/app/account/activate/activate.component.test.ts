import * as activate_component from "app/account/activate/activate.component"
import * as activate_service from "app/account/activate/activate.service"
import * as login_modal_service from "app/core/login/login-modal.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new activate_service.ActivateService(987650)
        inst2 = new login_modal_service.LoginModalService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new activate_component.ActivateComponent(inst, inst2, "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst3.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new activate_service.ActivateService("a1969970175")
        inst2 = new login_modal_service.LoginModalService(12345)
        inst3 = new activate_component.ActivateComponent(inst, inst2, "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst3.login()
        expect(result).toMatchSnapshot()
    })
})
