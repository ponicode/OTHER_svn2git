import * as migration_removed_file_component from "app/entities/migration-removed-file/migration-removed-file.component"
import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_removed_file_component.MigrationRemovedFileComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_removed_file_component.MigrationRemovedFileComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("Invalid data: No data found in any of the field(s)!!!")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("TypeError exception should be raised")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("unexpected error")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("Exception not raised: %s")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("Unknown Error")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})
