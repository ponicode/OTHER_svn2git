import * as migration_stepper_component from "app/migration/migration-stepper.component"
import * as migration_process_service from "app/migration/migration-process.service"
import * as migration_service from "app/entities/migration/migration.service"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"
import * as configuration_service from "app/shared/service/configuration-service"

import * as migration_model from "app/shared/model/migration.model"
import * as static_extension_model from "app/shared/model/static-extension.model"
describe("getGitlabUser", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService("a1969970175")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, -29.45, "v4.0.0-rc.4", 100, "http://www.example.com/route/123?foo=bar", inst4, inst5, "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst6.getGitlabUser()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new static_mapping_service.StaticMappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Michael", inst, inst2, inst3, 1.0, "1.0.0", -5.48, "Www.GooGle.com", inst4, inst5, "http://www.example.com/route/123?foo=bar", "https://")
    })

    test("0", () => {
        let result: any = inst6.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("checkGitlabUser", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(12)
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, -1.0, "v1.2.4", -5.48, "https://api.telegram.org/bot", inst4, inst5, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst6.checkGitlabUser()
        expect(result).toMatchSnapshot()
    })
})

describe("checkGitlabGroup", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new static_mapping_service.StaticMappingService("a1969970175")
        inst4 = new static_extension_service.StaticExtensionService(12)
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, 0.0, "v1.2.4", 0, "http://base.com", inst4, inst5, "http://base.com", "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst6.checkGitlabGroup()
        expect(result).toMatchSnapshot()
    })
})

describe("createGitlabGroup", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, 10.23, "1.0.0", -100, "https://api.telegram.org/bot", inst4, inst5, "http://www.croplands.org/account/confirm?t=", "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst6.createGitlabGroup()
        expect(result).toMatchSnapshot()
    })
})

describe("checkSvnRepository", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService("a1969970175")
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("George", inst, inst2, inst3, -0.5, "v1.2.4", 0, "www.google.com", inst4, inst5, "https://twitter.com/path?abc", "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst6.checkSvnRepository()
        expect(result).toMatchSnapshot()
    })
})

