import * as migration_init_component from "app/migration/migration-init.component"

// @ponicode
describe("start", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_init_component.MigrationInitComponent("https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst.start()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setMapping", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_init_component.MigrationInitComponent("https://")
    })

    test("0", () => {
        let result: any = inst.setMapping(false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setMapping(true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.setMapping(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setCleaning", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_init_component.MigrationInitComponent("ponicode.com")
    })

    test("0", () => {
        let result: any = inst.setCleaning(true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setCleaning(false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.setCleaning(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("setUpload", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_init_component.MigrationInitComponent("https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst.setUpload(true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.setUpload(false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.setUpload(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("uploadTo", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_init_component.MigrationInitComponent("https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst.uploadTo("c466a48309794261b64a4f02cfcc3d64")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.uploadTo("9876")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.uploadTo("da7588892")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.uploadTo("12345")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.uploadTo("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.uploadTo("")
        expect(result).toMatchSnapshot()
    })
})
