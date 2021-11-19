import * as migration_process_service from "app/migration/migration-process.service"
import * as http from "@angular/common/http"

import * as migration_filter_model from "app/shared/model/migration-filter.model"
describe("currentUserFromToken", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let result: any = inst3.currentUserFromToken("https://", "~")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.currentUserFromToken("Www.GooGle.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.currentUserFromToken("https://", undefined)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.currentUserFromToken("http://base.com", ">")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.currentUserFromToken("https://twitter.com/path?abc", "}}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.currentUserFromToken("", undefined)
        expect(result).toMatchSnapshot()
    })
})

describe("checkUser", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let result: any = inst3.checkUser("Michael", "http://base.com", " ")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.checkUser("Michael", "https://twitter.com/path?abc", ",")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.checkUser("Pierre Edouard", "https://", "package")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.checkUser("Pierre Edouard", "http://base.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.checkUser("George", "http://www.example.com/route/123?foo=bar", ",")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.checkUser("", "", "")
        expect(result).toMatchSnapshot()
    })
})

describe("checkGroup", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let result: any = inst3.checkGroup("Anas", "user123", "https://twitter.com/path?abc", undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.checkGroup("Anas", "user123", "http://base.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.checkGroup("Edmond", "123", "http://base.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.checkGroup("Pierre Edouard", "username", "http://www.example.com/route/123?foo=bar", undefined)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.checkGroup("Jean-Philippe", "123", "https://", "/*")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.checkGroup("", "", "", undefined)
        expect(result).toMatchSnapshot()
    })
})

describe("checkProject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let result: any = inst3.checkProject("http://www.croplands.org/account/confirm?t=", "https://twitter.com/path?abc", "not")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.checkProject("http://base.com", "Www.GooGle.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.checkProject("http://www.example.com/route/123?foo=bar", "http://www.example.com/route/123?foo=bar", undefined)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.checkProject("https://twitter.com/path?abc", "ponicode.com", "data")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.checkProject("www.google.com", "https://twitter.com/path?abc", undefined)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.checkProject("", "", undefined)
        expect(result).toMatchSnapshot()
    })
})

describe("createGroup", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let result: any = inst3.createGroup("Anas", "https://twitter.com/path?abc", undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.createGroup("Pierre Edouard", "http://www.example.com/route/123?foo=bar", "~@")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.createGroup("Edmond", "Www.GooGle.com", "<")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.createGroup("Edmond", "http://base.com", "*")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.createGroup("George", "https://twitter.com/path?abc", undefined)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.createGroup("", "", "")
        expect(result).toMatchSnapshot()
    })
})

describe("checkSvn", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let result: any = inst3.checkSvn("Jean-Philippe", "https://twitter.com/path?abc", "Michael", "YouarenotAllowed2Use", 1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.checkSvn("Michael", "ponicode.com", "Edmond", "YouarenotAllowed2Use", 100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.checkSvn("George", "ponicode.com", "Michael", "$p3onyycat", 1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.checkSvn("Edmond", "http://www.example.com/route/123?foo=bar", "George", "!Lov3MyPianoPony", 1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.checkSvn("Jean-Philippe", "www.google.com", "Pierre Edouard", "accessdenied4u", 0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.checkSvn("", "", "", "", Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("findActiveMigrations", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let result: any = inst3.findActiveMigrations()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findMigrations", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_process_service.MigrationProcessService(inst2)
    })

    test("0", () => {
        let param1: any = new migration_filter_model.MigrationFilter(1, undefined, undefined, undefined, "Gail Hoppe")
        let result: any = inst3.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_filter_model.MigrationFilter(undefined, undefined, undefined, undefined, "Maurice Purdy")
        let result: any = inst3.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_filter_model.MigrationFilter(undefined, undefined, "Gail Hoppe", undefined, undefined)
        let result: any = inst3.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_filter_model.MigrationFilter(1, 1, "Maurice Purdy", undefined, undefined)
        let result: any = inst3.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_filter_model.MigrationFilter(undefined, undefined, "Ronald Keeling", undefined, undefined)
        let result: any = inst3.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_filter_model.MigrationFilter(NaN, undefined, undefined, "", "")
        let result: any = inst3.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })
})
