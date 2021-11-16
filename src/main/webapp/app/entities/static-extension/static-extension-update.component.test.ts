import * as static_extension_update_component from "app/entities/static-extension/static-extension-update.component"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(undefined)
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(undefined)
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})
