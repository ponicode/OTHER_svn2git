import * as error_component from "app/layouts/error/error.component"
import * as router from "@angular/router"

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new error_component.ErrorComponent(inst)
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
