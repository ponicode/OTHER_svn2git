import * as static_extension_component from "app/entities/static-extension/static-extension.component"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("trackId", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, undefined, undefined, inst3)
    })

    test("0", () => {
        let result: any = inst4.trackId(100, { id: 987650, value: "Elio", description: "Organize files in your directory instantly, ", enabled: true, name: "Michael" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.trackId(-100, { id: 987650, value: "Dillenberg", description: "policy_abc", enabled: true, name: "Pierre Edouard" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.trackId(0, { id: 987650, value: "Elio", description: "No description available.", enabled: true, name: "Edmond" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.trackId(-1, { id: 12345, value: "Elio", description: "No description available.", enabled: true, name: "Pierre Edouard" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.trackId(100, { id: "bc23a9d531064583ace8f67dad60f6bb", value: "Dillenberg", description: "No description available.", enabled: false, name: "Edmond" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.trackId(-Infinity, { id: -Infinity, value: "", description: "", enabled: false, name: "" })
        expect(result).toMatchSnapshot()
    })
})
