import * as migration_init_component from "app/migration/migration-init.component"

// @ponicode
describe("setCleaning", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_init_component.MigrationInitComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.setCleaning(true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setCleaning(false)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setMapping", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_init_component.MigrationInitComponent(undefined)
    })

    test("0", () => {
        let result: any = inst.setMapping(false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setMapping(true)
        expect(result).toMatchSnapshot()
    })
})
