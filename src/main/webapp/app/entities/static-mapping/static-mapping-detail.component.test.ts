import * as static_mapping_detail_component from "app/entities/static-mapping/static-mapping-detail.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_detail_component.StaticMappingDetailComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
