import * as password_reset_init_component from "app/account/password-reset/init/password-reset-init.component"
import * as password_reset_init_service from "app/account/password-reset/init/password-reset-init.service"

describe("ngAfterViewInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new password_reset_init_service.PasswordResetInitService("a1969970175")
        inst2 = new password_reset_init_component.PasswordResetInitComponent(inst, "George", true)
    })

    test("0", () => {
        let result: any = inst2.ngAfterViewInit()
        expect(result).toMatchSnapshot()
    })
})

describe("requestReset", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new password_reset_init_service.PasswordResetInitService(987650)
        inst2 = new password_reset_init_component.PasswordResetInitComponent(inst, "Pierre Edouard", true)
    })

    test("0", () => {
        let result: any = inst2.requestReset()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new password_reset_init_service.PasswordResetInitService(12345)
        inst2 = new password_reset_init_component.PasswordResetInitComponent(inst, "Jean-Philippe", true)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
