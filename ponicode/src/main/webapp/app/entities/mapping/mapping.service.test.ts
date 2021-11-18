import * as mapping_service from "app/entities/mapping/mapping.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("DELETE")
    })

    test("0", () => {
        let result: any = inst.find(1)
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
        let result: any = inst.find(0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("POST")
    })

    test("0", () => {
        let result: any = inst.update({ id: undefined, svnDirectory: "4.0.0-beta1\t", regex: undefined, gitDirectory: "/opt/share", migration: 35, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: undefined, svnDirectory: "4.0.0-beta1\t", regex: undefined, gitDirectory: "/usr/sbin", migration: 18, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: undefined, svnDirectory: "v1.2.4", regex: undefined, gitDirectory: "/opt/share", migration: 18, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: undefined, svnDirectory: undefined, regex: "definition-checksum\\s(?P<checksum>\\w+)", gitDirectory: "/usr/ports", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: undefined, svnDirectory: "v1.2.4", regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: Infinity, svnDirectory: "", regex: undefined, gitDirectory: undefined, migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("POST")
    })

    test("0", () => {
        let result: any = inst.create({ id: -100, svnDirectory: undefined, regex: undefined, gitDirectory: "/opt/share", migration: 35, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.create({ id: -5.48, svnDirectory: "v1.2.4", regex: undefined, gitDirectory: undefined, migration: 5, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.create({ id: 0, svnDirectory: undefined, regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: undefined, migration: 25, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.create({ id: 1, svnDirectory: undefined, regex: "(?:non-capturing)", gitDirectory: undefined, migration: 25, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.create({ id: 0, svnDirectory: undefined, regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: undefined, migration: 75, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.create({ id: Infinity, svnDirectory: undefined, regex: undefined, gitDirectory: "", migration: undefined, isStatic: true, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("POST")
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
        let result: any = inst.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.query(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_service.MappingService("DELETE")
    })

    test("0", () => {
        let result: any = inst.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.delete(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
