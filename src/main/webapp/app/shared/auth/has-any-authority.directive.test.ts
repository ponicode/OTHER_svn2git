import * as has_any_authority_directive from "app/shared/auth/has-any-authority.directive"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

// @ponicode
describe("updateView", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
        inst3 = new has_any_authority_directive.HasAnyAuthorityDirective(inst2, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.updateView()
        expect(result).toMatchSnapshot()
    })
})
