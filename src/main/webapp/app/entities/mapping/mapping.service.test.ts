import * as mapping_service from "app/entities/mapping/mapping.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(undefined)
    })

    test("0", () => {
        let result: any = inst.find("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find(12)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find(987650)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(56784)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(12345)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.find(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new mapping_service.MappingService(undefined)
    })

    test("0", () => {
        let result: any = inst.update({ id: 12, svnDirectory: "and Sons", regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: "/usr/ports", migration: 5, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: "a1969970175", svnDirectory: "and Sons", regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: "/usr/sbin", migration: 18, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: 12, svnDirectory: "Inc", regex: "min\\s+\\d+\\s+of", gitDirectory: "/usr/ports", migration: 35, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: "bc23a9d531064583ace8f67dad60f6bb", svnDirectory: "Inc", regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: "/selinux", migration: 5, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: "a1969970175", svnDirectory: "and Sons", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", gitDirectory: "/usr/sbin", migration: 5, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: NaN, svnDirectory: "", regex: "", gitDirectory: "", migration: NaN, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})
)
    })
})
