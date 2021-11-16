import * as login_modal_service from "app/core/login/login-modal.service"

// @ponicode
describe("open", () => {
    let inst: any

    beforeEach(() => {
        inst = new login_modal_service.LoginModalService(undefined)
    })

    test("0", () => {
        let result: any = inst.open()
        expect(result).toMatchSnapshot()
    })
})
