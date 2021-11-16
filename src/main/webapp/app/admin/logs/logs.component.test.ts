import * as logs_component from "app/admin/logs/logs.component"
import * as logs_service from "app/admin/logs/logs.service"

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new logs_service.LogsService(undefined)
        inst2 = new logs_component.LogsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("changeLevel", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new logs_service.LogsService(undefined)
        inst2 = new logs_component.LogsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.changeLevel("George", "Edmond")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.changeLevel("Edmond", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.changeLevel("George", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.changeLevel("Pierre Edouard", "George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.changeLevel("Michael", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.changeLevel("", "")
        expect(result).toMatchSnapshot()
    })
})
