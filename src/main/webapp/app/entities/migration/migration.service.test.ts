import * as migration_service from "app/entities/migration/migration.service"

// @ponicode
describe("retry", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
    })

    test("0", () => {
        let result: any = inst.retry(12345, true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.retry(12, true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.retry(12345, false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.retry(12, false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.retry("a1969970175", false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.retry(NaN, false)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
    })

    test("0", () => {
        let result: any = inst.find(987650)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find(12)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(12345)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.find(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findHistories", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
    })

    test("0", () => {
        let result: any = inst.findHistories(56784)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.findHistories(12)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.findHistories(987650)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.findHistories("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.findHistories("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.findHistories(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findMappings", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
    })

    test("0", () => {
        let result: any = inst.findMappings(12)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.findMappings(56784)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.findMappings("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.findMappings(987650)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.findMappings("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.findMappings(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
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
        inst = new migration_service.MigrationService(undefined)
    })

    test("0", () => {
        let result: any = inst.delete("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete(56784)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete(12)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(987650)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete(12345)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.delete(Infinity)
        expect(result).toMatchSnapshot()
    })
})
