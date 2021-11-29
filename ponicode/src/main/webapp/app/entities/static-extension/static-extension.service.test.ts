import * as static_extension_service from "app/entities/static-extension/static-extension.service"
import * as http from "@angular/common/http"

describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: undefined, value: undefined, description: "(no description available)", enabled: false, name: "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: undefined, value: undefined, description: undefined, enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: undefined, value: "elio@example.com", description: undefined, enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: -100, value: "Dillenberg", description: "my metering label", enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: 0, value: "Dillenberg", description: "This is group1", enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: Infinity, value: "", description: "", enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("find", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.find(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("update", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: 100, value: undefined, description: " description ", enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: undefined, value: undefined, description: undefined, enabled: false, name: "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: -100, value: undefined, description: "Print Base", enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: 1, value: undefined, description: undefined, enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: 1, value: undefined, description: " description ", enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: NaN, value: undefined, description: undefined, enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(500)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.delete(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: undefined, value: undefined, description: undefined, enabled: false, name: "Edmond" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: undefined, value: undefined, description: undefined, enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: undefined, value: undefined, description: undefined, enabled: false, name: "Michael" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: undefined, value: undefined, description: undefined, enabled: false, name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: -5.48, value: undefined, description: undefined, enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: -Infinity, value: "", description: undefined, enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("find", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.find(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query({ name: "Michael" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query({ name: "Anas" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query({ name: "George" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query({ name: "Edmond" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query({ name: "Jean-Philippe" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query({ name: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: 100, value: undefined, description: undefined, enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: 1, value: undefined, description: "(no description available)", enabled: true, name: "Jean-Philippe" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: -100, value: undefined, description: undefined, enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: undefined, value: undefined, description: undefined, enabled: true, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: 0, value: undefined, description: undefined, enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: -Infinity, value: undefined, description: "", enabled: true, name: "" })
        expect(result).toMatchSnapshot()
    })
})
