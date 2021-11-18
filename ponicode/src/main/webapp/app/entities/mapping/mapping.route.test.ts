import * as mapping_route from "app/entities/mapping/mapping.route"
import * as mapping_service from "app/entities/mapping/mapping.service"

// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new mapping_route.MappingResolve(inst)
    })

    test("0", () => {
        let result: any = inst2.resolve("https://api.telegram.org/bot", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.resolve("https://croplands.org/app/a/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.resolve("https://accounts.google.com/o/oauth2/revoke?token=%s", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.resolve("https://", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.resolve("https://api.telegram.org/", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.resolve("", "")
        expect(result).toMatchSnapshot()
    })
})
