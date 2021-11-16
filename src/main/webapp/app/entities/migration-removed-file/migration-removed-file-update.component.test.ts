import * as migration_removed_file_update_component from "app/entities/migration-removed-file/migration-removed-file-update.component"
import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
import * as migration_service from "app/entities/migration/migration.service"

describe("previousState", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(undefined, inst, inst2, undefined)
    })

    test("0", () => {
        let result: any = inst3.previousState()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(undefined, inst, inst2, undefined)
    })

    test("0", () => {
        let result: any = inst3.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(undefined, inst, inst2, undefined)
    })

    test("0", () => {
        let result: any = inst3.onError("To force deletion of the LAG use delete_force: True")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.onError("Message recipient is not the grader, the person being graded, or the controller")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.onError("Invalid Invitation Token.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.onError("Connection is closed")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.onError("No os dependencies found. ")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.onError("")
        expect(result).toMatchSnapshot()
    })
})
