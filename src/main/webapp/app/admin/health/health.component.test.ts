import * as health_component from "app/admin/health/health.component"
import * as health_service from "app/admin/health/health.service"

describe("baseName", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(undefined)
        inst2 = new health_component.JhiHealthCheckComponent(undefined, inst)
    })

    test("0", () => {
        let result: any = inst2.baseName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.baseName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.baseName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.baseName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.baseName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.baseName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("refresh", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(undefined)
        inst2 = new health_component.JhiHealthCheckComponent(undefined, inst)
    })

    test("0", () => {
        let result: any = inst2.refresh()
        expect(result).toMatchSnapshot()
    })
})
ot()
    })

    test("1", () => {
        let result: any = inst2.getBadgeClass(404)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.getBadgeClass(false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.getBadgeClass("UP")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.getBadgeClass(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.getBadgeClass(NaN)
        expect(result).toMatchSnapshot()
    })
})
