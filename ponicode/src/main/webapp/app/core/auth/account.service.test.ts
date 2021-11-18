import * as account_service from "app/core/auth/account.service"

// @ponicode
describe("get", () => {
    let inst: any

    beforeEach(() => {
        inst = new account_service.AccountService("POST")
    })

    test("0", () => {
        let result: any = inst.get()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("save", () => {
    let inst: any

    beforeEach(() => {
        inst = new account_service.AccountService("DELETE")
    })

    test("0", () => {
        let result: any = inst.save("66167549")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.save("07981006")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.save("95430333")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.save("30615264")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.save("")
        expect(result).toMatchSnapshot()
    })
})
