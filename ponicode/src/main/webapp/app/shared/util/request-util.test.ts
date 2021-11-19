import * as request_util from "app/shared/util/request-util"
// @ponicode
describe("request_util.createRequestOption", () => {
    test("0", () => {
        let result: any = request_util.createRequestOption(200)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = request_util.createRequestOption(404)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = request_util.createRequestOption(429)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = request_util.createRequestOption(400)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = request_util.createRequestOption(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
