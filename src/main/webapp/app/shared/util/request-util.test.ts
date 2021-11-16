import * as request_util from "app/shared/util/request-util"
// @ponicode
describe("request_util.createRequestOption", () => {
    test("0", () => {
        let result: any = request_util.createRequestOption(undefined)
        expect(result).toMatchSnapshot()
    })
})
