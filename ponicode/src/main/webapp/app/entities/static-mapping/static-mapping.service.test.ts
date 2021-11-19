import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as http from "@angular/common/http"

describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_mapping_service.StaticMappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: undefined, regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: "/selinux", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "^5.0.0", regex: "definition-signature\\s(?P<signature>[\\w=\\/+]+)", gitDirectory: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "1.0.0", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", gitDirectory: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "1.0.0", regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: "/selinux", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: "^5.0.0", regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: "/usr/share", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: undefined, svnDirectory: undefined, regex: "", gitDirectory: "", svnDirectoryDelete: undefined })
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(-Infinity)
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: undefined, regex: "definition-checksum\\s(?P<checksum>\\w+)", gitDirectory: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: 100, svnDirectory: undefined, regex: "(?i)(?L)(?m)(?s)(?u)(?#)", gitDirectory: "/selinux", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: -5.48, svnDirectory: "v1.2.4", regex: undefined, gitDirectory: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: 0, svnDirectory: undefined, regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", gitDirectory: "/usr/share", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: undefined, svnDirectory: undefined, regex: "", gitDirectory: undefined, svnDirectoryDelete: false })
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
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
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query(-Infinity)
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
        inst3 = new static_mapping_service.StaticMappingService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.delete(NaN)
        expect(result).toMatchSnapshot()
    })
})
