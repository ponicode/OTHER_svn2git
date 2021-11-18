import * as mapping_component from "app/entities/mapping/mapping.component"
import * as mapping_service from "app/entities/mapping/mapping.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(987650)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, 987650, "bc23a9d531064583ace8f67dad60f6bb", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("a1969970175")
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, "bc23a9d531064583ace8f67dad60f6bb", "9876", inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInMappings", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(12345)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, 12, "c466a48309794261b64a4f02cfcc3d64", inst3)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInMappings()
        expect(result).toMatchSnapshot()
    })
})

describe("trackId", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(987650)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, 56784, "12345", inst3)
    })

    test("0", () => {
        let result: any = inst4.trackId(-100, { id: 100, svnDirectory: "^5.0.0", regex: undefined, gitDirectory: undefined, migration: 18, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.trackId(1, { id: 100, svnDirectory: undefined, regex: undefined, gitDirectory: "/usr/ports", migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.trackId(1, { id: 100, svnDirectory: "v4.0.0-rc.4", regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: undefined, migration: 25, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.trackId(100, { id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: true, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.trackId(0, { id: -100, svnDirectory: "4.0.0-beta1\t", regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.trackId(NaN, { id: NaN, svnDirectory: "", regex: undefined, gitDirectory: undefined, migration: NaN, isStatic: undefined, svnDirectoryDelete: undefined })
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
        inst = new mapping_service.MappingService(12)
        inst2 = new account_service.AccountService(987650)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, 56784, "c466a48309794261b64a4f02cfcc3d64", inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("No response")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("Error selecting from database")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("Invalid [%s] value. %s")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("Message originator is not the grader, or the person being graded")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("An error occurred processing your request.")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})
