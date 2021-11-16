import * as migration_history_detail_component from "app/entities/migration-history/migration-history-detail.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_history_detail_component.MigrationHistoryDetailComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
