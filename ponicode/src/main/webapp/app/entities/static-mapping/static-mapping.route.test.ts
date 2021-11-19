import * as static_mapping_route from "app/entities/static-mapping/static-mapping.route"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"
import * as http from "@angular/common/http"

import * as router from "@angular/router"
import * as tree from "@angular/router/src/utils/tree"
// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_mapping_service.StaticMappingService(inst2)
        inst4 = new static_mapping_route.StaticMappingResolve(inst3)
    })

    test("0", () => {
        let param1: any = new router.ActivatedRouteSnapshot()
        let inst5: any = new tree.TreeNode(undefined, [])
        let param2: any = new router.RouterStateSnapshot(inst5)
        let result: any = inst4.resolve(param1, param2)
        expect(result).toMatchSnapshot()
    })
})
