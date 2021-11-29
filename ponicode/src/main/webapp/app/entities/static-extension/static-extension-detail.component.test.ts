import * as static_extension_detail_component from "app/entities/static-extension/static-extension-detail.component"
import * as router from "@angular/router"

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new static_extension_detail_component.StaticExtensionDetailComponent(inst)
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
        inst2 = new static_extension_detail_component.StaticExtensionDetailComponent(inst)
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
        inst2 = new static_extension_detail_component.StaticExtensionDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})
