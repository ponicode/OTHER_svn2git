import * as password_reset_finish_service from "app/account/password-reset/finish/password-reset-finish.service"

// @ponicode
describe("save", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_reset_finish_service.PasswordResetFinishService("POST")
    })

    test("0", () => {
        let result: any = inst.save("accessdenied4u")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.save("$p3onyycat")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.save("!Lov3MyPianoPony")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.save("NoWiFi4you")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.save("")
        expect(result).toMatchSnapshot()
    })
})
