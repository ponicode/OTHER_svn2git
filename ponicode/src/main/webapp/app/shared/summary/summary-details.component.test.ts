import * as summary_details_component from "app/shared/summary/summary-details.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as http from "@angular/common/http"

import * as migration_model from "app/shared/model/migration.model"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_details_component.DetailsCardComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_details_component.DetailsCardComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("loadHistory", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_details_component.DetailsCardComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.loadHistory()
        expect(result).toMatchSnapshot()
    })
})

describe("stopHistoryRefresh", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_details_component.DetailsCardComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.stopHistoryRefresh()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("cssClass", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_details_component.DetailsCardComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.WAITING)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.FAILED)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.DONE_WITH_WARNINGS)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.RUNNING)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.cssClass(null)
        expect(result).toMatchSnapshot()
    })
})
