import * as logs_component from "app/admin/logs/logs.component"
import * as logs_service from "app/admin/logs/logs.service"

describe("changeLevel", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new logs_service.LogsService(12345)
        inst2 = new logs_component.LogsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.changeLevel("George", "da7588892")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.changeLevel("Pierre Edouard", "da7588892")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.changeLevel("Jean-Philippe", "12345")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.changeLevel("Pierre Edouard", "9876")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.changeLevel("Anas", "da7588892")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.changeLevel("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new logs_service.LogsService(56784)
        inst2 = new logs_component.LogsComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
