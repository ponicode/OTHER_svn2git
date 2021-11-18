import * as user_management_delete_dialog_component from "app/admin/user-management/user-management-delete-dialog.component"
import * as user_service from "app/core/user/user.service"

describe("clear", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new user_service.UserService(56784)
        inst2 = new user_management_delete_dialog_component.UserMgmtDeleteDialogComponent(inst, false, "c466a48309794261b64a4f02cfcc3d64")
    })

    test("0", () => {
        let result: any = inst2.clear()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("confirmDelete", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new user_service.UserService(12)
        inst2 = new user_management_delete_dialog_component.UserMgmtDeleteDialogComponent(inst, false, "c466a48309794261b64a4f02cfcc3d64")
    })

    test("0", () => {
        let result: any = inst2.confirmDelete("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete("https://accounts.google.com/o/oauth2/revoke?token=%s")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete("https://api.telegram.org/")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.confirmDelete("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.confirmDelete("")
        expect(result).toMatchSnapshot()
    })
})
