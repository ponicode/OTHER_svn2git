import * as settings_component from "app/account/settings/settings.component"
import * as account_service from "app/core/auth/account.service"
import * as principal_service from "app/core/auth/principal.service"
import * as language_helper from "app/core/language/language.helper"

// @ponicode
describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst5 = new settings_component.SettingsComponent(inst, inst3, undefined, inst4)
    })

    test("0", () => {
        let result: any = inst5.save()
        expect(result).toMatchSnapshot()
    })
})
  })
})
