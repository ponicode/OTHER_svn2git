import * as audits_component from "app/admin/audits/audits.component"
import * as audits_service from "app/admin/audits/audits.service"

describe("previousMonth", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.previousMonth()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("sort", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.sort()
        expect(result).toMatchSnapshot()
    })
})

describe("transition", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.transition()
        expect(result).toMatchSnapshot()
    })
})

describe("loadPage", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.loadPage(256)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.loadPage(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.loadPage(32)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.loadPage(64)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.loadPage(16)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.loadPage(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("onSuccess", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.onSuccess(true, true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.onSuccess(32, 12)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.onSuccess(Infinity, true)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onError", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new audits_service.AuditsService(undefined)
        inst2 = new audits_component.AuditsComponent(inst, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst2.onError("error")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.onError("multiple errors occurred")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.onError(404)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.onError("too many arguments")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.onError({ message: "No os dependencies found. " })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.onError(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
