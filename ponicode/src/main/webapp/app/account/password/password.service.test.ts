import * as password_service from "app/account/password/password.service"
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
        inst3 = new password_service.PasswordService(inst2)
    })

    test("0", () => {
        let result: any = inst3.save("accessdenied4u", "YouarenotAllowed2Use")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.save("!Lov3MyPianoPony", "YouarenotAllowed2Use")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.save("NoWiFi4you", "accessdenied4u")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.save("!Lov3MyPianoPony", "!Lov3MyPianoPony")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.save("accessdenied4u", "accessdenied4u")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.save("", "")
        expect(result).toMatchSnapshot()
    })
})
