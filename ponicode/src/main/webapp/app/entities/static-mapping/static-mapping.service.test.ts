import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService("POST")
    })

    test("0", () => {
        let result: any = inst.create({ id: 0, svnDirectory: "4.0.0-beta1\t", regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: "/usr/share", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.create({ id: 1, svnDirectory: "v1.2.4", regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.create({ id: 100, svnDirectory: undefined, regex: undefined, gitDirectory: "/selinux", svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.create({ id: 100, svnDirectory: "4.0.0-beta1\t", regex: "(file format) ([a-zA-Z0-9_\\-]+)", gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.create({ id: undefined, svnDirectory: undefined, regex: undefined, gitDirectory: "/selinux", svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.create({ id: Infinity, svnDirectory: "", regex: "", gitDirectory: "", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService("DELETE")
    })

    test("0", () => {
        let result: any = inst.update({ id: -100, svnDirectory: undefined, regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: undefined, svnDirectory: "v1.2.4", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", gitDirectory: "/usr/sbin", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: 1, svnDirectory: undefined, regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: 100, svnDirectory: undefined, regex: "definition-signature\\s(?P<signature>[\\w=\\/+]+)", gitDirectory: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: -5.48, svnDirectory: undefined, regex: "(?:non-capturing)", gitDirectory: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: -Infinity, svnDirectory: undefined, regex: undefined, gitDirectory: "", svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService("POST")
    })

    test("0", () => {
        let result: any = inst.find(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService("POST")
    })

    test("0", () => {
        let result: any = inst.query(404)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.query(500)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.query(400)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.query(200)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.query(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService("POST")
    })

    test("0", () => {
        let result: any = inst.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.delete(Infinity)
        expect(result).toMatchSnapshot()
    })
})
