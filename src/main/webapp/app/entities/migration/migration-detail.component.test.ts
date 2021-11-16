import * as migration_detail_component from "app/entities/migration/migration-detail.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as migration_process_service from "app/migration/migration-process.service"

import * as migration_model from "app/shared/model/migration.model"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("initProject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.initProject("Investment Account")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.initProject("Credit Card Account")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.initProject("Home Loan Account")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.initProject("Checking Account")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.initProject("")
        expect(result).toMatchSnapshot()
    })
})

describe("checkProject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.checkProject("Home Loan Account", "Gail Hoppe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.checkProject("Investment Account", "Ronald Keeling")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.checkProject("Credit Card Account", "Janet Homenick")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.checkProject("Home Loan Account", "Maurice Purdy")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.checkProject("Investment Account", "Janet Homenick")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.checkProject("", "")
        expect(result).toMatchSnapshot()
    })
})

describe("removeProject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.removeProject("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.removeProject("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.removeProject("George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.removeProject("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.removeProject("Anas")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.removeProject("")
        expect(result).toMatchSnapshot()
    })
})

describe("getBranchesInfo", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getBranchesInfo()
        expect(result).toMatchSnapshot()
    })
})

describe("getProjectName", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let param1: any = new migration_detail_component.InnerProject("Anas", "Anas", migration_model.StatusEnum.RUNNING, "Edmond")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_detail_component.InnerProject("Edmond", "Pierre Edouard", migration_model.StatusEnum.DONE_WITH_WARNINGS, "Anas")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_detail_component.InnerProject("Anas", "Pierre Edouard", migration_model.StatusEnum.IGNORED, "Michael")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_detail_component.InnerProject("Pierre Edouard", "Edmond", migration_model.StatusEnum.WAITING, "Jean-Philippe")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_detail_component.InnerProject("Anas", "Michael", migration_model.StatusEnum.DONE, "Michael")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_detail_component.InnerProject("", "", migration_model.StatusEnum.RUNNING, "")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("getMigrationFromUrl", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getMigrationFromUrl()
        expect(result).toMatchSnapshot()
    })
})

describe("getMigrationToUrl", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getMigrationToUrl()
        expect(result).toMatchSnapshot()
    })
})

describe("isStatusIconSpin", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.isStatusIconSpin()
        expect(result).toMatchSnapshot()
    })
})

describe("start", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.start()
        expect(result).toMatchSnapshot()
    })
})

describe("getValueToDisplay", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getValueToDisplay(",", false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getValueToDisplay("Dillenberg,", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getValueToDisplay(",", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getValueToDisplay("elio@example.com,elio@example.com", false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getValueToDisplay("elio@example.com,,elio@example.com", false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getValueToDisplay("", false)
        expect(result).toMatchSnapshot()
    })
})

describe("migrationUpdated", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.migrationUpdated()
        expect(result).toMatchSnapshot()
    })
})

describe("migrationNotPossible", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.migrationNotPossible()
        expect(result).toMatchSnapshot()
    })
})

describe("edit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.edit("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.edit("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.edit("George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.edit("Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.edit("Michael")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.edit("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("renameMigration", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new migration_process_service.MigrationProcessService(undefined)
        inst3 = new migration_detail_component.MigrationDetailComponent(undefined, inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.renameMigration("2017-09-29T23:01:00.000Z")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.renameMigration("01:04:03")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.renameMigration("2017-09-29T19:01:00.000")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.renameMigration("Mon Aug 03 12:45:00")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.renameMigration("")
        expect(result).toMatchSnapshot()
    })
})
