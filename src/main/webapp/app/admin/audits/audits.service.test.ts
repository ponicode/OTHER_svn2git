import * as audits_service from "app/admin/audits/audits.service"

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
    })

    test("0", () => {
        let result: any = inst.query({ fromDate: "32-01-2020", toDate: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.query({ fromDate: "01-13-2020", toDate: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.query(12345)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.query("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.query("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.query(Infinity)
        expect(result).toMatchSnapshot()
    })
})
