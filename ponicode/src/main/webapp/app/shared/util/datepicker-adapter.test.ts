import * as datepicker_adapter from "app/shared/util/datepicker-adapter"
// @ponicode
describe("fromModel", () => {
    let inst: any

    beforeEach(() => {
        inst = new datepicker_adapter.NgbDateMomentAdapter()
    })

    test("0", () => {
        let result: any = inst.fromModel("01-01-2030")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.fromModel("32-01-2020")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.fromModel("01-13-2020")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.fromModel("01-01-2020")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.fromModel("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("toModel", () => {
    let inst: any

    beforeEach(() => {
        inst = new datepicker_adapter.NgbDateMomentAdapter()
    })

    test("0", () => {
        let result: any = inst.toModel("01-01-2020")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.toModel("01-01-2030")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.toModel("01-13-2020")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.toModel("32-01-2020")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.toModel("")
        expect(result).toMatchSnapshot()
    })
})
