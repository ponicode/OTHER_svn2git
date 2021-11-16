import * as password_strength_bar_component from "app/account/password/password-strength-bar.component"

// @ponicode
describe("getColor", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_strength_bar_component.PasswordStrengthBarComponent(undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.getColor(15.0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getColor(25.0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getColor(9)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getColor(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getColor(40)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getColor(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("measureStrength", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_strength_bar_component.PasswordStrengthBarComponent(undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.measureStrength("00")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.measureStrength("green")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.measureStrength("te st")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.measureStrength("#F00")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.measureStrength("PONICODE")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.measureStrength("")
        expect(result).toMatchSnapshot()
    })
})
