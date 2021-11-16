import * as logs_service from "app/admin/logs/logs.service"

import * as log_model from "app/admin/logs/log.model"
// @ponicode
describe("findAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new logs_service.LogsService(undefined)
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
        inst = new logs_service.LogsService(undefined)
    })

    test("0", () => {
        let param1: any = new log_model.Log("Bad Authentication data", "Wait time out reached, while waiting for results")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new log_model.Log("There is a mismatch", "Error selecting from database")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new log_model.Log("Ran out of iterations", "No os dependencies found. ")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new log_model.Log("Could not find a grader object for message from xqueue", "Sorry, This video cannot be accessed via this website")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new log_model.Log("Error getting key from: %s", "<error_message>%s</error_message>")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new log_model.Log("", "")
        let result: any = inst.changeLevel(param1)
        expect(result).toMatchSnapshot()
    })
})
