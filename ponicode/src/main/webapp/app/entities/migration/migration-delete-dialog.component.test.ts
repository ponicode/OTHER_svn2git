import * as migration_delete_dialog_component from "app/entities/migration/migration-delete-dialog.component"
import * as migration_service from "app/entities/migration/migration.service"

describe("clear", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new migration_delete_dialog_component.MigrationDeleteDialogComponent(inst, true, "9876")
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
        inst = new migration_service.MigrationService(56784)
        inst2 = new migration_delete_dialog_component.MigrationDeleteDialogComponent(inst, true, "c466a48309794261b64a4f02cfcc3d64")
    })

    test("0", () => {
        let result: any = inst2.confirmDelete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete(1)
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

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_delete_dialog_component.MigrationDeletePopupComponent("https://api.telegram.org/bot", "https://twitter.com/path?abc", false)
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
        inst = new migration_delete_dialog_component.MigrationDeletePopupComponent("https://twitter.com/path?abc", "https://api.telegram.org/", false)
    })

    test("0", () => {
        let result: any = inst.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})
