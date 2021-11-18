import * as static_mapping_detail_component from "app/entities/static-mapping/static-mapping-detail.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_detail_component.StaticMappingDetailComponent("https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("previousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_detail_component.StaticMappingDetailComponent("ponicode.com")
    })

    test("0", () => {
        let result: any = inst.previousState()
        expect(result).toMatchSnapshot()
    })
})
