import * as password_reset_init_service from "app/account/password-reset/init/password-reset-init.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

// @ponicode
describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new password_reset_init_service.PasswordResetInitService(inst2)
    })

    test("0", () => {
        let result: any = inst3.save("user@host:300")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.save("TestUpperCase@Example.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.save("something.example.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.save("bed-free@tutanota.de")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.save("user1+user2@mycompany.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.save("")
        expect(result).toMatchSnapshot()
    })
})
