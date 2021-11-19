import * as migration_history_route from "app/entities/migration-history/migration-history.route"
import * as migration_history_service from "app/entities/migration-history/migration-history.service"
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
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
        inst4 = new migration_history_route.MigrationHistoryResolve(inst3)
    })

    test("0", () => {
        let param1: any = new router.ActivatedRouteSnapshot()
        let inst5: any = new tree.TreeNode(undefined, [])
        let param2: any = new router.RouterStateSnapshot(inst5)
        let result: any = inst4.resolve(param1, param2)
        expect(result).toMatchSnapshot()
    })
})
