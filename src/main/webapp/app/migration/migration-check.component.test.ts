import * as migration_check_component from "app/migration/migration-check.component"
import * as migration_process_service from "app/migration/migration-process.service"
import * as migration_service from "app/entities/migration/migration.service"

import * as migration_model from "app/shared/model/migration.model"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_check_component.MigrationCheckComponent(undefined, inst, inst2, undefined, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("retry", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_check_component.MigrationCheckComponent(undefined, inst, inst2, undefined, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.retry(12345)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.retry("a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.retry("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.retry(12)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.retry(987650)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.retry(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("cssClass", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_check_component.MigrationCheckComponent(undefined, inst, inst2, undefined, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.WAITING)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.DONE)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.FAILED)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.IGNORED)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.cssClass(migration_model.StatusEnum.DONE_WITH_WARNINGS)
        expect(result).toMatchSnapshot()
    })
})

describe("openSnackBar", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_check_component.MigrationCheckComponent(undefined, inst, inst2, undefined, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.openSnackBar("Could not find an existing submission in location.  rubric is original.", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.openSnackBar("Grader id does not match submission id that was passed in", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.openSnackBar("Exception not raised: %s", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.openSnackBar("Internal Server Error\n", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.openSnackBar("Bad Authentication data", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.openSnackBar("", true)
        expect(result).toMatchSnapshot()
    })
})

describe("page", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_check_component.MigrationCheckComponent(undefined, inst, inst2, undefined, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.page("invoice")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.page(-100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.page(true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.page(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.page(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.page(Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("exportToCsv", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_check_component.MigrationCheckComponent(undefined, inst, inst2, undefined, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.exportToCsv()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getFilter", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new migration_check_component.MigrationCheckComponent(undefined, inst, inst2, undefined, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst3.getFilter(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getFilter(false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getFilter({ pageIndex: -100, pageSize: "https://twitter.com/path?abc" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getFilter({ pageIndex: 0, pageSize: "https://croplands.org/app/a/confirm?t=" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getFilter(-100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getFilter(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
