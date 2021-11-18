import * as static_extension_component from "app/entities/static-extension/static-extension.component"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(56784)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, 12, "da7588892", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(987650)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, 56784, "c466a48309794261b64a4f02cfcc3d64", inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInStaticExtensions", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(56784)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, "bc23a9d531064583ace8f67dad60f6bb", "12345", inst3)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInStaticExtensions()
        expect(result).toMatchSnapshot()
    })
})

describe("trackId", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, 56784, "c466a48309794261b64a4f02cfcc3d64", inst3)
    })

    test("0", () => {
        let result: any = inst4.trackId(-1, { id: 1, value: undefined, description: "This is group1", enabled: false, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.trackId(0, { id: undefined, value: undefined, description: "No description available.", enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.trackId(-1, { id: undefined, value: undefined, description: "description", enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.trackId(0, { id: 1, value: "Elio", description: undefined, enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.trackId(0, { id: undefined, value: undefined, description: "This is group1", enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.trackId(NaN, { id: undefined, value: undefined, description: "", enabled: undefined, name: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(987650)
        inst2 = new account_service.AccountService(987650)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, 56784, "12345", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(12345)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new static_extension_component.StaticExtensionComponent(inst, "a1969970175", "da7588892", inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("ValueError exception should be raised")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("Warning: ")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("There is a mismatch")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("Unknown Error")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("No os dependencies found. ")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})
