import * as confirm_retry_component from "app/migration/confirm-retry.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as configuration_service from "app/shared/service/configuration-service"

describe("retry", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new configuration_service.ConfigurationService(undefined)
        inst3 = new confirm_retry_component.JhiConfirmRetryModalComponent(undefined, inst, inst2, 4)
    })

    test("0", () => {
        let result: any = inst3.retry()
        expect(result).toMatchSnapshot()
    })
})

describe("select", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new configuration_service.ConfigurationService(undefined)
        inst3 = new confirm_retry_component.JhiConfirmRetryModalComponent(undefined, inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst3.select()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new configuration_service.ConfigurationService(undefined)
        inst3 = new confirm_retry_component.JhiConfirmRetryModalComponent(undefined, inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst3.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("cancel", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(undefined)
        inst2 = new configuration_service.ConfigurationService(undefined)
        inst3 = new confirm_retry_component.JhiConfirmRetryModalComponent(undefined, inst, inst2, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst3.cancel()
        expect(result).toMatchSnapshot()
    })
})
