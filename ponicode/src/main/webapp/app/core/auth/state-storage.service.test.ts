import * as state_storage_service from "app/core/auth/state-storage.service"

// @ponicode
describe("resetPreviousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService("https://croplands.org/app/a/confirm?t=")
    })

    test("0", () => {
        let result: any = inst.resetPreviousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getPreviousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService("http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst.getPreviousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("storePreviousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService("https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst.storePreviousState("Île-de-France", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.storePreviousState("Abruzzo", "Île-de-France")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.storePreviousState("Florida", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.storePreviousState("Alabama", "Abruzzo")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.storePreviousState("Alabama", "Île-de-France")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.storePreviousState("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getDestinationState", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService("ponicode.com")
    })

    test("0", () => {
        let result: any = inst.getDestinationState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("storeUrl", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService("http://base.com")
    })

    test("0", () => {
        let result: any = inst.storeUrl("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.storeUrl("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.storeUrl("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.storeUrl("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.storeUrl("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.storeUrl("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getUrl", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService("https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst.getUrl()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("storeDestinationState", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService("https://")
    })

    test("0", () => {
        let result: any = inst.storeDestinationState("{}", "Île-de-France", "Île-de-France")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.storeDestinationState("{}", "Abruzzo", "Abruzzo")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.storeDestinationState("{}", "Florida", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.storeDestinationState("{}", "Île-de-France", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.storeDestinationState("{}", "Île-de-France", "Florida")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.storeDestinationState("", "", "")
        expect(result).toMatchSnapshot()
    })
})
