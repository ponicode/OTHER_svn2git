import * as migration_history_service from "app/entities/migration-history/migration-history.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(undefined)
    })

    test("0", () => {
        let result: any = inst.find("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find(12345)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(987650)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(12)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.find(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(undefined)
    })

    test("0", () => {
        let result: any = inst.query(undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_history_service.MigrationHistoryService(undefined)
    })

    test("0", () => {
        let result: any = inst.delete(987650)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete(56784)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(12345)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete(12)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.delete(Infinity)
        expect(result).toMatchSnapshot()
    })
})
