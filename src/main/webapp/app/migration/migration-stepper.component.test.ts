import * as migration_stepper_component from "app/migration/migration-stepper.component"
import * as migration_process_service from "app/migration/migration-process.service"
import * as migration_service from "app/entities/migration/migration.service"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"
import * as configuration_service from "app/shared/service/configuration-service"

describe("getGitlabUser", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new static_mapping_service.StaticMappingService(undefined)
        inst4 = new static_extension_service.StaticExtensionService(undefined)
        inst5 = new configuration_service.ConfigurationService(undefined)
        inst6 = new migration_stepper_component.MigrationStepperComponent(undefined, inst, inst2, inst3, undefined, undefined, undefined, undefined, inst4, inst5, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.getGitlabUser()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("checkGitlabGroup", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst = new migration_process_service.MigrationProcessService(undefined)
        inst2 = new migration_service.MigrationService(undefined)
        inst3 = new static_mapping_service.StaticMappingService(undefined)
        inst4 = new static_extension_service.StaticExtensionService(undefined)
        inst5 = new configuration_service.ConfigurationService(undefined)
        inst6 = new migration_stepper_component.MigrationStepperComponent(undefined, inst, inst2, inst3, undefined, undefined, undefined, undefined, inst4, inst5, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst6.checkGitlabGroup()
        expect(result).toMatchSnapshot()
    })
})
)
