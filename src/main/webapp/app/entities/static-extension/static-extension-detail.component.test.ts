import * as static_extension_detail_component from "app/entities/static-extension/static-extension-detail.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_detail_component.StaticExtensionDetailComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
    })
})
