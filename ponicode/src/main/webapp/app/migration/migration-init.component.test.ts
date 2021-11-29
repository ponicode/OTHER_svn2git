import * as migration_init_component from "app/migration/migration-init.component"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as location from "@angular/common/src/location/location"
import * as location_strategy from "@angular/common/src/location/location_strategy"
import * as core from "@angular/core"
import * as ng_module_factory_loader from "@angular/core/src/linker/ng_module_factory_loader"
import * as compiler from "@angular/core/src/linker/compiler"

// @ponicode
describe("start", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let object: any
    let inst5: any
    let inst6: any
    let object2: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new url_tree.UrlSerializer()
        inst2 = new router_outlet_context.ChildrenOutletContexts()
        inst3 = new location_strategy.LocationStrategy()
        inst4 = new location.Location(inst3)
        object = [{ provide: false, multi: undefined, useValue: true }, { provide: true, multi: undefined, useValue: false }, { provide: true, multi: undefined, useValue: false }, { provide: true, multi: undefined, useValue: true }, { provide: false, multi: undefined, useValue: false }]
        inst5 = new ng_module_factory_loader.NgModuleFactoryLoader()
        inst6 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "http://base.com", outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "pathParamsChange" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "http://base.com", outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "pathParamsChange" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "https://croplands.org/app/a/reset?token=", outlet: "Handmade Fresh Chicken", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "pathParamsChange" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: undefined, redirectTo: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "pathParamsChange" }]
        inst7 = new router.Router(null, inst, inst2, inst4, core.Injector.create({ providers: object, parent: undefined, name: "Anas" }), inst5, inst6, object2)
        inst8 = new migration_init_component.MigrationInitComponent(inst7)
    })

    test("0", () => {
        let result: any = inst8.start()
        expect(result).toMatchSnapshot()
    })
})
