import * as summary_details_component from "app/shared/summary/summary-details.component"
import * as migration_service from "app/entities/migration/migration.service"

import * as migration_model from "app/shared/model/migration.model"
describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_details_component.DetailsCardComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("loadHistory", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_details_component.DetailsCardComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.loadHistory()
        expect(result).toMatchSnapshot()
    })
})

describe("stopHistoryRefresh", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_details_component.DetailsCardComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.stopHistoryRefresh()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("cssClass", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_details_component.DetailsCardComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.cssClass(migration_model.StatusEnum.DONE)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.cssClass(migration_model.StatusEnum.RUNNING)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.cssClass(migration_model.StatusEnum.IGNORED)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.cssClass(migration_model.StatusEnum.DONE_WITH_WARNINGS)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.cssClass(migration_model.StatusEnum.WAITING)
        expect(result).toMatchSnapshot()
    })
})
