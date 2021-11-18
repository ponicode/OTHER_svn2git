import * as health_component from "app/admin/health/health.component"
import * as health_service from "app/admin/health/health.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new health_component.JhiHealthCheckComponent(false, inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("getBadgeClass", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new health_component.JhiHealthCheckComponent(true, inst)
    })

    test("0", () => {
        let result: any = inst2.getBadgeClass("UP")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.getBadgeClass("Sales")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.getBadgeClass("Chief Product Officer")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.getBadgeClass("Software Engineer")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.getBadgeClass("")
        expect(result).toMatchSnapshot()
    })
})

describe("baseName", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(12345)
        inst2 = new health_component.JhiHealthCheckComponent(true, inst)
    })

    test("0", () => {
        let result: any = inst2.baseName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.baseName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.baseName("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.baseName("George")
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

describe("showHealth", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(987650)
        inst2 = new health_component.JhiHealthCheckComponent(true, inst)
    })

    test("0", () => {
        let result: any = inst2.showHealth("v1.2.4")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.showHealth("4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.showHealth("^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.showHealth("v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.showHealth("")
        expect(result).toMatchSnapshot()
    })
})

describe("refresh", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new health_component.JhiHealthCheckComponent(false, inst)
    })

    test("0", () => {
        let result: any = inst2.refresh()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("subSystemName", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService(987650)
        inst2 = new health_component.JhiHealthCheckComponent(true, inst)
    })

    test("0", () => {
        let result: any = inst2.subSystemName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.subSystemName("Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.subSystemName("Anas")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.subSystemName("Edmond")
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