describe("fillModules", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(12)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService(56784)
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 0.5, "v1.2.4", -100, "http://www.example.com/route/123?foo=bar", inst4, inst5, "https://api.telegram.org/", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let param1: any = new migration_process_service.SvnModule(["Janet Homenick"], "Janet Homenick", "Maurice Purdy", [], true)
        let result: any = inst6.fillModules(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_process_service.SvnModule(["Gail Hoppe", "Gail Hoppe", "Maurice Purdy", "Gail Hoppe", "Gail Hoppe"], "Becky Bednar", "Maurice Purdy", [], true)
        let result: any = inst6.fillModules(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_process_service.SvnModule(["Ronald Keeling", "Ronald Keeling", "Ronald Keeling", "Janet Homenick", "Ronald Keeling"], "Janet Homenick", "Janet Homenick", [], true)
        let result: any = inst6.fillModules(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_process_service.SvnModule(["Gail Hoppe", "Maurice Purdy", "Maurice Purdy"], "Janet Homenick", "Ronald Keeling", [], true)
        let result: any = inst6.fillModules(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_process_service.SvnModule(["Ronald Keeling", "Becky Bednar", "Ronald Keeling", "Janet Homenick", "Janet Homenick"], "Becky Bednar", "Janet Homenick", [], true)
        let result: any = inst6.fillModules(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_process_service.SvnModule([], "", "", [], true)
        let result: any = inst6.fillModules(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("loadExtensions", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(12)
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService("a1969970175")
        inst5 = new configuration_service.ConfigurationService(12)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Michael", inst, inst2, inst3, -1.0, "1.0.0", 100, "https://croplands.org/app/a/reset?token=", inst4, inst5, "http://www.croplands.org/account/confirm?t=", "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst6.loadExtensions()
        expect(result).toMatchSnapshot()
    })
})

describe("removeSelection", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService("a1969970175")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 10.23, "1.0.0", -5.48, "https://api.telegram.org/", inst4, inst5, "http://base.com", "http://base.com")
    })

    test("0", () => {
        let result: any = inst6.removeSelection("George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.removeSelection("Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.removeSelection("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.removeSelection("Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.removeSelection("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.removeSelection("")
        expect(result).toMatchSnapshot()
    })
})

describe("renameModule", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new static_mapping_service.StaticMappingService("a1969970175")
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService(12345)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, 0.5, "4.0.0-beta1\t", 1, "http://base.com", inst4, inst5, "http://www.example.com/route/123?foo=bar", "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let param1: any = new migration_model.MigrationRenaming("Gail Hoppe", "Maurice Purdy")
        let result: any = inst6.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_model.MigrationRenaming("Becky Bednar", "Janet Homenick")
        let result: any = inst6.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_model.MigrationRenaming("Maurice Purdy", "Becky Bednar")
        let result: any = inst6.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_model.MigrationRenaming("Ronald Keeling", "Gail Hoppe")
        let result: any = inst6.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_model.MigrationRenaming("Ronald Keeling", "Becky Bednar")
        let result: any = inst6.renameModule(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_model.MigrationRenaming("", "")
        let result: any = inst6.renameModule(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("go", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12345)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Michael", inst, inst2, inst3, 0.0, "v1.2.4", 1, "www.google.com", inst4, inst5, "www.google.com", "https://")
    })

    test("0", async () => {
        await inst6.go()
    })
})

describe("isRealMappingRow", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService(12)
        inst4 = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new configuration_service.ConfigurationService("a1969970175")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 10.23, "^5.0.0", 0, "Www.GooGle.com", inst4, inst5, "Www.GooGle.com", "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst6.isRealMappingRow({ id: -5.48, svnDirectory: "", regex: undefined, gitDirectory: "/usr/share", migration: undefined, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.isRealMappingRow({ id: -100, svnDirectory: "", regex: undefined, gitDirectory: "/usr/share", migration: 18, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.isRealMappingRow({ id: undefined, svnDirectory: "", regex: "(?P<first_group_name>.*)-(?P<second_group_name>.*)", gitDirectory: undefined, migration: 5, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.isRealMappingRow({ id: -5.48, svnDirectory: "", regex: "(file format) ([a-zA-Z0-9_\\-]+)", gitDirectory: "/opt/share", migration: undefined, isStatic: true, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.isRealMappingRow({ id: 100, svnDirectory: "", regex: undefined, gitDirectory: "/usr/ports", migration: undefined, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.isRealMappingRow({ id: NaN, svnDirectory: "", regex: undefined, gitDirectory: "", migration: NaN, isStatic: undefined, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("initMigration", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService("a1969970175")
        inst4 = new static_extension_service.StaticExtensionService(12)
        inst5 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, 10.23, "^5.0.0", -100, "www.google.com", inst4, inst5, "https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst6.initMigration("path/to/folder/", false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.initMigration("path/to/folder/", true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.initMigration("./path/to/file", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.initMigration("C:\\\\path\\to\\file.ext", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.initMigration("C:\\\\path\\to\\folder\\", false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.initMigration("", true)
        expect(result).toMatchSnapshot()
    })
})

