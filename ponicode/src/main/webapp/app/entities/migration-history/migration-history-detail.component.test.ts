import * as migration_history_detail_component from "app/entities/migration-history/migration-history-detail.component"

// @ponicode
describe("previousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_history_detail_component.MigrationHistoryDetailComponent("Www.GooGle.com")
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
        inst = new migration_history_detail_component.MigrationHistoryDetailComponent("ponicode.com")
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
