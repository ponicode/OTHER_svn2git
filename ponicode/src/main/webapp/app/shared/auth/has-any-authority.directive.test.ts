import * as has_any_authority_directive from "app/shared/auth/has-any-authority.directive"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"
import * as core from "@angular/core"

// @ponicode
describe("updateView", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
        inst5 = new core.TemplateRef()
        inst6 = new core.ViewContainerRef()
        inst7 = new has_any_authority_directive.HasAnyAuthorityDirective(inst4, inst5, inst6)
    })

    test("0", () => {
        let result: any = inst7.updateView()
        expect(result).toMatchSnapshot()
    })
})
