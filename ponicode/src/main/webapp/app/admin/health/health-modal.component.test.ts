import * as health_modal_component from "app/admin/health/health-modal.component"
import * as health_service from "app/admin/health/health.service"

describe("readableValue", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(12345)
        inst2 = new health_modal_component.JhiHealthModalComponent(inst, false)
    })

    test("0", () => {
        let result: any = inst2.readableValue(1073741824)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.readableValue(1073741825)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.readableValue(537395200)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.readableValue(1048576)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.readableValue(537395200.0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.readableValue(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("subSystemName", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(12345)
        inst2 = new health_modal_component.JhiHealthModalComponent(inst, true)
    })

    test("0", () => {
        let result: any = inst2.subSystemName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.subSystemName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.subSystemName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.subSystemName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.subSystemName("George")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.subSystemName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("baseName", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new health_modal_component.JhiHealthModalComponent(inst, false)
    })

    test("0", () => {
        let result: any = inst2.baseName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.baseName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.baseName("George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.baseName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.baseName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.baseName("")
        expect(result).toMatchSnapshot()
    })
})
