import * as user_management_detail_component from "app/admin/user-management/user-management-detail.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_management_detail_component.UserMgmtDetailComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
