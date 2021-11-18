import * as logs_service from "app/admin/logs/logs.service"

import * as log_model from "app/admin/logs/log.model"
// @ponicode
describe("findAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new logs_service.LogsService("POST")
    })

    test("0", () => {
        let result: any = inst.findAll()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("changeLevel", () => {
    let inst: any

    beforeEach(() => {
        inst = new logs_service.LogsService("POST")
    })

    test("0", () => {
        let param1: any = new log_model.Log("Becky Bednar", "Becky Bednar")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new log_model.Log("Becky Bednar", "Gail Hoppe")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new log_model.Log("Janet Homenick", "Gail Hoppe")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new log_model.Log("Janet Homenick", "Maurice Purdy")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new log_model.Log("Ronald Keeling", "Gail Hoppe")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new log_model.Log("", "")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })
})
