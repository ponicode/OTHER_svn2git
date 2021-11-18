import * as migration_removed_file_detail_component from "app/entities/migration-removed-file/migration-removed-file-detail.component"

// @ponicode
describe("previousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_detail_component.MigrationRemovedFileDetailComponent("https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst.previousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_detail_component.MigrationRemovedFileDetailComponent("http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
