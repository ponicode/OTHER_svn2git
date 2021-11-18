import * as migration_update_component from "app/entities/migration/migration-update.component"
import * as migration_service from "app/entities/migration/migration.service"

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(987650)
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})

describe("save", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst2.save()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("subscribeToSaveResponse", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, "http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst2.subscribeToSaveResponse("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.subscribeToSaveResponse("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.subscribeToSaveResponse("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.subscribeToSaveResponse("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.subscribeToSaveResponse("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.subscribeToSaveResponse("")
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, "ponicode.com")
    })

    test("0", () => {
        let result: any = inst2.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveError", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new migration_update_component.MigrationUpdateComponent(inst, "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst2.onSaveError()
        expect(result).toMatchSnapshot()
    })
})
