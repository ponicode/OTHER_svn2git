import * as prod_config from "app/blocks/config/prod.config"
// @ponicode
describe("prod_config.ProdConfig", () => {
    test("0", () => {
        let result: any = prod_config.ProdConfig()
        expect(result).toMatchSnapshot()
    })
})
