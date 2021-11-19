import * as migration_detail_component from "app/entities/migration/migration-detail.component"
import * as router from "@angular/router"
import * as migration_service from "app/entities/migration/migration.service"
import * as http from "@angular/common/http"
import * as migration_process_service from "app/migration/migration-process.service"

import * as migration_model from "app/shared/model/migration.model"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("checkProject", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.checkProject("Investment Account", "")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.checkProject("Credit Card Account", "")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst8.checkProject("Home Loan Account", "")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst8.checkProject("Checking Account", "")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst8.checkProject("Investment Account", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst8.checkProject("", "")
        expect(result).toMatchSnapshot()
    })
})

describe("initProject", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.initProject("Credit Card Account")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.initProject("Checking Account")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst8.initProject("Home Loan Account")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst8.initProject("Investment Account")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst8.initProject("")
        expect(result).toMatchSnapshot()
    })
})

describe("getProjectName", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let param1: any = new migration_detail_component.InnerProject("Maurice Purdy", "Janet Homenick", migration_model.StatusEnum.IGNORED, "Maurice Purdy")
        let result: any = inst8.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_detail_component.InnerProject("Gail Hoppe", "Gail Hoppe", migration_model.StatusEnum.FAILED, "Janet Homenick")
        let result: any = inst8.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_detail_component.InnerProject("Becky Bednar", "Ronald Keeling", migration_model.StatusEnum.IGNORED, "Janet Homenick")
        let result: any = inst8.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_detail_component.InnerProject("Maurice Purdy", "Becky Bednar", migration_model.StatusEnum.WAITING, "Maurice Purdy")
        let result: any = inst8.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_detail_component.InnerProject("Janet Homenick", "Ronald Keeling", migration_model.StatusEnum.WAITING, "Janet Homenick")
        let result: any = inst8.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_detail_component.InnerProject("", "", migration_model.StatusEnum.FAILED, "")
        let result: any = inst8.getProjectName(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("getBranchesInfo", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.getBranchesInfo()
        expect(result).toMatchSnapshot()
    })
})

describe("removeProject", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.removeProject("http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.removeProject("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst8.removeProject("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst8.removeProject("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst8.removeProject("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst8.removeProject("")
        expect(result).toMatchSnapshot()
    })
})

describe("getTagsInfo", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.getTagsInfo()
        expect(result).toMatchSnapshot()
    })
})

describe("getMigrationFromUrl", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.getMigrationFromUrl()
        expect(result).toMatchSnapshot()
    })
})

describe("getMigrationToUrl", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.getMigrationToUrl()
        expect(result).toMatchSnapshot()
    })
})

describe("getStatusIcon", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.getStatusIcon()
        expect(result).toMatchSnapshot()
    })
})

describe("isStatusIconSpin", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.isStatusIconSpin()
        expect(result).toMatchSnapshot()
    })
})

describe("getValueToDisplay", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.getValueToDisplay("Elio,", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.getValueToDisplay(",", false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst8.getValueToDisplay("Elio,", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst8.getValueToDisplay("elio@example.com,,Elio", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst8.getValueToDisplay(",", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst8.getValueToDisplay("", false)
        expect(result).toMatchSnapshot()
    })
})

describe("start", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.start()
        expect(result).toMatchSnapshot()
    })
})

describe("migrationUpdated", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.migrationUpdated()
        expect(result).toMatchSnapshot()
    })
})

describe("migrationNotPossible", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.migrationNotPossible()
        expect(result).toMatchSnapshot()
    })
})

describe("edit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.edit("George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.edit("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst8.edit("Anas")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst8.edit("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst8.edit("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("renameMigration", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new http.HttpHandler()
        inst3 = new http.HttpClient(inst2)
        inst4 = new migration_service.MigrationService(inst3)
        inst5 = new http.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new migration_process_service.MigrationProcessService(inst6)
        inst8 = new migration_detail_component.MigrationDetailComponent(inst, inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.renameMigration("9876")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.renameMigration("da7588892")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst8.renameMigration("c466a48309794261b64a4f02cfcc3d64")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst8.renameMigration("12345")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst8.renameMigration("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst8.renameMigration("")
        expect(result).toMatchSnapshot()
    })
})
