import * as configuration_service from "app/admin/configuration/configuration.service"

// @ponicode
describe("getEnv", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.JhiConfigurationService(undefined)
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
        inst = new configuration_service.JhiConfigurationService(undefined)
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
        inst = new configuration_service.JhiConfigurationService(undefined)
    })

    test("0", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getConfigPropertiesObjects({ constructor: () => false })
        expect(result).toMatchSnapshot()
    })
})
