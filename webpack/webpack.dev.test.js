const webpack_dev = require("./webpack.dev")
// @ponicode
describe("webpack_dev", () => {
    test("0", () => {
        let result = webpack_dev(["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = webpack_dev(true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = webpack_dev(false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = webpack_dev(undefined)
        expect(result).toMatchSnapshot()
    })
})
