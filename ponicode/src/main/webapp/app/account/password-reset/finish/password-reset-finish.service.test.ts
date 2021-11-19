import * as password_reset_finish_service from "app/account/password-reset/finish/password-reset-finish.service"
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
        inst3 = new password_reset_finish_service.PasswordResetFinishService(inst2)
    })

    test("0", () => {
        let result: any = inst3.save("YouarenotAllowed2Use")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.save("NoWiFi4you")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.save("accessdenied4u")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.save("$p3onyycat")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.save("")
        expect(result).toMatchSnapshot()
    })
})
