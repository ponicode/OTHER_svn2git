import * as app_module from "app/app.module"
import * as configuration_service from "app/shared/service/configuration-service"
import * as http from "@angular/common/http"
// @ponicode
describe("app_module.configInit", () => {
    test("0", () => {
        let inst: any = new http.HttpHandler()
        let inst2: any = new http.HttpClient(inst)
        let param1: any = new configuration_service.ConfigurationService(inst2)
        let result: any = app_module.configInit(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = app_module.configInit(null)
        expect(result).toMatchSnapshot()
    })
})