describe("canChangeMappingValue", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService(12)
        inst4 = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 0.5, "1.0.0", 100, "https://croplands.org/app/a/reset?token=", inst4, inst5, "https://api.telegram.org/", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst6.canChangeMappingValue({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: "/usr/sbin", migration: 25, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.canChangeMappingValue({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: "/usr/ports", migration: 18, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.canChangeMappingValue({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: "/usr/ports", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.canChangeMappingValue({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: "/usr/sbin", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.canChangeMappingValue({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: "/selinux", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.canChangeMappingValue({ id: undefined, svnDirectory: "", regex: undefined, gitDirectory: "", migration: -Infinity, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

describe("deleteMapping", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService("a1969970175")
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, 10.23, "v1.2.4", -100, "http://www.example.com/route/123?foo=bar", inst4, inst5, "http://base.com", "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst6.deleteMapping("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.deleteMapping("https://")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.deleteMapping("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.deleteMapping("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.deleteMapping("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.deleteMapping("")
        expect(result).toMatchSnapshot()
    })
})

describe("toggleMapping", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 1.0, "^5.0.0", -100, "https://croplands.org/app/a/confirm?t=", inst4, inst5, "http://base.com", "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst6.toggleMapping("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.toggleMapping("")
        expect(result).toMatchSnapshot()
    })
})

describe("toggleMappingEntryType", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService("a1969970175")
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Michael", inst, inst2, inst3, 0.5, "v1.2.4", -5.48, "www.google.com", inst4, inst5, "https://accounts.google.com/o/oauth2/revoke?token=%s", "www.google.com")
    })

    test("0", () => {
        let result: any = inst6.toggleMappingEntryType({ id: 100, svnDirectory: undefined, regex: "definition-signature\\s(?P<signature>[\\w=\\/+]+)", gitDirectory: "/selinux", migration: undefined, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.toggleMappingEntryType({ id: -100, svnDirectory: undefined, regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: "/usr/ports", migration: undefined, isStatic: false, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.toggleMappingEntryType({ id: undefined, svnDirectory: "1.0.0", regex: undefined, gitDirectory: "/usr/sbin", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.toggleMappingEntryType({ id: undefined, svnDirectory: "v1.2.4", regex: undefined, gitDirectory: "/opt/share", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.toggleMappingEntryType({ id: 0, svnDirectory: "1.0.0", regex: undefined, gitDirectory: undefined, migration: 18, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.toggleMappingEntryType({ id: Infinity, svnDirectory: undefined, regex: undefined, gitDirectory: "", migration: undefined, isStatic: undefined, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

describe("toggleSvnDirectoryDeleteType", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 0.5, "1.0.0", -5.48, "https://accounts.google.com/o/oauth2/revoke?token=%s", inst4, inst5, "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst6.toggleSvnDirectoryDeleteType({ id: 100, svnDirectory: undefined, regex: "^(?P<key>(Product|Build|Sequence|BaseBuild|Edition|Date|Built|Changelist|JobID))\\:(?P<value>.*)", gitDirectory: undefined, migration: 5, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.toggleSvnDirectoryDeleteType({ id: undefined, svnDirectory: "1.0.0", regex: "(?P<first_group_name>.*)-(?P=first_group_name)", gitDirectory: "/opt/share", migration: undefined, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.toggleSvnDirectoryDeleteType({ id: undefined, svnDirectory: "^5.0.0", regex: "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", gitDirectory: undefined, migration: 5, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.toggleSvnDirectoryDeleteType({ id: undefined, svnDirectory: undefined, regex: "(file format) ([a-zA-Z0-9_\\-]+)", gitDirectory: "/usr/sbin", migration: undefined, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.toggleSvnDirectoryDeleteType({ id: undefined, svnDirectory: "^5.0.0", regex: "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", gitDirectory: "/usr/share", migration: undefined, isStatic: true, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.toggleSvnDirectoryDeleteType({ id: undefined, svnDirectory: "", regex: "", gitDirectory: undefined, migration: NaN, isStatic: false, svnDirectoryDelete: false })
        expect(result).toMatchSnapshot()
    })
})

describe("isOriginSvnDeleteDirectory", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService(56784)
        inst5 = new configuration_service.ConfigurationService(12)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, 1.0, "v4.0.0-rc.4", -100, "https://twitter.com/path?abc", inst4, inst5, "http://base.com", "https://croplands.org/app/a/reset?token=")
    })

    test("0", () => {
        let result: any = inst6.isOriginSvnDeleteDirectory({ id: -100, svnDirectory: "4.0.0-beta1\t", regex: "", gitDirectory: "", migration: 5, isStatic: true, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.isOriginSvnDeleteDirectory({ id: -5.48, svnDirectory: "1.0.0", regex: "", gitDirectory: "", migration: undefined, isStatic: true, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.isOriginSvnDeleteDirectory({ id: undefined, svnDirectory: undefined, regex: "", gitDirectory: "", migration: 75, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.isOriginSvnDeleteDirectory({ id: undefined, svnDirectory: "1.0.0", regex: "", gitDirectory: "", migration: undefined, isStatic: false, svnDirectoryDelete: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.isOriginSvnDeleteDirectory({ id: undefined, svnDirectory: undefined, regex: "", gitDirectory: "", migration: 5, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.isOriginSvnDeleteDirectory({ id: undefined, svnDirectory: undefined, regex: "", gitDirectory: "", migration: -Infinity, isStatic: undefined, svnDirectoryDelete: true })
        expect(result).toMatchSnapshot()
    })
})

describe("reverseSvn", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("George", inst, inst2, inst3, 10.0, "4.0.0-beta1\t", 0, "ponicode.com", inst4, inst5, "https://api.telegram.org/", "http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst6.reverseSvn()
        expect(result).toMatchSnapshot()
    })
})

describe("svnToggle", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(12)
        inst4 = new static_extension_service.StaticExtensionService(12)
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, 10.0, "v4.0.0-rc.4", 100, "www.google.com", inst4, inst5, "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let param2: any = new migration_process_service.SvnModule(["Janet Homenick", "Gail Hoppe", "Gail Hoppe", "Ronald Keeling"], "Gail Hoppe", "Maurice Purdy", [], true)
        let result: any = inst6.svnToggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param2: any = new migration_process_service.SvnModule(["Gail Hoppe", "Becky Bednar"], "Janet Homenick", "Maurice Purdy", [], true)
        let result: any = inst6.svnToggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param2: any = new migration_process_service.SvnModule(["Maurice Purdy", "Maurice Purdy", "Ronald Keeling"], "Ronald Keeling", "Becky Bednar", [], false)
        let result: any = inst6.svnToggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param2: any = new migration_process_service.SvnModule(["Ronald Keeling", "Ronald Keeling", "Gail Hoppe", "Ronald Keeling"], "Becky Bednar", "Becky Bednar", [], true)
        let result: any = inst6.svnToggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param2: any = new migration_process_service.SvnModule(["Becky Bednar", "Janet Homenick", "Maurice Purdy", "Gail Hoppe", "Ronald Keeling"], "Maurice Purdy", "Becky Bednar", [], true)
        let result: any = inst6.svnToggle("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", param2)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param2: any = new migration_process_service.SvnModule([], "", "", [], false)
        let result: any = inst6.svnToggle("", param2)
        expect(result).toMatchSnapshot()
    })
})

describe("svnChecked", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new static_mapping_service.StaticMappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Jean-Philippe", inst, inst2, inst3, -29.45, "v4.0.0-rc.4", 100, "http://base.com", inst4, inst5, "http://www.example.com/route/123?foo=bar", "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst6.svnChecked("/usr/share")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.svnChecked("/usr/ports")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.svnChecked("/opt/share")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.svnChecked("/usr/sbin")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.svnChecked("/selinux")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.svnChecked("")
        expect(result).toMatchSnapshot()
    })
})

describe("reverseGitlab", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService(12)
        inst4 = new static_extension_service.StaticExtensionService(12)
        inst5 = new configuration_service.ConfigurationService(12345)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Michael", inst, inst2, inst3, 0.0, "1.0.0", 100, "https://api.telegram.org/", inst4, inst5, "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst6.reverseGitlab()
        expect(result).toMatchSnapshot()
    })
})

describe("getSvnRepoKo", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, -0.5, "^5.0.0", 1, "https://twitter.com/path?abc", inst4, inst5, "http://base.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst6.getSvnRepoKo()
        expect(result).toMatchSnapshot()
    })
})

describe("getSvnModules", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(12)
        inst3 = new static_mapping_service.StaticMappingService("a1969970175")
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService(12345)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, 0.5, "v1.2.4", 1, "https://", inst4, inst5, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://base.com")
    })

    test("0", () => {
        let result: any = inst6.getSvnModules()
        expect(result).toMatchSnapshot()
    })
})

describe("isTrunkBranchesTagsEverywhere", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new static_extension_service.StaticExtensionService(12)
        inst5 = new configuration_service.ConfigurationService("a1969970175")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, 0.5, "^5.0.0", -100, "https://croplands.org/app/a/confirm?t=", inst4, inst5, "https://api.telegram.org/", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst6.isTrunkBranchesTagsEverywhere()
        expect(result).toMatchSnapshot()
    })
})

describe("isContainsTrunkBranchesTags", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12345)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Jean-Philippe", inst, inst2, inst3, -29.45, "4.0.0-beta1\t", 1, "http://www.croplands.org/account/confirm?t=", inst4, inst5, "Www.GooGle.com", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let param1: any = new migration_process_service.SvnModule(["Maurice Purdy", "Janet Homenick", "Ronald Keeling", "Gail Hoppe", "Gail Hoppe"], "Becky Bednar", "Maurice Purdy", [], false)
        let result: any = inst6.isContainsTrunkBranchesTags(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_process_service.SvnModule(["Janet Homenick"], "Becky Bednar", "Maurice Purdy", [], true)
        let result: any = inst6.isContainsTrunkBranchesTags(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_process_service.SvnModule(["Becky Bednar", "Janet Homenick"], "Becky Bednar", "Janet Homenick", [], true)
        let result: any = inst6.isContainsTrunkBranchesTags(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_process_service.SvnModule(["Maurice Purdy", "Janet Homenick", "Becky Bednar", "Gail Hoppe", "Gail Hoppe"], "Janet Homenick", "Becky Bednar", [], true)
        let result: any = inst6.isContainsTrunkBranchesTags(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_process_service.SvnModule(["Janet Homenick", "Janet Homenick", "Ronald Keeling", "Becky Bednar", "Maurice Purdy"], "Maurice Purdy", "Maurice Purdy", [], true)
        let result: any = inst6.isContainsTrunkBranchesTags(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_process_service.SvnModule([], "", "", [], true)
        let result: any = inst6.isContainsTrunkBranchesTags(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("addMapping", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService(12)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Jean-Philippe", inst, inst2, inst3, -0.5, "v4.0.0-rc.4", -5.48, "https://twitter.com/path?abc", inst4, inst5, "www.google.com", "www.google.com")
    })

    test("0", () => {
        let result: any = inst6.addMapping()
        expect(result).toMatchSnapshot()
    })
})

describe("onSelectionChange", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService("bc23a9d531064583ace8f67dad60f6bb")
        inst4 = new static_extension_service.StaticExtensionService("a1969970175")
        inst5 = new configuration_service.ConfigurationService(12345)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, -0.5, "v4.0.0-rc.4", 1, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", inst4, inst5, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "www.google.com")
    })

    test("0", () => {
        let result: any = inst6.onSelectionChange("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.onSelectionChange("")
        expect(result).toMatchSnapshot()
    })
})

describe("isDefaultExtensions", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("a1969970175")
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService("a1969970175")
        inst4 = new static_extension_service.StaticExtensionService(12)
        inst5 = new configuration_service.ConfigurationService("a1969970175")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 0.0, "^5.0.0", 0, "http://base.com", inst4, inst5, "https://", "https://")
    })

    test("0", () => {
        let result: any = inst6.isDefaultExtensions()
        expect(result).toMatchSnapshot()
    })
})

describe("removeExtension", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService("a1969970175")
        inst5 = new configuration_service.ConfigurationService(12)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, -1.0, "1.0.0", -5.48, "https://croplands.org/app/a/confirm?t=", inst4, inst5, "Www.GooGle.com", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let param1: any = new static_extension_model.Extension(undefined, undefined, "Janet Homenick", false, undefined, true)
        let result: any = inst6.removeExtension(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new static_extension_model.Extension(1000, "Janet Homenick", undefined, false, "Ronald Keeling", true)
        let result: any = inst6.removeExtension(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new static_extension_model.Extension(10, undefined, undefined, undefined, "Gail Hoppe", false)
        let result: any = inst6.removeExtension(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new static_extension_model.Extension(undefined, "Becky Bednar", undefined, false, undefined, true)
        let result: any = inst6.removeExtension(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new static_extension_model.Extension(1, undefined, undefined, undefined, "Maurice Purdy", true)
        let result: any = inst6.removeExtension(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new static_extension_model.Extension(undefined, "", "", true, "", false)
        let result: any = inst6.removeExtension(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("addExtension", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService(56784)
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Jean-Philippe", inst, inst2, inst3, 10.0, "1.0.0", 0, "https://", inst4, inst5, "http://www.example.com/route/123?foo=bar", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst6.addExtension()
        expect(result).toMatchSnapshot()
    })
})

describe("enableHistoryButtons", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService("a1969970175")
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new static_mapping_service.StaticMappingService("a1969970175")
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService(987650)
        inst6 = new migration_stepper_component.MigrationStepperComponent("George", inst, inst2, inst3, -1.0, "v1.2.4", -100, "https://", inst4, inst5, "https://croplands.org/app/a/reset?token=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst6.enableHistoryButtons("trunk")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.enableHistoryButtons("/usr/share")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.enableHistoryButtons("/selinux")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.enableHistoryButtons("/opt/share")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.enableHistoryButtons("/usr/sbin")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.enableHistoryButtons("")
        expect(result).toMatchSnapshot()
    })
})

describe("historyToggle", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12345)
        inst2 = new migration_service.MigrationService(12)
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService(12)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Jean-Philippe", inst, inst2, inst3, -1.0, "v4.0.0-rc.4", 1, "http://www.croplands.org/account/confirm?t=", inst4, inst5, "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst6.historyToggle("ToMigrate")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.historyToggle("/selinux")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.historyToggle("/usr/ports")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.historyToggle("/usr/share")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.historyToggle("/usr/sbin")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.historyToggle("")
        expect(result).toMatchSnapshot()
    })
})

