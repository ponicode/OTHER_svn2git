import * as static_mapping_update_component from "app/entities/static-mapping/static-mapping-update.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"

// @ponicode
describe("save", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(undefined)
        inst2 = new static_mapping_update_component.StaticMappingUpdateComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.save()
        expect(result).toMatchSnapshot()
    })
})
  })
})
    })
})
