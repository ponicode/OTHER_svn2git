import * as static_extension_detail_component from "app/entities/static-extension/static-extension-detail.component"

// @ponicode
describe("previousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_detail_component.StaticExtensionDetailComponent("http://base.com")
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
        inst = new static_extension_detail_component.StaticExtensionDetailComponent("Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
