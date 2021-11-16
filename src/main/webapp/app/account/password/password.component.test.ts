import * as password_component from "app/account/password/password.component"
import * as password_service from "app/account/password/password.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

// @ponicode
describe("changePassword", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new password_service.PasswordService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new password_component.PasswordComponent(inst, inst3)
    })

    test("0", () => {
        let result: any = inst4.changePassword()
        expect(result).toMatchSnapshot()
    })
})