describe("historyChecked", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService(12345)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Jean-Philippe", inst, inst2, inst3, 10.23, "v1.2.4", -5.48, "https://api.telegram.org/", inst4, inst5, "https://twitter.com/path?abc", "ponicode.com")
    })

    test("0", () => {
        let result: any = inst6.historyChecked("/selinux")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.historyChecked("/opt/share")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.historyChecked("/usr/share")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.historyChecked("")
        expect(result).toMatchSnapshot()
    })
})

describe("toggleFilter", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, -1.0, "^5.0.0", 0, "https://croplands.org/app/a/confirm?t=", inst4, inst5, "https://croplands.org/app/a/reset?token=", "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst6.toggleFilter("/usr/ports")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.toggleFilter("/selinux")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.toggleFilter("/opt/share")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.toggleFilter("/usr/share")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.toggleFilter("")
        expect(result).toMatchSnapshot()
    })
})

describe("openSnackBar", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService(987650)
        inst5 = new configuration_service.ConfigurationService(56784)
        inst6 = new migration_stepper_component.MigrationStepperComponent("George", inst, inst2, inst3, -29.45, "^5.0.0", 1, "https://croplands.org/app/a/reset?token=", inst4, inst5, "https://accounts.google.com/o/oauth2/revoke?token=%s", "www.google.com")
    })

    test("0", () => {
        let result: any = inst6.openSnackBar("Message recipient is the same as originator")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.openSnackBar("Bad Authentication data")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.openSnackBar("Error selecting from database")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.openSnackBar("Error:")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst6.openSnackBar("missing encoding")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst6.openSnackBar("")
        expect(result).toMatchSnapshot()
    })
})

