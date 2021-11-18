import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("POST")
    })

    test("0", () => {
        let result: any = inst.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find(100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("POST")
    })

    test("0", () => {
        let result: any = inst.create({ id: 100, svnLocation: "https://twitter.com/path?abc", path: ".", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.create({ id: undefined, svnLocation: undefined, path: "path/to/folder/", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.create({ id: -100, svnLocation: "https://api.telegram.org/", path: "path/to/file.ext", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.create({ id: 1, svnLocation: "https://accounts.google.com/o/oauth2/revoke?token=%s", path: "./path/to/file", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.create({ id: undefined, svnLocation: undefined, path: ".", reason: undefined, fileSize: 256, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.create({ id: NaN, svnLocation: undefined, path: undefined, reason: undefined, fileSize: NaN, migration: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("POST")
    })

    test("0", () => {
        let result: any = inst.query(429)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.query(400)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.query(200)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.query(500)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.query(404)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.query(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("DELETE")
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
        let result: any = inst.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("POST")
    })

    test("0", () => {
        let result: any = inst.update({ id: undefined, svnLocation: "ponicode.com", path: undefined, reason: undefined, fileSize: 10, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: 0, svnLocation: "https://accounts.google.com/o/oauth2/revoke?token=%s", path: undefined, reason: undefined, fileSize: 10, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: undefined, svnLocation: undefined, path: undefined, reason: undefined, fileSize: 64, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: 100, svnLocation: "ponicode.com", path: undefined, reason: undefined, fileSize: 64, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: undefined, svnLocation: "http://www.croplands.org/account/confirm?t=", path: undefined, reason: undefined, fileSize: 0, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: -Infinity, svnLocation: "", path: undefined, reason: undefined, fileSize: -Infinity, migration: undefined })
        expect(result).toMatchSnapshot()
    })
})
