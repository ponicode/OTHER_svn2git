import * as static_mapping_detail_component from "app/entities/static-mapping/static-mapping-detail.component"
import * as router from "@angular/router"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new static_mapping_detail_component.StaticMappingDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new static_mapping_detail_component.StaticMappingDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})
