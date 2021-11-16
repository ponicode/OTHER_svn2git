import * as mapping_component from "app/entities/mapping/mapping.component"
import * as mapping_service from "app/entities/mapping/mapping.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, undefined, undefined, inst3)
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
        inst = new mapping_service.MappingService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInMappings()
        expect(result).toMatchSnapshot()
    })
})

describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("missing encoding")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("Unable to find your git executable - Shutdown SickBeard and EITHER <a href=\"http://code.google.com/p/sickbeard/wiki/AdvancedSettings\" onclick=\"window.open(this.href); return false;\">set git_path in your config.ini</a> OR delete your .git folder and run from source to enable updates.")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("No error")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("unexpected error")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("TrainerCourseDetailError: Either not an ajax call or not a GET request!!!")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("trackId", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new mapping_component.MappingComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.trackId(1, { id: 56784, svnDirectory: "LLC", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", gitDirectory: "/usr/share", migration: 5, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.trackId(-1, { id: 12, svnDirectory: "Inc", regex: "(.*)-(.+)", gitDirectory: "/selinux", migration: 5, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.trackId(-1, { id: 56784, svnDirectory: "and Sons", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", gitDirectory: "/selinux", migration: 5, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.trackId(0, { id: 12345, svnDirectory: "and Sons", regex: "(?i)(?L)(?m)(?s)(?u)(?#)", gitDirectory: "/usr/sbin", migration: 25, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.trackId(-100, { id: 56784, svnDirectory: "LLC", regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: "/selinux", migration: 18, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.trackId(NaN, { id: NaN, svnDirectory: "", regex: "", gitDirectory: "", migration: NaN, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})
