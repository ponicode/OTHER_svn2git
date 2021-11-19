import * as configuration_service from "app/shared/service/configuration-service"
import * as http from "@angular/common/http"

describe("svn", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.svn()
        expect(result).toMatchSnapshot()
    })
})

describe("svnCredsOption", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.svnCredsOption()
        expect(result).toMatchSnapshot()
    })
})

describe("svnDepthOption", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.svnDepthOption()
        expect(result).toMatchSnapshot()
    })
})

describe("svnUrlModifiable", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.svnUrlModifiable()
        expect(result).toMatchSnapshot()
    })
})

describe("gitlab", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.gitlab()
        expect(result).toMatchSnapshot()
    })
})

describe("gitlabCredsOption", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.gitlabCredsOption()
        expect(result).toMatchSnapshot()
    })
})

describe("overrideStaticExtensions", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.overrideStaticExtensions()
        expect(result).toMatchSnapshot()
    })
})

describe("overrideStaticMappings", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.overrideStaticMappings()
        expect(result).toMatchSnapshot()
    })
})

describe("flagGitlabGroupCreation", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.flagGitlabGroupCreation()
        expect(result).toMatchSnapshot()
    })
})

describe("flagProjectCleaning", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.flagProjectCleaning()
        expect(result).toMatchSnapshot()
    })
})

describe("artifactory", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.artifactory()
        expect(result).toMatchSnapshot()
    })
})

describe("nexus", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.nexus()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("init", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new configuration_service.ConfigurationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.init()
        expect(result).toMatchSnapshot()
    })
})
