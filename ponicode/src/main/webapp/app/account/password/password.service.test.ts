import * as password_service from "app/account/password/password.service"

// @ponicode
describe("save", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_service.PasswordService("POST")
    })

    test("0", () => {
        let result: any = inst.save("!Lov3MyPianoPony", "$p3onyycat")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.save("NoWiFi4you", "accessdenied4u")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.save("$p3onyycat", "!Lov3MyPianoPony")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.save("$p3onyycat", "YouarenotAllowed2Use")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.save("YouarenotAllowed2Use", "NoWiFi4you")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.save("", "")
        expect(result).toMatchSnapshot()
    })
})
