import * as static_mapping_delete_dialog_component from "app/entities/static-mapping/static-mapping-delete-dialog.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"

describe("confirmDelete", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(undefined)
        inst2 = new static_mapping_delete_dialog_component.StaticMappingDeleteDialogComponent(inst, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.confirmDelete("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete(987650)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete(12)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.confirmDelete(12345)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.confirmDelete(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_delete_dialog_component.StaticMappingDeletePopupComponent(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
