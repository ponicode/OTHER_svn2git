import * as migration_update_component from "app/entities/migration/migration-update.component"
import * as migration_service from "app/entities/migration/migration.service"

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})
