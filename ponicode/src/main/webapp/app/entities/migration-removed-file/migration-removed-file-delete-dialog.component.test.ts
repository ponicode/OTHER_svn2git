import * as migration_removed_file_delete_dialog_component from "app/entities/migration-removed-file/migration-removed-file-delete-dialog.component"

import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_delete_dialog_component.MigrationRemovedFileDeletePopupComponent("https://twitter.com/path?abc", "https://api.telegram.org/", false)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("confirmDelete", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("a1969970175")
        inst2 = new migration_removed_file_delete_dialog_component.MigrationRemovedFileDeleteDialogComponent(inst, true, "c466a48309794261b64a4f02cfcc3d64")
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
        let result: any = inst2.confirmDelete(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.confirmDelete(0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.confirmDelete(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("clear", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(12345)
        inst2 = new migration_removed_file_delete_dialog_component.MigrationRemovedFileDeleteDialogComponent(inst, false, "12345")
    })

    test("0", () => {
        let result: any = inst2.clear()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnDestroy", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_delete_dialog_component.MigrationRemovedFileDeletePopupComponent("https://croplands.org/app/a/reset?token=", "http://base.com", true)
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
