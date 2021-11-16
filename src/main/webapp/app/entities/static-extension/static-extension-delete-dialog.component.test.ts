import * as static_extension_delete_dialog_component from "app/entities/static-extension/static-extension-delete-dialog.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_delete_dialog_component.StaticExtensionDeletePopupComponent(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
component.StaticExtensionDeleteDialogComponent(inst, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.confirmDelete(56784)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete(12)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete(12345)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.confirmDelete(987650)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.confirmDelete(NaN)
        expect(result).toMatchSnapshot()
    })
})
