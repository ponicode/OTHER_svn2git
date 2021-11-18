import * as app_module from "app/app.module"
import * as configuration_service from "app/shared/service/configuration-service"
// @ponicode
describe("app_module.configInit", () => {
    test("0", () => {
        let param1: any = new configuration_service.ConfigurationService(12)
        let result: any = app_module.configInit(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new configuration_service.ConfigurationService("bc23a9d531064583ace8f67dad60f6bb")
        let result: any = app_module.configInit(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new configuration_service.ConfigurationService("a1969970175")
        let result: any = app_module.configInit(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new configuration_service.ConfigurationService(56784)
        let result: any = app_module.configInit(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new configuration_service.ConfigurationService(12345)
        let result: any = app_module.configInit(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new configuration_service.ConfigurationService(NaN)
        let result: any = app_module.configInit(param1)
        expect(result).toMatchSnapshot()
    })
})
