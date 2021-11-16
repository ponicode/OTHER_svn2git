import * as page_ribbon_component from "app/layouts/profiles/page-ribbon.component"
import * as profile_service from "app/layouts/profiles/profile.service"

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new profile_service.ProfileService(undefined)
        inst2 = new page_ribbon_component.PageRibbonComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
