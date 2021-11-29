import * as migration_removed_file_detail_component from "app/entities/migration-removed-file/migration-removed-file-detail.component"
import * as router from "@angular/router"

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new migration_removed_file_detail_component.MigrationRemovedFileDetailComponent(inst)
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
        inst2 = new migration_removed_file_detail_component.MigrationRemovedFileDetailComponent(inst)
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
        inst2 = new migration_removed_file_detail_component.MigrationRemovedFileDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})
