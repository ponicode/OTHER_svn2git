import * as password_reset_finish_component from "app/account/password-reset/finish/password-reset-finish.component"
import * as password_reset_finish_service from "app/account/password-reset/finish/password-reset-finish.service"
import * as login_modal_service from "app/core/login/login-modal.service"

describe("finishReset", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new password_reset_finish_service.PasswordResetFinishService(undefined)
        inst2 = new login_modal_service.LoginModalService(undefined)
        inst3 = new password_reset_finish_component.PasswordResetFinishComponent(inst, inst2, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.finishReset()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new password_reset_finish_service.PasswordResetFinishService(undefined)
        inst2 = new login_modal_service.LoginModalService(undefined)
        inst3 = new password_reset_finish_component.PasswordResetFinishComponent(inst, inst2, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.login()
        expect(result).toMatchSnapshot()
    })
})
