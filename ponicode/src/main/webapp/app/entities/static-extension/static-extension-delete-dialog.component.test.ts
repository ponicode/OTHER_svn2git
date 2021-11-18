import * as static_extension_delete_dialog_component from "app/entities/static-extension/static-extension-delete-dialog.component"

import * as static_extension_service from "app/entities/static-extension/static-extension.service"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_delete_dialog_component.StaticExtensionDeletePopupComponent("https://croplands.org/app/a/reset?token=", "www.google.com", false)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("clear", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(987650)
        inst2 = new static_extension_delete_dialog_component.StaticExtensionDeleteDialogComponent(inst, true, "c466a48309794261b64a4f02cfcc3d64")
    })

    test("0", () => {
        let result: any = inst2.clear()
        expect(result).toMatchSnapshot()
    })
})

describe("confirmDelete", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("a1969970175")
        inst2 = new static_extension_delete_dialog_component.StaticExtensionDeleteDialogComponent(inst, true, "9876")
    })

    test("0", () => {
        let result: any = inst2.confirmDelete(-100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete(1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_delete_dialog_component.StaticExtensionDeletePopupComponent("https://croplands.org/app/a/reset?token=", "https://accounts.google.com/o/oauth2/revoke?token=%s", false)
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
