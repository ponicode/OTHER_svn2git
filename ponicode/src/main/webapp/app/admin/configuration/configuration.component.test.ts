import * as configuration_component from "app/admin/configuration/configuration.component"
import * as configuration_service from "app/admin/configuration/configuration.service"

describe("keys", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new configuration_service.JhiConfigurationService(56784)
        inst2 = new configuration_component.JhiConfigurationComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.keys("Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.keys("Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.keys("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.keys("Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.keys("George")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.keys("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new configuration_service.JhiConfigurationService(56784)
        inst2 = new configuration_component.JhiConfigurationComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
