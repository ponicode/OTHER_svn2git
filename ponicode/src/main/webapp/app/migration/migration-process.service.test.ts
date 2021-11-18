import * as migration_process_service from "app/migration/migration-process.service"

import * as migration_filter_model from "app/shared/model/migration-filter.model"
// @ponicode
describe("currentUserFromToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("DELETE")
    })

    test("0", () => {
        let result: any = inst.currentUserFromToken("ponicode.com", "%a")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.currentUserFromToken("http://base.com", "÷")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.currentUserFromToken("www.google.com", "")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.currentUserFromToken("ponicode.com", "~@")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.currentUserFromToken("https://", undefined)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.currentUserFromToken("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("checkProject", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("POST")
    })

    test("0", () => {
        let result: any = inst.checkProject("www.google.com", "https://twitter.com/path?abc", undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.checkProject("https://croplands.org/app/a/confirm?t=", "www.google.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.checkProject("https://twitter.com/path?abc", "ponicode.com", ",")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.checkProject("https://", "www.google.com", "new")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.checkProject("Www.GooGle.com", "http://base.com", "not in")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.checkProject("", "", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("checkUser", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("POST")
    })

    test("0", () => {
        let result: any = inst.checkUser("Edmond", "https://twitter.com/path?abc", undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.checkUser("Jean-Philippe", "https://", undefined)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.checkUser("Anas", "https://twitter.com/path?abc", "package")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.checkUser("Pierre Edouard", "https://twitter.com/path?abc", "\\")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.checkUser("George", "Www.GooGle.com", "{")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.checkUser("", "", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("createGroup", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("POST")
    })

    test("0", () => {
        let result: any = inst.createGroup("Edmond", "http://base.com", "'")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.createGroup("Michael", "www.google.com", "")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.createGroup("Anas", "http://base.com", "/*")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.createGroup("Edmond", "Www.GooGle.com", "\n")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.createGroup("Pierre Edouard", "ponicode.com", "{{")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.createGroup("", "", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("checkGroup", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("POST")
    })

    test("0", () => {
        let result: any = inst.checkGroup("Pierre Edouard", "user-name", "http://www.example.com/route/123?foo=bar", "#")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.checkGroup("Pierre Edouard", "user-name", "www.google.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.checkGroup("Edmond", "123", "http://www.example.com/route/123?foo=bar", "=")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.checkGroup("George", "user_name", "https://twitter.com/path?abc", undefined)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.checkGroup("Pierre Edouard", "123", "ponicode.com", undefined)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.checkGroup("", "", "", undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findActiveMigrations", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("POST")
    })

    test("0", () => {
        let result: any = inst.findActiveMigrations()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("checkSvn", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("DELETE")
    })

    test("0", () => {
        let result: any = inst.checkSvn("George", "http://base.com", "Jean-Philippe", "accessdenied4u", 1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.checkSvn("Pierre Edouard", "http://base.com", "Jean-Philippe", "accessdenied4u", 0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.checkSvn("Jean-Philippe", "www.google.com", "George", "accessdenied4u", -100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.checkSvn("Jean-Philippe", "http://base.com", "George", "accessdenied4u", 0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.checkSvn("Pierre Edouard", "http://www.example.com/route/123?foo=bar", "George", "accessdenied4u", 1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.checkSvn("", "", "", "", -Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findMigrations", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("POST")
    })

    test("0", () => {
        let param1: any = new migration_filter_model.MigrationFilter(undefined, 1, undefined, undefined, undefined)
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_filter_model.MigrationFilter(undefined, 1000, undefined, undefined, undefined)
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_filter_model.MigrationFilter(1, undefined, undefined, undefined, "Janet Homenick")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_filter_model.MigrationFilter(1, 1000, undefined, "Becky Bednar", "Janet Homenick")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_filter_model.MigrationFilter(1000, 1000, undefined, "Ronald Keeling", "Gail Hoppe")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_filter_model.MigrationFilter(undefined, -Infinity, undefined, undefined, undefined)
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })
})
