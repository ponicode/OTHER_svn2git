import * as summary_mappings_component from "app/shared/summary/summary-mappings.component"
import * as migration_service from "app/entities/migration/migration.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("sort", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.sort()
        expect(result).toMatchSnapshot()
    })
})

describe("delete", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.delete({ id: "a1969970175", svnDirectory: "Inc", regex: "min\\s+\\d+\\s+of", gitDirectory: "/usr/ports", migration: 35, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.delete({ id: 12345, svnDirectory: "LLC", regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: "/selinux", migration: 35, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.delete({ id: 12, svnDirectory: "Inc", regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: "/usr/share", migration: 25, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.delete({ id: 56784, svnDirectory: "Inc", regex: "(?:non-capturing)", gitDirectory: "/usr/sbin", migration: 75, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.delete({ id: 56784, svnDirectory: "LLC", regex: "(?i)(?L)(?m)(?s)(?u)(?#)", gitDirectory: "/opt/share", migration: 25, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.delete({ id: -Infinity, svnDirectory: "", regex: "", gitDirectory: "", migration: -Infinity, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("toggle", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.toggle(false, { id: 987650, svnDirectory: "and Sons", regex: "(?:non-capturing)", gitDirectory: "/usr/sbin", migration: 75, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.toggle(false, { id: 987650, svnDirectory: "Inc", regex: "(file format) ([a-zA-Z0-9_\\-]+)", gitDirectory: "/usr/share", migration: 18, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.toggle(1, { id: 12345, svnDirectory: "Inc", regex: "definition-checksum\\s(?P<checksum>\\w+)", gitDirectory: "/selinux", migration: 35, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.toggle("invoice", { id: "a1969970175", svnDirectory: "and Sons", regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: "/selinux", migration: 25, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.toggle(true, { id: 56784, svnDirectory: "and Sons", regex: "(?i)(?L)(?m)(?s)(?u)(?#)", gitDirectory: "/opt/share", migration: 18, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.toggle(NaN, { id: NaN, svnDirectory: "", regex: "", gitDirectory: "", migration: NaN, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })
})
