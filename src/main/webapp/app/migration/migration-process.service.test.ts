import * as migration_process_service from "app/migration/migration-process.service"

import * as migration_filter_model from "app/shared/model/migration-filter.model"
// @ponicode
describe("checkGroup", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
    })

    test("0", () => {
        let result: any = inst.checkGroup("Pierre Edouard", "user name", "https://twitter.com/path?abc", "<")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.checkGroup("Pierre Edouard", "user123", "http://www.croplands.org/account/confirm?t=", "%}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.checkGroup("Michael", "user-name", "www.google.com", "{")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.checkGroup("Michael", "user name", "https://api.telegram.org/bot", "*")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.checkGroup("Pierre Edouard", "user_name", "https://api.telegram.org/", "*")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.checkGroup("", "", "", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("checkSvn", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
    })

    test("0", () => {
        let result: any = inst.checkSvn("Edmond", "https://accounts.google.com/o/oauth2/revoke?token=%s", "user-name", "!Lov3MyPianoPony", 100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.checkSvn("Anas", "https://api.telegram.org/bot", "user name", "YouarenotAllowed2Use", 100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.checkSvn("George", "https://croplands.org/app/a/reset?token=", "user_name", "!Lov3MyPianoPony", -5.48)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.checkSvn("Jean-Philippe", "https://accounts.google.com/o/oauth2/revoke?token=%s", "username", "accessdenied4u", 100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.checkSvn("Jean-Philippe", "http://www.example.com/route/123?foo=bar", "username", "accessdenied4u", 100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.checkSvn("", "", "", "", NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findMigrations", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
    })

    test("0", () => {
        let param1: any = new migration_filter_model.MigrationFilter(0, 0, "Janet Homenick", "Maurice Purdy", "Becky Bednar")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_filter_model.MigrationFilter(16, 0, "Gail Hoppe", "Becky Bednar", "Maurice Purdy")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_filter_model.MigrationFilter(16, 64, "Ronald Keeling", "Maurice Purdy", "Becky Bednar")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_filter_model.MigrationFilter(256, 256, "Ronald Keeling", "Ronald Keeling", "Ronald Keeling")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_filter_model.MigrationFilter(10, 16, "Gail Hoppe", "Maurice Purdy", "Janet Homenick")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_filter_model.MigrationFilter(NaN, NaN, "", "", "")
        let result: any = inst.findMigrations(param1)
        expect(result).toMatchSnapshot()
    })
})
