import * as user_management_delete_dialog_component from "app/admin/user-management/user-management-delete-dialog.component"
import * as user_service from "app/core/user/user.service"

describe("clear", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
        inst2 = new user_management_delete_dialog_component.UserMgmtDeleteDialogComponent(inst, undefined, undefined)
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
        inst = new user_service.UserService(undefined)
        inst2 = new user_management_delete_dialog_component.UserMgmtDeleteDialogComponent(inst, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.confirmDelete(123)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.confirmDelete(56784)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.confirmDelete(987650)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.confirmDelete("username")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.confirmDelete(false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.confirmDelete(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
