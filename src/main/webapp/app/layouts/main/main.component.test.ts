import * as main_component from "app/layouts/main/main.component"
import * as language_helper from "app/core/language/language.helper"

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new language_helper.JhiLanguageHelper(undefined, undefined, undefined, undefined)
        inst2 = new main_component.JhiMainComponent(inst, undefined)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
