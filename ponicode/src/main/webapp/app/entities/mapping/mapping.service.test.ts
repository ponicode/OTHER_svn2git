import * as mapping_service from "app/entities/mapping/mapping.service"
import * as http from "@angular/common/http"

describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: 0, svnDirectory: undefined, regex: undefined, gitDirectory: "/usr/share", migration: undefined, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: 0, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, migration: 18, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: 0, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, migration: 75, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: 1, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, migration: 75, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: 1, svnDirectory: "1.0.0", regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: NaN, svnDirectory: undefined, regex: undefined, gitDirectory: "", migration: undefined, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("update", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: "v4.0.0-rc.4", regex: undefined, gitDirectory: "/selinux", migration: undefined, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: undefined, regex: "min\\s+\\d+\\s+of", gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: undefined, regex: "definition-checksum\\s(?P<checksum>\\w+)", gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: 1, svnDirectory: "v4.0.0-rc.4", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", gitDirectory: undefined, migration: 75, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: 1, svnDirectory: "1.0.0", regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: undefined, migration: 25, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: undefined, regex: "", gitDirectory: undefined, migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("find", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(500)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.delete(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "1.0.0", regex: "(.*)-(.+)", gitDirectory: undefined, migration: undefined, isStatic: true, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "4.0.0-beta1\t", regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: "/opt/share", migration: 35, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "4.0.0-beta1\t", regex: "(.*)-(.+)", gitDirectory: "/selinux", migration: 18, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: 1, svnDirectory: undefined, regex: undefined, gitDirectory: "/selinux", migration: 5, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: 1, svnDirectory: undefined, regex: undefined, gitDirectory: "/usr/sbin", migration: 35, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "", regex: "", gitDirectory: "", migration: Infinity, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("find", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: 100, svnDirectory: "v4.0.0-rc.4", regex: undefined, gitDirectory: "/opt/share", migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: 0, svnDirectory: undefined, regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", gitDirectory: "/opt/share", migration: 35, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: -5.48, svnDirectory: undefined, regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", gitDirectory: "/usr/share", migration: 35, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: -100, svnDirectory: undefined, regex: "(definition-(checksum|signature)\\s[\\w=\\/+]+)", gitDirectory: "/selinux", migration: 75, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: undefined, regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: undefined, migration: 5, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: Infinity, svnDirectory: undefined, regex: "", gitDirectory: "", migration: Infinity, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new mapping_service.MappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(500)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query(NaN)
        expect(result).toMatchSnapshot()
    })
})
