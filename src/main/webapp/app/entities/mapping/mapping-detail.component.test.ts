import * as mapping_detail_component from "app/entities/mapping/mapping-detail.component"

// @ponicode
describe("previousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_detail_component.MappingDetailComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.previousState()
        expect(result).toMatchSnapshot()
    })
})
