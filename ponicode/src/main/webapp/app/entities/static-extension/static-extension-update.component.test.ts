import * as static_extension_update_component from "app/entities/static-extension/static-extension-update.component"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.save()
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

describe("subscribeToSaveResponse", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
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
describe("onSaveError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.onSaveError()
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.ngOnInit()
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.previousState()
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.save()
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
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
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
describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new static_extension_service.StaticExtensionService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new static_extension_update_component.StaticExtensionUpdateComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})