describe("togglePreserveEmptyDirs", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService(56784)
        inst5 = new configuration_service.ConfigurationService("a1969970175")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, 1.0, "1.0.0", -5.48, "Www.GooGle.com", inst4, inst5, "https://twitter.com/path?abc", "https://")
    })

    test("0", () => {
        let result: any = inst6.togglePreserveEmptyDirs()
        expect(result).toMatchSnapshot()
    })
})

describe("svnFontStyle", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(56784)
        inst4 = new static_extension_service.StaticExtensionService("a1969970175")
        inst5 = new configuration_service.ConfigurationService(12345)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Jean-Philippe", inst, inst2, inst3, -0.5, "v1.2.4", 100, "https://accounts.google.com/o/oauth2/revoke?token=%s", inst4, inst5, "https://api.telegram.org/", "http://base.com")
    })

    test("0", () => {
        let param1: any = new migration_process_service.SvnModule(["Becky Bednar", "Janet Homenick", "Maurice Purdy"], "Becky Bednar", "Maurice Purdy", [], false)
        let result: any = inst6.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new migration_process_service.SvnModule(["Maurice Purdy", "Maurice Purdy", "Becky Bednar"], "Ronald Keeling", "Ronald Keeling", [], false)
        let result: any = inst6.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new migration_process_service.SvnModule(["Gail Hoppe", "Gail Hoppe"], "Gail Hoppe", "Janet Homenick", [], false)
        let result: any = inst6.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new migration_process_service.SvnModule(["Maurice Purdy", "Janet Homenick", "Gail Hoppe"], "Maurice Purdy", "Becky Bednar", [], true)
        let result: any = inst6.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new migration_process_service.SvnModule(["Gail Hoppe", "Maurice Purdy", "Maurice Purdy"], "Maurice Purdy", "Becky Bednar", [], true)
        let result: any = inst6.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new migration_process_service.SvnModule([], "", "", [], true)
        let result: any = inst6.svnFontStyle(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("containsFlatRepo", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12345)
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Anas", inst, inst2, inst3, 10.23, "1.0.0", 0, "http://www.croplands.org/account/confirm?t=", inst4, inst5, "https://api.telegram.org/bot", "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst6.containsFlatRepo()
        expect(result).toMatchSnapshot()
    })
})

