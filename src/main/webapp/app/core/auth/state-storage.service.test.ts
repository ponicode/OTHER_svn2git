import * as state_storage_service from "app/core/auth/state-storage.service"

// @ponicode
describe("resetPreviousState", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService(undefined)
    })

    test("0", () => {
        let result: any = inst.resetPreviousState()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getDestinationState", () => {
    let inst: any

    beforeEach(() => {
        inst = new state_storage_service.StateStorageService(undefined)
    })

    test("0", () => {
        let result: any = inst.getDestinationState()
        expect(result).toMatchSnapshot()
    })
})
("1", () => {
        let result: any = inst.storeUrl("https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.storeUrl("http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.storeUrl("https://croplands.org/app/a/confirm?t=")
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
