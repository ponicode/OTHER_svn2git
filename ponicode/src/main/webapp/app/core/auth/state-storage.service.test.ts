import * as state_storage_service from "app/core/auth/state-storage.service"
import * as ngx_webstorage from "ngx-webstorage"
import * as rxjs from "rxjs"

describe("getPreviousState", () => {
    let inst4: any
    let inst3: any
    let inst2: any
    let inst: any
    let inst5: any
    let inst6: any

    beforeEach(() => {
        inst4 = new rxjs.Observable(undefined)
        inst3 = new rxjs.Observable(undefined)
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst5 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: false, name: "Anas", get: () => inst2, set: () => inst3, del: () => null, clear: () => inst4 })
        inst6 = new state_storage_service.StateStorageService(inst5)
    })

    test("0", () => {
        let result: any = inst6.getPreviousState()
        expect(result).toMatchSnapshot()
    })
})

describe("resetPreviousState", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: false, name: "George", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.resetPreviousState()
        expect(result).toMatchSnapshot()
    })
})

describe("storePreviousState", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: false, name: "Michael", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.storePreviousState("Île-de-France", "Abruzzo")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.storePreviousState("Abruzzo", "Florida")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.storePreviousState("Île-de-France", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.storePreviousState("Abruzzo", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.storePreviousState("Alabama", "Florida")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.storePreviousState("", "")
        expect(result).toMatchSnapshot()
    })
})

describe("getDestinationState", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: false, name: "Anas", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.getDestinationState()
        expect(result).toMatchSnapshot()
    })
})

describe("storeUrl", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: false, name: "Anas", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.storeUrl("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.storeUrl("https://")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.storeUrl("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.storeUrl("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.storeUrl("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.storeUrl("")
        expect(result).toMatchSnapshot()
    })
})

describe("getUrl", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: false, name: "Michael", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.getUrl()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("storeDestinationState", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: true, name: "George", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.storeDestinationState("{}", "Île-de-France", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.storeDestinationState("{}", "Florida", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.storeDestinationState("{}", "Alabama", "Alabama")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.storeDestinationState("{}", "Alabama", "Florida")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.storeDestinationState("{}", "Alabama", "Abruzzo")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.storeDestinationState("", "", "")
        expect(result).toMatchSnapshot()
    })
})
