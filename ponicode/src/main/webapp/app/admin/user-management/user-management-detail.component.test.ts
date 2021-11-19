import * as user_management_detail_component from "app/admin/user-management/user-management-detail.component"
import * as router from "@angular/router"

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new user_management_detail_component.UserMgmtDetailComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
