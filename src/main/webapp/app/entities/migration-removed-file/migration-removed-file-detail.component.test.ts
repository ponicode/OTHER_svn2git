import * as migration_removed_file_detail_component from "app/entities/migration-removed-file/migration-removed-file-detail.component"

// @ponicode
describe("previousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_detail_component.MigrationRemovedFileDetailComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.previousState()
        expect(result).toMatchSnapshot()
    })
})
