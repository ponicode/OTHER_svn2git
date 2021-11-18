import * as has_any_authority_directive from "app/shared/auth/has-any-authority.directive"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

// @ponicode
describe("updateView", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
        inst3 = new has_any_authority_directive.HasAnyAuthorityDirective(inst2, false, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst3.updateView()
        expect(result).toMatchSnapshot()
    })
})
