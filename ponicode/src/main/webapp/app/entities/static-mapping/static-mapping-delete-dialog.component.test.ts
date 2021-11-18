import * as static_mapping_delete_dialog_component from "app/entities/static-mapping/static-mapping-delete-dialog.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"

describe("confirmDelete", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(56784)
        inst2 = new static_mapping_delete_dialog_component.StaticMappingDeleteDialogComponent(inst, true, "da7588892")
    })

    test("0", () => {
        let result: any = inst2.confirmDelete(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete(-100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.confirmDelete(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("clear", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService("a1969970175")
        inst2 = new static_mapping_delete_dialog_component.StaticMappingDeleteDialogComponent(inst, false, "da7588892")
    })

    test("0", () => {
        let result: any = inst2.clear()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_delete_dialog_component.StaticMappingDeletePopupComponent("www.google.com", "ponicode.com", false)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_delete_dialog_component.StaticMappingDeletePopupComponent("https://twitter.com/path?abc", "https://", true)
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
