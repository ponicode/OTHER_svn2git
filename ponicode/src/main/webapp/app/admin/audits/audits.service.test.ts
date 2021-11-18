import * as audits_service from "app/admin/audits/audits.service"

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new audits_service.AuditsService("POST")
    })

    test("0", () => {
        let result: any = inst.query(404)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.query(400)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.query(500)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.query(200)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.query(Infinity)
        expect(result).toMatchSnapshot()
    })
})
