import * as summary_card_component from "app/shared/summary/summary-card.component"
// @ponicode
describe("displayMaxSize", () => {
    let inst: any

    beforeEach(() => {
        inst = new summary_card_component.SummaryCardComponent()
    })

    test("0", () => {
        let result: any = inst.displayMaxSize()
        expect(result).toMatchSnapshot()
    })
})
