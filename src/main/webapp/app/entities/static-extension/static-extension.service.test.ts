import * as static_extension_service from "app/entities/static-extension/static-extension.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(undefined)
    })

    test("0", () => {
        let result: any = inst.find(12345)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find(12)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(56784)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.find(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(undefined)
    })

    test("0", () => {
        let result: any = inst.update({ id: "a1969970175", value: "elio@example.com", description: "my metering label", enabled: true, name: "Michael" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: "bc23a9d531064583ace8f67dad60f6bb", value: "elio@example.com", description: "No description.", enabled: true, name: "Michael" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: 56784, value: "Elio", description: "No description.", enabled: false, name: "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: "a1969970175", value: "elio@example.com", description: "policy_abc", enabled: false, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: "a1969970175", value: "Dillenberg", description: "No description.", enabled: true, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: NaN, value: "", description: "", enabled: false, name: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(undefined)
    })

    test("0", () => {
        let result: any = inst.query(undefined)
        expect(result).toMatchSnapshot()
    })
})
