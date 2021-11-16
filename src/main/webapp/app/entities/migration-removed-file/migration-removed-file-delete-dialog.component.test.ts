import * as migration_removed_file_delete_dialog_component from "app/entities/migration-removed-file/migration-removed-file-delete-dialog.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_delete_dialog_component.MigrationRemovedFileDeletePopupComponent(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
e_delete_dialog_component.MigrationRemovedFileDeleteDialogComponent(inst, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.clear()
        expect(result).toMatchSnapshot()
    })
})
Snapshot()
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
        let result: any = inst2.confirmDelete("bc23a9d531064583ace8f67dad60f6bb")
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
