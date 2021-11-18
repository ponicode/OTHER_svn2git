import * as migration_route from "app/entities/migration/migration.route"
import * as migration_service from "app/entities/migration/migration.service"

// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new migration_route.MigrationResolve(inst)
    })

    test("0", () => {
        let result: any = inst2.resolve("https://accounts.google.com/o/oauth2/revoke?token=%s", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.resolve("ponicode.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.resolve("Www.GooGle.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.resolve("http://www.croplands.org/account/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.resolve("https://api.telegram.org/", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.resolve("", "")
        expect(result).toMatchSnapshot()
    })
})
