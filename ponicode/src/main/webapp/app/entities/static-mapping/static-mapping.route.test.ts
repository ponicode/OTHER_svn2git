import * as static_mapping_route from "app/entities/static-mapping/static-mapping.route"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"

// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(987650)
        inst2 = new static_mapping_route.StaticMappingResolve(inst)
    })

    test("0", () => {
        let result: any = inst2.resolve("http://www.example.com/route/123?foo=bar", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.resolve("www.google.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.resolve("ponicode.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.resolve("https://croplands.org/app/a/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.resolve("https://accounts.google.com/o/oauth2/revoke?token=%s", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.resolve("", "")
        expect(result).toMatchSnapshot()
    })
})
