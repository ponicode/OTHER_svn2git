import * as mapping_detail_component from "app/entities/mapping/mapping-detail.component"

// @ponicode
describe("previousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_detail_component.MappingDetailComponent("https://croplands.org/app/a/reset?token=")
    })

    test("0", () => {
        let result: any = inst.previousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_detail_component.MappingDetailComponent("http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
