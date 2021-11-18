import * as static_mapping_update_component from "app/entities/static-mapping/static-mapping-update.component"
import * as static_mapping_service from "app/entities/static-mapping/static-mapping.service"

describe("save", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(12)
        inst2 = new static_mapping_update_component.StaticMappingUpdateComponent(inst, "https://api.telegram.org/bot")
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
        inst = new static_mapping_service.StaticMappingService(12345)
        inst2 = new static_mapping_update_component.StaticMappingUpdateComponent(inst, "ponicode.com")
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
        inst = new static_mapping_service.StaticMappingService(987650)
        inst2 = new static_mapping_update_component.StaticMappingUpdateComponent(inst, "https://api.telegram.org/bot")
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
        inst = new static_mapping_service.StaticMappingService(56784)
        inst2 = new static_mapping_update_component.StaticMappingUpdateComponent(inst, "https://twitter.com/path?abc")
    })

    test("0", () => {
        let result: any = inst2.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

describe("subscribeToSaveResponse", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(56784)
        inst2 = new static_mapping_update_component.StaticMappingUpdateComponent(inst, "http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst2.subscribeToSaveResponse("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.subscribeToSaveResponse("https://")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.subscribeToSaveResponse("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.subscribeToSaveResponse("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.subscribeToSaveResponse("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.subscribeToSaveResponse("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSaveError", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new static_mapping_service.StaticMappingService(56784)
        inst2 = new static_mapping_update_component.StaticMappingUpdateComponent(inst, "Www.GooGle.com")
    })

    test("0", () => {
        let result: any = inst2.onSaveError()
        expect(result).toMatchSnapshot()
    })
})
