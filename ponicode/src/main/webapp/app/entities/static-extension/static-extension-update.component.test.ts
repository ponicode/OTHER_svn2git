import * as static_extension_update_component from "app/entities/static-extension/static-extension-update.component"
import * as static_extension_service from "app/entities/static-extension/static-extension.service"

describe("save", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(987650)
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst2.save()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst2.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("previousState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(987650)
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, "https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst2.previousState()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService("a1969970175")
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, "ponicode.com")
    })

    test("0", () => {
        let result: any = inst2.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveError", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(56784)
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst2.onSaveError()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("subscribeToSaveResponse", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_extension_service.StaticExtensionService(12345)
        inst2 = new static_extension_update_component.StaticExtensionUpdateComponent(inst, "https://accounts.google.com/o/oauth2/revoke?token=%s")
    })

    test("0", () => {
        let result: any = inst2.subscribeToSaveResponse("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.subscribeToSaveResponse("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.subscribeToSaveResponse("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.subscribeToSaveResponse("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.subscribeToSaveResponse("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.subscribeToSaveResponse("")
        expect(result).toMatchSnapshot()
    })
})
