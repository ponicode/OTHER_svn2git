import * as mapping_detail_component from "app/entities/mapping/mapping-detail.component"
import * as router from "@angular/router"

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new mapping_detail_component.MappingDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new mapping_detail_component.MappingDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
