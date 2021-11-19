import * as migration_history_service from "app/entities/migration-history/migration-history.service"
import * as http from "@angular/common/http"

describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: undefined, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: 1, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: -5.48, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: undefined, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: Infinity, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("find", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("update", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: -5.48, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: -100, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: 1, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: 0, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: -100, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: Infinity, step: undefined, status: undefined, date: undefined, data: "", migration: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(500)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.delete(Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("convertDateFromClient", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.convertDateFromClient({ id: undefined, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.convertDateFromClient({ id: 0, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.convertDateFromClient({ id: undefined, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.convertDateFromClient({ id: 100, step: undefined, status: undefined, date: undefined, data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.convertDateFromClient({ id: 1, step: undefined, status: undefined, date: undefined, data: undefined, migration: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.convertDateFromClient({ id: -Infinity, step: undefined, status: undefined, date: undefined, data: "", migration: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("convertDateFromServer", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.convertDateFromServer(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.convertDateFromServer(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("convertDateArrayFromServer", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_history_service.MigrationHistoryService(inst2)
    })

    test("0", () => {
        let result: any = inst3.convertDateArrayFromServer(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.convertDateArrayFromServer(null)
        expect(result).toMatchSnapshot()
    })
})
