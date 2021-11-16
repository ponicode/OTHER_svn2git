import * as static_mapping_component from "app/entities/static-mapping/static-mapping.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

// @ponicode
describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_mapping_component.StaticMappingComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})
  })
})
