import * as migration_history_detail_component from "app/entities/migration-history/migration-history-detail.component"
import * as router from "@angular/router"

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new migration_history_detail_component.MigrationHistoryDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new migration_history_detail_component.MigrationHistoryDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new migration_history_detail_component.MigrationHistoryDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})
