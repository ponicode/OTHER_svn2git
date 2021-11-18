import * as find_language_from_key_pipe from "app/shared/language/find-language-from-key.pipe"
// @ponicode
describe("transform", () => {
    let inst: any

    beforeEach(() => {
        inst = new find_language_from_key_pipe.FindLanguageFromKeyPipe()
    })

    test("0", () => {
        let result: any = inst.transform("cn")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.transform("ru")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.transform("ar")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.transform("fr")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.transform("en")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.transform("")
        expect(result).toMatchSnapshot()
    })
})
