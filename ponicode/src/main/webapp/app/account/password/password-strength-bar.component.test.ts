import * as password_strength_bar_component from "app/account/password/password-strength-bar.component"
import * as core from "@angular/core"

describe("measureStrength", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new core.Renderer()
        inst2 = new core.ElementRef("a1969970175")
        inst3 = new password_strength_bar_component.PasswordStrengthBarComponent(inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.measureStrength("rgb(0,100,200)")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.measureStrength("hsl(10%,20%,40%)")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.measureStrength("rgb(0.1,0.2,0.3)")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.measureStrength("rgb(20%,10%,30%)")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.measureStrength("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getColor", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new core.Renderer()
        inst2 = new core.ElementRef("a1969970175")
        inst3 = new password_strength_bar_component.PasswordStrengthBarComponent(inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.getColor(41.0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getColor(10.0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getColor(30)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getColor(40)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getColor(20)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getColor(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("measureStrength", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new core.Renderer()
        inst2 = new core.ElementRef(12)
        inst3 = new password_strength_bar_component.PasswordStrengthBarComponent(inst, inst2)
    })

    test("0", () => {
        let result: any = inst3.measureStrength("green")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.measureStrength("black")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.measureStrength("#F00")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.measureStrength("rgb(0,100,200)")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.measureStrength("rgb(0.1,0.2,0.3)")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.measureStrength("")
        expect(result).toMatchSnapshot()
    })
})
