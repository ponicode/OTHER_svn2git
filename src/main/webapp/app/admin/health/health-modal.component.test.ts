import * as health_modal_component from "app/admin/health/health-modal.component"
import * as health_service from "app/admin/health/health.service"

describe("readableValue", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(undefined)
        inst2 = new health_modal_component.JhiHealthModalComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.readableValue({ This: "is", an: "object", Do: 0, you: 1, Like: 2, it: 10000 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.readableValue(256)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.readableValue(64)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.readableValue(10)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.readableValue(16)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.readableValue(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("subSystemName", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(undefined)
        inst2 = new health_modal_component.JhiHealthModalComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.subSystemName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.subSystemName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.subSystemName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.subSystemName(987650)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.subSystemName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.subSystemName(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
