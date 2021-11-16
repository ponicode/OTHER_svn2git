import * as activate_service from "app/account/activate/activate.service"

// @ponicode
describe("get", () => {
    let inst: any

    beforeEach(() => {
        inst = new activate_service.ActivateService(undefined)
    })

    test("0", () => {
        let result: any = inst.get("Dillenberg")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.get("Elio")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.get("elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.get("")
        expect(result).toMatchSnapshot()
    })
})
