const webpack_common = require("./webpack.common")
// @ponicode
describe("webpack_common", () => {
    test("0", () => {
        let result = webpack_common({ env: "path/to/folder/" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = webpack_common({ env: "C:\\\\path\\to\\file.ext" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = webpack_common({ env: "C:\\\\path\\to\\folder\\" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = webpack_common({ env: "/path/to/file" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = webpack_common({ env: "." })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = webpack_common(undefined)
        expect(result).toMatchSnapshot()
    })
})
