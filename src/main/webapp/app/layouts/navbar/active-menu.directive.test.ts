import * as active_menu_directive from "app/layouts/navbar/active-menu.directive"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new active_menu_directive.ActiveMenuDirective(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("updateActiveFlag", () => {
    let inst: any

    beforeEach(() => {
        inst = new active_menu_directive.ActiveMenuDirective(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.updateActiveFlag("javascript")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.updateActiveFlag("js")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.updateActiveFlag("lua")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.updateActiveFlag(true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.updateActiveFlag("python")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.updateActiveFlag(Infinity)
        expect(result).toMatchSnapshot()
    })
})
