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

// @ponicode
describe("getPreviousState", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: true, name: "Jean-Philippe", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.getPreviousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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

// @ponicode
describe("storePreviousState", () => {
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
        let object: any = [["Alabama", "Florida", "Abruzzo", "Alabama"], ["Florida", "Île-de-France", "Île-de-France", "Abruzzo"], ["Florida", "Île-de-France", "Île-de-France", "Abruzzo"], ["Île-de-France", "Florida", "Alabama", "Florida"]]
        let object2: any = [["Île-de-France", "Florida", "Île-de-France", "Île-de-France"], ["Abruzzo", "Florida", "Florida", "Île-de-France"], ["Alabama", "Florida", "Alabama", "Abruzzo"], ["Alabama", "Abruzzo", "Île-de-France", "Alabama"]]
        let object3: any = [["Abruzzo", "Florida", "Alabama", "Île-de-France"], ["Florida", "Alabama", "Abruzzo", "Alabama"], ["Abruzzo", "Florida", "Île-de-France", "Abruzzo"], ["Florida", "Abruzzo", "Alabama", "Abruzzo"]]
        let object4: any = [["Florida", "Abruzzo", "Florida", "Abruzzo"], ["Florida", "Florida", "Florida", "Florida"], ["Alabama", "Île-de-France", "Abruzzo", "Florida"], ["Alabama", "Abruzzo", "Île-de-France", "Île-de-France"]]
        let param2: any = [object, object2, object3, object4]
        let result: any = inst4.storePreviousState("Alabama", param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object: any = [["Abruzzo", "Alabama", "Alabama", "Florida"], ["Florida", "Île-de-France", "Florida", "Alabama"], ["Île-de-France", "Alabama", "Île-de-France", "Île-de-France"], ["Abruzzo", "Alabama", "Florida", "Île-de-France"]]
        let object2: any = [["Florida", "Abruzzo", "Florida", "Florida"], ["Alabama", "Alabama", "Florida", "Abruzzo"], ["Alabama", "Florida", "Île-de-France", "Abruzzo"], ["Île-de-France", "Abruzzo", "Florida", "Île-de-France"]]
        let object3: any = [["Florida", "Florida", "Florida", "Île-de-France"], ["Abruzzo", "Alabama", "Île-de-France", "Alabama"], ["Florida", "Île-de-France", "Florida", "Alabama"], ["Florida", "Abruzzo", "Île-de-France", "Abruzzo"]]
        let object4: any = [["Île-de-France", "Alabama", "Abruzzo", "Florida"], ["Florida", "Abruzzo", "Île-de-France", "Île-de-France"], ["Alabama", "Alabama", "Florida", "Alabama"], ["Alabama", "Abruzzo", "Abruzzo", "Abruzzo"]]
        let param2: any = [object, object2, object3, object4]
        let result: any = inst4.storePreviousState("Florida", param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object: any = [["Île-de-France", "Florida", "Île-de-France", "Île-de-France"], ["Alabama", "Île-de-France", "Florida", "Île-de-France"], ["Florida", "Alabama", "Île-de-France", "Abruzzo"], ["Alabama", "Île-de-France", "Florida", "Florida"]]
        let object2: any = [["Île-de-France", "Abruzzo", "Alabama", "Alabama"], ["Alabama", "Abruzzo", "Florida", "Alabama"], ["Île-de-France", "Île-de-France", "Florida", "Alabama"], ["Île-de-France", "Abruzzo", "Alabama", "Île-de-France"]]
        let object3: any = [["Abruzzo", "Florida", "Florida", "Alabama"], ["Alabama", "Île-de-France", "Florida", "Alabama"], ["Alabama", "Abruzzo", "Florida", "Florida"], ["Île-de-France", "Île-de-France", "Île-de-France", "Île-de-France"]]
        let object4: any = [["Île-de-France", "Florida", "Île-de-France", "Abruzzo"], ["Île-de-France", "Alabama", "Abruzzo", "Florida"], ["Alabama", "Île-de-France", "Île-de-France", "Île-de-France"], ["Île-de-France", "Alabama", "Alabama", "Alabama"]]
        let param2: any = [object, object2, object3, object4]
        let result: any = inst4.storePreviousState("Alabama", param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object: any = [["Abruzzo", "Florida", "Abruzzo", "Florida"], ["Florida", "Florida", "Alabama", "Alabama"], ["Abruzzo", "Alabama", "Alabama", "Abruzzo"], ["Île-de-France", "Florida", "Alabama", "Florida"]]
        let object2: any = [["Florida", "Alabama", "Abruzzo", "Alabama"], ["Abruzzo", "Île-de-France", "Alabama", "Alabama"], ["Île-de-France", "Florida", "Florida", "Florida"], ["Alabama", "Île-de-France", "Florida", "Île-de-France"]]
        let object3: any = [["Abruzzo", "Florida", "Alabama", "Alabama"], ["Île-de-France", "Alabama", "Florida", "Alabama"], ["Abruzzo", "Florida", "Florida", "Île-de-France"], ["Abruzzo", "Île-de-France", "Abruzzo", "Florida"]]
        let object4: any = [["Île-de-France", "Florida", "Île-de-France", "Alabama"], ["Florida", "Alabama", "Abruzzo", "Alabama"], ["Florida", "Île-de-France", "Île-de-France", "Île-de-France"], ["Abruzzo", "Alabama", "Alabama", "Abruzzo"]]
        let param2: any = [object, object2, object3, object4]
        let result: any = inst4.storePreviousState("Florida", param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object: any = [["Florida", "Île-de-France", "Île-de-France", "Alabama"], ["Florida", "Florida", "Abruzzo", "Alabama"], ["Île-de-France", "Abruzzo", "Île-de-France", "Île-de-France"], ["Alabama", "Île-de-France", "Abruzzo", "Florida"]]
        let object2: any = [["Florida", "Île-de-France", "Alabama", "Florida"], ["Florida", "Île-de-France", "Île-de-France", "Florida"], ["Île-de-France", "Abruzzo", "Florida", "Abruzzo"], ["Florida", "Alabama", "Florida", "Île-de-France"]]
        let object3: any = [["Île-de-France", "Abruzzo", "Île-de-France", "Florida"], ["Alabama", "Florida", "Île-de-France", "Florida"], ["Alabama", "Alabama", "Abruzzo", "Abruzzo"], ["Alabama", "Alabama", "Abruzzo", "Florida"]]
        let object4: any = [["Florida", "Abruzzo", "Florida", "Abruzzo"], ["Alabama", "Île-de-France", "Florida", "Île-de-France"], ["Abruzzo", "Alabama", "Île-de-France", "Florida"], ["Île-de-France", "Alabama", "Île-de-France", "Alabama"]]
        let param2: any = [object, object2, object3, object4]
        let result: any = inst4.storePreviousState("Florida", param2)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.storePreviousState("", [])
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getDestinationState", () => {
    let inst3: any
    let inst2: any
    let inst: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst3 = new rxjs.Observable(undefined)
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst4 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: false, name: "George", get: () => inst2, set: () => null, del: () => null, clear: () => inst3 })
        inst5 = new state_storage_service.StateStorageService(inst4)
    })

    test("0", () => {
        let result: any = inst5.getDestinationState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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
        let result: any = inst4.storeUrl("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.storeUrl("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.storeUrl("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.storeUrl("https://")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.storeUrl("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.storeUrl("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getUrl", () => {
    let inst2: any
    let inst: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst2 = new rxjs.Observable(undefined)
        inst = new rxjs.Subject()
        inst3 = new ngx_webstorage.SessionStorageService({ keyChanges: inst, isAvailable: true, name: "Anas", get: () => inst2, set: () => null, del: () => null, clear: () => null })
        inst4 = new state_storage_service.StateStorageService(inst3)
    })

    test("0", () => {
        let result: any = inst4.getUrl()
        expect(result).toMatchSnapshot()
    })
})
