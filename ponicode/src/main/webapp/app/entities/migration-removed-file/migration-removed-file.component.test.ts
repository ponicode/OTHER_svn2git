import * as migration_removed_file_component from "app/entities/migration-removed-file/migration-removed-file.component"
import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService(987650)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_removed_file_component.MigrationRemovedFileComponent(inst, 12345, "bc23a9d531064583ace8f67dad60f6bb", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("a1969970175")
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_removed_file_component.MigrationRemovedFileComponent(inst, "a1969970175", "9876", inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(12)
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_removed_file_component.MigrationRemovedFileComponent(inst, 12345, "9876", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
