import * as migration_detail_component from "app/entities/migration/migration-detail.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as migration_process_service from "app/migration/migration-process.service"

import * as migration_model from "app/shared/model/migration.model"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_detail_component.MigrationDetailComponent("http://www.example.com/route/123?foo=bar", inst, inst2)
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
        inst = new migration_service.MigrationService(12)
        inst2 = new migration_process_service.MigrationProcessService("a1969970175")
        inst3 = new migration_detail_component.MigrationDetailComponent("https://accounts.google.com/o/oauth2/revoke?token=%s", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.initProject("Credit Card Account")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.initProject("Investment Account")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.initProject("Checking Account")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.initProject("")
        expect(result).toMatchSnapshot()
    })
})

describe("checkProject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(987650)
        inst2 = new migration_process_service.MigrationProcessService(56784)
        inst3 = new migration_detail_component.MigrationDetailComponent("https://api.telegram.org/", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.checkProject("Home Loan Account", "")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.checkProject("Credit Card Account", "")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.checkProject("Investment Account", "")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.checkProject("Checking Account", "")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.checkProject("Investment Account", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.checkProject("", "")
        expect(result).toMatchSnapshot()
    })
})

describe("getProjectName", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_detail_component.MigrationDetailComponent("https://api.telegram.org/", inst, inst2)
    })

    test("0", () => {
        let param1: any = new migration_detail_component.InnerProject("Maurice Purdy", "Becky Bednar", migration_model.StatusEnum.DONE_WITH_WARNINGS, "Gail Hoppe")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_detail_component.InnerProject("Ronald Keeling", "Maurice Purdy", migration_model.StatusEnum.FAILED, "Janet Homenick")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_detail_component.InnerProject("Becky Bednar", "Maurice Purdy", migration_model.StatusEnum.WAITING, "Janet Homenick")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_detail_component.InnerProject("Ronald Keeling", "Janet Homenick", migration_model.StatusEnum.DONE_WITH_WARNINGS, "Janet Homenick")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_detail_component.InnerProject("Maurice Purdy", "Ronald Keeling", migration_model.StatusEnum.FAILED, "Becky Bednar")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_detail_component.InnerProject("", "", migration_model.StatusEnum.WAITING, "")
        let result: any = inst3.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("removeProject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_process_service.MigrationProcessService(56784)
        inst3 = new migration_detail_component.MigrationDetailComponent("https://croplands.org/app/a/confirm?t=", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.removeProject("https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.removeProject("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.removeProject("https://")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.removeProject("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.removeProject("https://croplands.org/app/a/confirm?t=")
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
        inst = new migration_service.MigrationService(12345)
        inst2 = new migration_process_service.MigrationProcessService("a1969970175")
        inst3 = new migration_detail_component.MigrationDetailComponent("https://accounts.google.com/o/oauth2/revoke?token=%s", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getBranchesInfo()
        expect(result).toMatchSnapshot()
    })
})

describe("getTagsInfo", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new migration_process_service.MigrationProcessService(12)
        inst3 = new migration_detail_component.MigrationDetailComponent("https://", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getTagsInfo()
        expect(result).toMatchSnapshot()
    })
})

describe("getMigrationFromUrl", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new migration_process_service.MigrationProcessService(12345)
        inst3 = new migration_detail_component.MigrationDetailComponent("http://www.croplands.org/account/confirm?t=", inst, inst2)
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
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new migration_process_service.MigrationProcessService("a1969970175")
        inst3 = new migration_detail_component.MigrationDetailComponent("http://www.example.com/route/123?foo=bar", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getMigrationToUrl()
        expect(result).toMatchSnapshot()
    })
})

describe("getStatusIcon", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(12)
        inst2 = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_detail_component.MigrationDetailComponent("http://www.croplands.org/account/confirm?t=", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getStatusIcon()
        expect(result).toMatchSnapshot()
    })
})

describe("isStatusIconSpin", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new migration_process_service.MigrationProcessService(56784)
        inst3 = new migration_detail_component.MigrationDetailComponent("Www.GooGle.com", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.isStatusIconSpin()
        expect(result).toMatchSnapshot()
    })
})

describe("getValueToDisplay", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_detail_component.MigrationDetailComponent("www.google.com", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getValueToDisplay("elio@example.com,,Elio", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getValueToDisplay(",,", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getValueToDisplay(",,", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getValueToDisplay(",", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getValueToDisplay("Elio,", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getValueToDisplay("", false)
        expect(result).toMatchSnapshot()
    })
})

describe("start", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(987650)
        inst2 = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_detail_component.MigrationDetailComponent("https://accounts.google.com/o/oauth2/revoke?token=%s", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.start()
        expect(result).toMatchSnapshot()
    })
})

describe("migrationUpdated", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new migration_detail_component.MigrationDetailComponent("ponicode.com", inst, inst2)
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
        inst = new migration_service.MigrationService(12345)
        inst2 = new migration_process_service.MigrationProcessService(12)
        inst3 = new migration_detail_component.MigrationDetailComponent("Www.GooGle.com", inst, inst2)
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
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_process_service.MigrationProcessService(56784)
        inst3 = new migration_detail_component.MigrationDetailComponent("ponicode.com", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.edit("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.edit("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.edit("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.edit("Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.edit("George")
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
        inst = new migration_service.MigrationService(987650)
        inst2 = new migration_process_service.MigrationProcessService(987650)
        inst3 = new migration_detail_component.MigrationDetailComponent("https://accounts.google.com/o/oauth2/revoke?token=%s", inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.renameMigration("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.renameMigration("9876")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.renameMigration("c466a48309794261b64a4f02cfcc3d64")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.renameMigration("12345")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.renameMigration("")
        expect(result).toMatchSnapshot()
    })
})
