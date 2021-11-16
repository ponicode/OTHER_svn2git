import * as migration_delete_dialog_component from "app/entities/migration/migration-delete-dialog.component"
import * as migration_service from "app/entities/migration/migration.service"

describe("clear", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_delete_dialog_component.MigrationDeleteDialogComponent(inst, undefined, undefined)
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
        inst = new migration_delete_dialog_component.MigrationDeletePopupComponent(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
 let result: any = inst2.confirmDelete(12345)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete(987650)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete(12)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.confirmDelete("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.confirmDelete(NaN)
        expect(result).toMatchSnapshot()
    })
})
