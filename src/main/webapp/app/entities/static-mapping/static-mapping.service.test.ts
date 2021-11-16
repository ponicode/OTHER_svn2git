import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(undefined)
    })

    test("0", () => {
        let result: any = inst.create({ id: 12345, svnDirectory: "LLC", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", gitDirectory: "/opt/share", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.create({ id: 987650, svnDirectory: "Inc", regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: "/usr/sbin", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.create({ id: 987650, svnDirectory: "Inc", regex: "(.*)-(.+)", gitDirectory: "/usr/ports", svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.create({ id: "a1969970175", svnDirectory: "Inc", regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: "/selinux", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.create({ id: 56784, svnDirectory: "and Sons", regex: "(?:non-capturing)", gitDirectory: "/selinux", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.create({ id: Infinity, svnDirectory: "", regex: "", gitDirectory: "", svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})
hot()
    })
})
