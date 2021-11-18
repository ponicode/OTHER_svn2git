import * as static_mapping_component from "app/entities/static-mapping/static-mapping.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(12)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_mapping_component.StaticMappingComponent(inst, 987650, "12345", inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(12)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_mapping_component.StaticMappingComponent(inst, 987650, "12345", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("trackId", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_mapping_component.StaticMappingComponent(inst, 12345, "12345", inst3)
    })

    test("0", () => {
        let result: any = inst4.trackId(1, { id: 1, svnDirectory: undefined, regex: undefined, gitDirectory: "/selinux", svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.trackId(100, { id: undefined, svnDirectory: "1.0.0", regex: undefined, gitDirectory: "/selinux", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.trackId(100, { id: undefined, svnDirectory: "^5.0.0", regex: "min\\s+\\d+\\s+of", gitDirectory: "/usr/ports", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.trackId(1, { id: undefined, svnDirectory: undefined, regex: "(?:non-capturing)", gitDirectory: "/usr/sbin", svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.trackId(-100, { id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: "/usr/ports", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.trackId(Infinity, { id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: "", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(12345)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_mapping_component.StaticMappingComponent(inst, "a1969970175", "c466a48309794261b64a4f02cfcc3d64", inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("Error in retrieving email.")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("unexpected error")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("An error occurred processing your request.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("Sorry, The video you are looking for does not exist.")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("Mock Error Message")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})
