import * as add_mapping_component from "app/migration/add-mapping.component"

import * as material from "@angular/material"
import * as core from "@angular/core"
import * as focus_monitor from "@angular/cdk/a11y/typings/focus-monitor/focus-monitor"
import * as ng_zone from "@angular/core/src/zone/ng_zone"
import * as platform from "@angular/cdk/platform/typings/platform"
import * as unique_selection_dispatcher from "@angular/cdk/collections/typings/unique-selection-dispatcher"
// @ponicode
describe("cancel", () => {
    let inst: any

    beforeEach(() => {
        inst = new add_mapping_component.JhiAddMappingModalComponent(undefined, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst.cancel()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("isNOK", () => {
    let inst: any

    beforeEach(() => {
        inst = new add_mapping_component.JhiAddMappingModalComponent(undefined, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst.isNOK()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("isSvnDirectoryDeleteSelected", () => {
    let inst: any

    beforeEach(() => {
        inst = new add_mapping_component.JhiAddMappingModalComponent(undefined, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let result: any = inst.isSvnDirectoryDeleteSelected()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("radioChange", () => {
    let inst: any

    beforeEach(() => {
        inst = new add_mapping_component.JhiAddMappingModalComponent(undefined, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("0", () => {
        let inst2: any = new core.ChangeDetectorRef()
        let inst3: any = new material.MatRadioGroup(inst2)
        let inst4: any = new core.ElementRef(12)
        let inst5: any = new ng_zone.NgZone({ enableLongStackTrace: true })
        let inst6: any = new platform.Platform(undefined)
        let inst7: any = new focus_monitor.FocusMonitor(inst5, inst6)
        let inst8: any = new unique_selection_dispatcher.UniqueSelectionDispatcher()
        let inst9: any = new material.MatRadioButton(inst3, inst4, null, inst7, inst8, "Becky Bednar")
        let param1: any = new material.MatRadioChange(inst9, 12)
        let result: any = inst.radioChange(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let inst2: any = new core.ChangeDetectorRef()
        let inst3: any = new material.MatRadioGroup(inst2)
        let inst4: any = new core.ElementRef("a1969970175")
        let inst5: any = new ng_zone.NgZone({ enableLongStackTrace: undefined })
        let inst6: any = new platform.Platform(undefined)
        let inst7: any = new focus_monitor.FocusMonitor(inst5, inst6)
        let inst8: any = new unique_selection_dispatcher.UniqueSelectionDispatcher()
        let inst9: any = new material.MatRadioButton(inst3, inst4, null, inst7, inst8, "Janet Homenick")
        let param1: any = new material.MatRadioChange(inst9, 12)
        let result: any = inst.radioChange(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let inst2: any = new core.ChangeDetectorRef()
        let inst3: any = new material.MatRadioGroup(inst2)
        let inst4: any = new core.ElementRef("a1969970175")
        let inst5: any = new ng_zone.NgZone({ enableLongStackTrace: undefined })
        let inst6: any = new platform.Platform(undefined)
        let inst7: any = new focus_monitor.FocusMonitor(inst5, inst6)
        let inst8: any = new unique_selection_dispatcher.UniqueSelectionDispatcher()
        let inst9: any = new material.MatRadioButton(inst3, inst4, null, inst7, inst8, "Maurice Purdy")
        let param1: any = new material.MatRadioChange(inst9, "bc23a9d531064583ace8f67dad60f6bb")
        let result: any = inst.radioChange(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let inst2: any = new core.ChangeDetectorRef()
        let inst3: any = new material.MatRadioGroup(inst2)
        let inst4: any = new core.ElementRef(56784)
        let inst5: any = new ng_zone.NgZone({ enableLongStackTrace: undefined })
        let inst6: any = new platform.Platform(undefined)
        let inst7: any = new focus_monitor.FocusMonitor(inst5, inst6)
        let inst8: any = new unique_selection_dispatcher.UniqueSelectionDispatcher()
        let inst9: any = new material.MatRadioButton(inst3, inst4, null, inst7, inst8, "Gail Hoppe")
        let param1: any = new material.MatRadioChange(inst9, "a1969970175")
        let result: any = inst.radioChange(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let inst2: any = new core.ChangeDetectorRef()
        let inst3: any = new material.MatRadioGroup(inst2)
        let inst4: any = new core.ElementRef(12)
        let inst5: any = new ng_zone.NgZone({ enableLongStackTrace: false })
        let inst6: any = new platform.Platform(undefined)
        let inst7: any = new focus_monitor.FocusMonitor(inst5, inst6)
        let inst8: any = new unique_selection_dispatcher.UniqueSelectionDispatcher()
        let inst9: any = new material.MatRadioButton(inst3, inst4, null, inst7, inst8, undefined)
        let param1: any = new material.MatRadioChange(inst9, "bc23a9d531064583ace8f67dad60f6bb")
        let result: any = inst.radioChange(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let inst2: any = new core.ChangeDetectorRef()
        let inst3: any = new material.MatRadioGroup(inst2)
        let inst4: any = new core.ElementRef(Infinity)
        let inst5: any = new ng_zone.NgZone({ enableLongStackTrace: undefined })
        let inst6: any = new platform.Platform(undefined)
        let inst7: any = new focus_monitor.FocusMonitor(inst5, inst6)
        let inst8: any = new unique_selection_dispatcher.UniqueSelectionDispatcher()
        let inst9: any = new material.MatRadioButton(inst3, inst4, null, inst7, inst8, "")
        let param1: any = new material.MatRadioChange(inst9, "")
        let result: any = inst.radioChange(param1)
        expect(result).toMatchSnapshot()
    })
})
