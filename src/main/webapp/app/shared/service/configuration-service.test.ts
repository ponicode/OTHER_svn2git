import * as configuration_service from "app/shared/service/configuration-service"

// @ponicode
describe("svn", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService(undefined)
    })

    test("0", () => {
        let result: any = inst.svn()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("gitlab", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService(undefined)
    })

    test("0", () => {
        let result: any = inst.gitlab()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("overrideStaticMappings", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService(undefined)
    })

    test("0", () => {
        let result: any = inst.overrideStaticMappings()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("artifactory", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService(undefined)
    })

    test("0", () => {
        let result: any = inst.artifactory()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("init", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService(undefined)
    })

    test("0", () => {
        let result: any = inst.init()
        expect(result).toMatchSnapshot()
    })
})
