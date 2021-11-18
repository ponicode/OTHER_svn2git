import * as static_extension_service from "app/entities/static-extension/static-extension.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("POST")
    })

    test("0", () => {
        let result: any = inst.find(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.find(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("DELETE")
    })

    test("0", () => {
        let result: any = inst.update({ id: undefined, value: undefined, description: undefined, enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: 0, value: undefined, description: "policy_abc", enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: undefined, value: undefined, description: "This is group1", enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: undefined, value: "Elio", description: "Organize files in your directory instantly, ", enabled: true, name: "Pierre Edouard" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: undefined, value: "Dillenberg", description: "description", enabled: undefined, name: "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: undefined, value: "", description: "", enabled: undefined, name: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("POST")
    })

    test("0", () => {
        let result: any = inst.create({ id: -5.48, value: undefined, description: "policy_abc", enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.create({ id: 0, value: "elio@example.com", description: "No description.", enabled: true, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.create({ id: undefined, value: undefined, description: undefined, enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.create({ id: 1, value: undefined, description: "Organize files in your directory instantly, ", enabled: true, name: "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.create({ id: undefined, value: undefined, description: undefined, enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.create({ id: NaN, value: "", description: "", enabled: true, name: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("DELETE")
    })

    test("0", () => {
        let result: any = inst.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.delete(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("POST")
    })

    test("0", () => {
        let result: any = inst.query(500)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.query(200)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.query(429)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.query(404)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.query(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
