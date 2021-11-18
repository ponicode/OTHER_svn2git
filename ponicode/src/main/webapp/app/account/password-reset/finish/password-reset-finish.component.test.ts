import * as password_reset_finish_component from "app/account/password-reset/finish/password-reset-finish.component"
import * as password_reset_finish_service from "app/account/password-reset/finish/password-reset-finish.service"
import * as login_modal_service from "app/core/login/login-modal.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new password_reset_finish_service.PasswordResetFinishService(12345)
        inst2 = new login_modal_service.LoginModalService("a1969970175")
        inst3 = new password_reset_finish_component.PasswordResetFinishComponent(inst, inst2, "https://twitter.com/path?abc", "Jean-Philippe", true)
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
        inst = new password_reset_finish_service.PasswordResetFinishService("a1969970175")
        inst2 = new login_modal_service.LoginModalService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new password_reset_finish_component.PasswordResetFinishComponent(inst, inst2, "http://www.example.com/route/123?foo=bar", "Jean-Philippe", true)
    })

    test("0", () => {
        let result: any = inst3.login()
        expect(result).toMatchSnapshot()
    })
})