describe("disableWhenOnlyFlat", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(987650)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(987650)
        inst4 = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst5 = new configuration_service.ConfigurationService(12)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Michael", inst, inst2, inst3, 10.0, "^5.0.0", 100, "Www.GooGle.com", inst4, inst5, "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst6.disableWhenOnlyFlat()
        expect(result).toMatchSnapshot()
    })
})

describe("fileSizeUnit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(12345)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService(12345)
        inst5 = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        inst6 = new migration_stepper_component.MigrationStepperComponent("Edmond", inst, inst2, inst3, 0.0, "v4.0.0-rc.4", 100, "https://croplands.org/app/a/confirm?t=", inst4, inst5, "https://api.telegram.org/bot", "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst6.fileSizeUnit("Dillenberg")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst6.fileSizeUnit("Elio")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst6.fileSizeUnit("elio@example.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst6.fileSizeUnit("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("warningUploadTag", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(56784)
        inst2 = new migration_service.MigrationService(12345)
        inst3 = new static_mapping_service.StaticMappingService(12345)
        inst4 = new static_extension_service.StaticExtensionService(56784)
        inst5 = new configuration_service.ConfigurationService(12345)
        inst6 = new migration_stepper_component.MigrationStepperComponent("Pierre Edouard", inst, inst2, inst3, 1.0, "^5.0.0", 0, "http://www.example.com/route/123?foo=bar", inst4, inst5, "https://croplands.org/app/a/reset?token=", "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst6.warningUploadTag()
        expect(result).toMatchSnapshot()
    })
})
