import * as user_management_delete_dialog_component from "app/admin/user-management/user-management-delete-dialog.component"
import * as user_service from "app/core/user/user.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
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
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new user_management_delete_dialog_component.UserMgmtDeleteDialogComponent(inst3, inst4, inst5)
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
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
        inst4 = new ng_bootstrap.NgbActiveModal()
        inst5 = new ng_jhipster.JhiEventManager()
        inst6 = new user_management_delete_dialog_component.UserMgmtDeleteDialogComponent(inst3, inst4, inst5)
    })

    test("0", () => {
        let result: any = inst6.confirmDelete("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.confirmDelete("https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.confirmDelete("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.confirmDelete("http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.confirmDelete("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.confirmDelete("")
        expect(result).toMatchSnapshot()
    })
})
