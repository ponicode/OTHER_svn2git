import * as password_strength_bar_component from "app/account/password/password-strength-bar.component"

// @ponicode
describe("getColor", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_strength_bar_component.PasswordStrengthBarComponent(true, "Michael")
    })

    test("0", () => {
        let result: any = inst.getColor(15)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getColor(9)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getColor(25)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getColor(30)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getColor(20)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getColor(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("measureStrength", () => {
    let inst: any

    beforeEach(() => {
        inst = new password_strength_bar_component.PasswordStrengthBarComponent(false, "Edmond")
    })

    test("0", () => {
        let result: any = inst.measureStrength("rgb(20%,10%,30%)")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.measureStrength("rgb(0.1,0.2,0.3)")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.measureStrength("black")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.measureStrength("red")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.measureStrength("green")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.measureStrength("")
        expect(result).toMatchSnapshot()
    })
})
