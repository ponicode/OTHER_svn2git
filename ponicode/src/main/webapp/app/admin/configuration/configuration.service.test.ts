import * as configuration_service from "app/admin/configuration/configuration.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("get", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.JhiConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.get()
        expect(result).toMatchSnapshot()
    })
})

describe("getEnv", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.JhiConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getEnv()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getConfigPropertiesObjects", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.JhiConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getConfigPropertiesObjects({ constructor: () => true, toString: () => "2019-06-01", toLocaleString: () => "Hello, world!", valueOf: () => null, hasOwnProperty: () => true, isPrototypeOf: () => false, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getConfigPropertiesObjects({ constructor: () => "Sales", toString: () => "2019-07-01", toLocaleString: () => "foo bar", valueOf: () => null, hasOwnProperty: () => true, isPrototypeOf: () => true, propertyIsEnumerable: () => false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getConfigPropertiesObjects({ constructor: () => "Software Engineer", toString: () => "2020-03-01", toLocaleString: () => "Hello, world!", valueOf: () => null, hasOwnProperty: () => true, isPrototypeOf: () => true, propertyIsEnumerable: () => false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getConfigPropertiesObjects({ constructor: () => "Data Scientist", toString: () => "2017-03-01", toLocaleString: () => "Hello, world!", valueOf: () => ({ constructor: () => "Data Scientist", toString: () => "2019-06-01", toLocaleString: () => "This is a Text", valueOf: () => null, hasOwnProperty: () => false, isPrototypeOf: () => false, propertyIsEnumerable: () => true }), hasOwnProperty: () => false, isPrototypeOf: () => true, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getConfigPropertiesObjects({ constructor: () => "Chief Product Officer", toString: () => "2019-07-01", toLocaleString: () => "This is a Text", valueOf: () => null, hasOwnProperty: () => false, isPrototypeOf: () => true, propertyIsEnumerable: () => false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getConfigPropertiesObjects({ constructor: () => "", toString: () => "", toLocaleString: () => "", valueOf: () => null, hasOwnProperty: () => true, isPrototypeOf: () => true, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("get", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.JhiConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.get()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getEnv", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.JhiConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getEnv()
        expect(result).toMatchSnapshot()
    })
})
