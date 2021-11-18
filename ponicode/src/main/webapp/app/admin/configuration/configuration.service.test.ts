import * as configuration_service from "app/admin/configuration/configuration.service"

// @ponicode
describe("getEnv", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.JhiConfigurationService("DELETE")
    })

    test("0", () => {
        let result: any = inst.getEnv()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("get", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.JhiConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.get()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getConfigPropertiesObjects", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.JhiConfigurationService("DELETE")
    })

    test("0", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => true, toString: () => "2019-06-01", toLocaleString: () => "This is a Text", valueOf: () => null, hasOwnProperty: () => false, isPrototypeOf: () => false, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => true, toString: () => "2019-07-01", toLocaleString: () => "foo bar", valueOf: () => null, hasOwnProperty: () => false, isPrototypeOf: () => false, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => true, toString: () => "2019-10-01-preview", toLocaleString: () => "Hello, world!", valueOf: () => null, hasOwnProperty: () => true, isPrototypeOf: () => true, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => false, toString: () => "2020-03-01", toLocaleString: () => "This is a Text", valueOf: () => ({ constructor: () => false, toString: () => "2020-03-01", toLocaleString: () => "Hello, world!", valueOf: () => null, hasOwnProperty: () => true, isPrototypeOf: () => false, propertyIsEnumerable: () => false }), hasOwnProperty: () => true, isPrototypeOf: () => false, propertyIsEnumerable: () => false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => false, toString: () => "2020-06-01", toLocaleString: () => "This is a Text", valueOf: () => null, hasOwnProperty: () => false, isPrototypeOf: () => true, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => false, toString: () => "", toLocaleString: () => "", valueOf: () => null, hasOwnProperty: () => true, isPrototypeOf: () => false, propertyIsEnumerable: () => true })
        expect(result).toMatchSnapshot()
    })
})
