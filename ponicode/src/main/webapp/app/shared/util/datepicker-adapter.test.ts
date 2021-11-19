import * as datepicker_adapter from "app/shared/util/datepicker-adapter"
// @ponicode
describe("fromModel", () => {
    let inst: any

    beforeEach(() => {
        inst = new datepicker_adapter.NgbDateMomentAdapter()
    })

    test("0", () => {
        let result: any = inst.fromModel(null)
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
        let result: any = inst.toModel({ year: "-", month: 15, day: 0 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.toModel({ year: "-", month: 3, day: 1 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.toModel({ year: "-", month: 4, day: 4 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.toModel({ year: "-", month: 3, day: 0 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.toModel({ year: "-", month: 28, day: 29 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.toModel({ year: Infinity, month: Infinity, day: Infinity })
        expect(result).toMatchSnapshot()
    })
})
