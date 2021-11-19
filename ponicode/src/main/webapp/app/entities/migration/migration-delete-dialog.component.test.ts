import * as migration_delete_dialog_component from "app/entities/migration/migration-delete-dialog.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as http from "@angular/common/http"
import * as ng_bootstrap from "@ng-bootstrap/ng-bootstrap"
import * as ng_jhipster from "ng-jhipster"

describe("clear", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new migration_delete_dialog_component.MigrationDeleteDialogComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.clear()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("confirmDelete", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new migration_delete_dialog_component.MigrationDeleteDialogComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.confirmDelete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.confirmDelete(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.confirmDelete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.confirmDelete(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.confirmDelete(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.confirmDelete(Infinity)
        expect(result).toMatchSnapshot()
    })
})
