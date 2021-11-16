const utils = require("./utils")
// @ponicode
describe("utils.parseVersion", () => {
    test("0", () => {
        let result = utils.parseVersion()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("utils.root", () => {
    test("0", () => {
        let param1 = [[-5.48, -5.48, 1], [-5.48, 1, -5.48], [0, 0, -100]]
        let result = utils.root(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1 = [[1, -100, 0], [-5.48, 1, 0], [1, -5.48, -100]]
        let result = utils.root(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1 = [[-5.48, 100, -5.48], [-100, -100, 100], [-5.48, 1, -100]]
        let result = utils.root(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1 = [[-5.48, 0, 1], [1, -5.48, 0], [1, -100, 1]]
        let result = utils.root(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1 = [[-100, -100, -100], [-100, 1, 0], [0, 0, 0]]
        let result = utils.root(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = utils.root(undefined)
        expect(result).toMatchSnapshot()
    })
})
