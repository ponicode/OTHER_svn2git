import * as static_extension_route from "app/entities/static-extension/static-extension.route"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"

// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new static_extension_route.StaticExtensionResolve(inst)
    })

    test("0", () => {
        let result: any = inst2.resolve("http://base.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.resolve("https://api.telegram.org/", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.resolve("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.resolve("ponicode.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.resolve("http://www.croplands.org/account/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.resolve("", "")
        expect(result).toMatchSnapshot()
    })
})
