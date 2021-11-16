import * as error_component from "app/layouts/error/error.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new error_component.ErrorComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
