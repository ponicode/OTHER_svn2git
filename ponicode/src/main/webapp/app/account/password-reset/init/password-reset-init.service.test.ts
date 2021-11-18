import * as password_reset_init_service from "app/account/password-reset/init/password-reset-init.service"

// @ponicode
describe("save", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_reset_init_service.PasswordResetInitService("POST")
    })

    test("0", () => {
        let result: any = inst.save("something.example.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.save("email@Google.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.save("user@host:300")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.save("bed-free@tutanota.de")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.save("TestUpperCase@Example.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.save("")
        expect(result).toMatchSnapshot()
    })
})
