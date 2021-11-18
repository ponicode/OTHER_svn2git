import * as configuration_service from "app/shared/service/configuration-service"

// @ponicode
describe("svnDepthOption", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.svnDepthOption()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("svn", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.svn()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("svnCredsOption", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.svnCredsOption()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("gitlab", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.gitlab()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("svnUrlModifiable", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.svnUrlModifiable()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("gitlabCredsOption", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.gitlabCredsOption()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("overrideStaticExtensions", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("DELETE")
    })

    test("0", () => {
        let result: any = inst.overrideStaticExtensions()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("overrideStaticMappings", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.overrideStaticMappings()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("flagProjectCleaning", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.flagProjectCleaning()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("flagGitlabGroupCreation", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.flagGitlabGroupCreation()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("artifactory", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
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
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.init()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("nexus", () => {
    let inst: any

    beforeEach(() => {
        inst = new configuration_service.ConfigurationService("POST")
    })

    test("0", () => {
        let result: any = inst.nexus()
        expect(result).toMatchSnapshot()
    })
})
