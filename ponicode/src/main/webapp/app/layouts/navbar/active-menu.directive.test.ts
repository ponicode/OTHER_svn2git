import * as active_menu_directive from "app/layouts/navbar/active-menu.directive"

// @ponicode
describe("updateActiveFlag", () => {
    let inst: any

    beforeEach(() => {
        inst = new active_menu_directive.ActiveMenuDirective("4.0.0-beta1\t", false, -0.5)
    })

    test("0", () => {
        let result: any = inst.updateActiveFlag("fr")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.updateActiveFlag("de")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.updateActiveFlag("ar")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.updateActiveFlag("cn")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.updateActiveFlag("it")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.updateActiveFlag("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new active_menu_directive.ActiveMenuDirective("v4.0.0-rc.4", false, -0.5)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
