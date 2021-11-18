import * as summary_mappings_component from "app/shared/summary/summary-mappings.component"
import * as migration_service from "app/entities/migration/migration.service"

describe("sort", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.sort()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(12345)
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("delete", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.delete({ id: undefined, svnDirectory: "1.0.0", regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.delete({ id: 100, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.delete({ id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: "/usr/ports", migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.delete({ id: 100, svnDirectory: undefined, regex: undefined, gitDirectory: "/opt/share", migration: 25, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.delete({ id: -100, svnDirectory: undefined, regex: undefined, gitDirectory: "/usr/sbin", migration: 5, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.delete({ id: -Infinity, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("toggle", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new summary_mappings_component.SummaryMappingsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: 1, svnDirectory: "v4.0.0-rc.4", regex: "(definition-(checksum|signature)\\s[\\w=\\/+]+)", gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: undefined, svnDirectory: "v1.2.4", regex: undefined, gitDirectory: undefined, migration: 75, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: undefined, svnDirectory: undefined, regex: "(?:non-capturing)", gitDirectory: "/usr/sbin", migration: 18, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: undefined, svnDirectory: undefined, regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", gitDirectory: "/usr/share", migration: 75, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.toggle("", { id: NaN, svnDirectory: "", regex: "", gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })
})
