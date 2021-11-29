import * as migration_update_component from "app/entities/migration/migration-update.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as http from "@angular/common/http"
import * as router from "@angular/router"

import * as rxjs from "rxjs"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("previousState", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.previousState()
        expect(result).toMatchSnapshot()
    })
})

describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.save()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.onSaveError()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("subscribeToSaveResponse", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let param1: any = new rxjs.Observable(undefined)
        let result: any = inst5.subscribeToSaveResponse(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.subscribeToSaveResponse(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.save()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.onSaveError()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("previousState", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new migration_update_component.MigrationUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.previousState()
        expect(result).toMatchSnapshot()
    })
})
