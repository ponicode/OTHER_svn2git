import * as password_reset_init_component from "app/account/password-reset/init/password-reset-init.component"
import * as password_reset_init_service from "app/account/password-reset/init/password-reset-init.service"

// @ponicode
describe("requestReset", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new password_reset_init_service.PasswordResetInitService(undefined)
        inst2 = new password_reset_init_component.PasswordResetInitComponent(inst, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.requestReset()
        expect(result).toMatchSnapshot()
    })
})
})
})
