import * as migration_history_route from "app/entities/migration-history/migration-history.route"
import * as migration_history_service from "app/entities/migration-history/migration-history.service"

// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService("a1969970175")
        inst2 = new migration_history_route.MigrationHistoryResolve(inst)
    })

    test("0", () => {
        let result: any = inst2.resolve("https://", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.resolve("https://croplands.org/app/a/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.resolve("www.google.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.resolve("https://api.telegram.org/bot", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.resolve("Www.GooGle.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.resolve("", "")
        expect(result).toMatchSnapshot()
    })
})
