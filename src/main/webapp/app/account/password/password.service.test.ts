import * as password_service from "app/account/password/password.service"

// @ponicode
describe("save", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_service.PasswordService(undefined)
    })

    test("0", () => {
        let result: any = inst.save("accessdenied4u", 123)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.save("$p3onyycat", "user123")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.save("accessdenied4u", "username")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.save("YouarenotAllowed2Use", "user_name")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.save("accessdenied4u", "user name")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.save("", "")
        expect(result).toMatchSnapshot()
    })
})
