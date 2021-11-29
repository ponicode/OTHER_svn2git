import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
import * as http from "@angular/common/http"

describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: 100, svnLocation: undefined, path: undefined, reason: undefined, fileSize: 64, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: undefined, svnLocation: undefined, path: undefined, reason: undefined, fileSize: 10, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: undefined, svnLocation: undefined, path: undefined, reason: undefined, fileSize: 0, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: undefined, svnLocation: undefined, path: undefined, reason: undefined, fileSize: 64, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: 100, svnLocation: undefined, path: "C:\\\\path\\to\\folder\\", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: Infinity, svnLocation: undefined, path: undefined, reason: undefined, fileSize: Infinity, migration: undefined })
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(1)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: 100, svnLocation: undefined, path: "C:\\\\path\\to\\folder\\", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: undefined, path: undefined, reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: "http://www.example.com/route/123?foo=bar", path: "C:\\\\path\\to\\folder\\", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: "https://croplands.org/app/a/reset?token=", path: ".", reason: undefined, fileSize: 10, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: -5.48, svnLocation: undefined, path: "/path/to/file", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: "", path: "", reason: undefined, fileSize: undefined, migration: undefined })
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(200)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete(-Infinity)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: undefined, svnLocation: "https://api.telegram.org/", path: ".", reason: undefined, fileSize: 16, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: undefined, svnLocation: "ponicode.com", path: "./path/to/file", reason: undefined, fileSize: 0, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: undefined, svnLocation: "http://www.croplands.org/account/confirm?t=", path: undefined, reason: undefined, fileSize: 32, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: 0, svnLocation: undefined, path: "/path/to/file", reason: undefined, fileSize: 10, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: -5.48, svnLocation: "https://api.telegram.org/", path: undefined, reason: undefined, fileSize: 64, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: undefined, svnLocation: "", path: "", reason: undefined, fileSize: NaN, migration: undefined })
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(-Infinity)
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: undefined, path: "/path/to/file", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: undefined, path: "path/to/folder/", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: undefined, path: "C:\\\\path\\to\\file.ext", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: undefined, path: undefined, reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: undefined, svnLocation: undefined, path: "C:\\\\path\\to\\folder\\", reason: undefined, fileSize: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: -Infinity, svnLocation: undefined, path: "", reason: undefined, fileSize: -Infinity, migration: undefined })
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
        inst3 = new migration_removed_file_service.MigrationRemovedFileService(inst2)
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
        let result: any = inst3.query(NaN)
        expect(result).toMatchSnapshot()
    })
})
