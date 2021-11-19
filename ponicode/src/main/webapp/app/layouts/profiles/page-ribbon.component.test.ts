import * as page_ribbon_component from "app/layouts/profiles/page-ribbon.component"
import * as profile_service from "app/layouts/profiles/profile.service"
import * as http from "@angular/common/http"

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new profile_service.ProfileService(inst2)
        inst4 = new page_ribbon_component.PageRibbonComponent(inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
