import * as profile_service from "app/layouts/profiles/profile.service"
import * as http from "@angular/common/http"

// @ponicode
describe("getProfileInfo", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new profile_service.ProfileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getProfileInfo()
        expect(result).toMatchSnapshot()
    })
})
