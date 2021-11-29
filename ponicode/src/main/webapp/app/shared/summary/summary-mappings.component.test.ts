import * as summary_mappings_component from "app/shared/summary/summary-mappings.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as http from "@angular/common/http"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_mappings_component.SummaryMappingsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("sort", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_mappings_component.SummaryMappingsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.sort()
        expect(result).toMatchSnapshot()
    })
})

describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_mappings_component.SummaryMappingsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.delete({ id: 1, svnDirectory: undefined, regex: "definition-signature\\s(?P<signature>[\\w=\\/+]+)", gitDirectory: "/selinux", migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.delete({ id: undefined, svnDirectory: "v4.0.0-rc.4", regex: "min\\s+\\d+\\s+of", gitDirectory: undefined, migration: 18, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.delete({ id: 100, svnDirectory: undefined, regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: "/usr/ports", migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.delete({ id: undefined, svnDirectory: "4.0.0-beta1\t", regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.delete({ id: 0, svnDirectory: undefined, regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: "/usr/ports", migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.delete({ id: undefined, svnDirectory: undefined, regex: "", gitDirectory: "", migration: NaN, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("toggle", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_mappings_component.SummaryMappingsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: -5.48, svnDirectory: "v4.0.0-rc.4", regex: undefined, gitDirectory: "/selinux", migration: undefined, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: 1, svnDirectory: "4.0.0-beta1\t", regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: 0, svnDirectory: undefined, regex: "(.*)-(.+)", gitDirectory: undefined, migration: 25, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: undefined, svnDirectory: undefined, regex: "definition-signature\\s(?P<signature>[\\w=\\/+]+)", gitDirectory: undefined, migration: 25, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.toggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", { id: 1, svnDirectory: "1.0.0", regex: undefined, gitDirectory: "/usr/sbin", migration: undefined, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.toggle("", { id: undefined, svnDirectory: undefined, regex: "", gitDirectory: undefined, migration: NaN, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_mappings_component.SummaryMappingsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("sort", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_mappings_component.SummaryMappingsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.sort()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new summary_mappings_component.SummaryMappingsComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.delete({ id: undefined, svnDirectory: "1.0.0", regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.delete({ id: undefined, svnDirectory: undefined, regex: "(.*)-(.+)", gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.delete({ id: -100, svnDirectory: "v4.0.0-rc.4", regex: undefined, gitDirectory: "/selinux", migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.delete({ id: -5.48, svnDirectory: "v4.0.0-rc.4", regex: undefined, gitDirectory: "/usr/share", migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.delete({ id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: "/selinux", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.delete({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})
