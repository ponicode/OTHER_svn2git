import * as health_service from "app/admin/health/health.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("checkHealth", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.checkHealth()
        expect(result).toMatchSnapshot()
    })
})

describe("transformHealthData", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.transformHealthData("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.transformHealthData("")
        expect(result).toMatchSnapshot()
    })
})

describe("getBaseName", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getBaseName("Jean-Philippe..George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getBaseName("..")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getBaseName("George.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getBaseName(".Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getBaseName(".")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getBaseName("")
        expect(result).toMatchSnapshot()
    })
})

describe("getSubSystemName", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getSubSystemName("Jean-Philippe.George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getSubSystemName(".Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getSubSystemName("George.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getSubSystemName("..")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getSubSystemName(".")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getSubSystemName("")
        expect(result).toMatchSnapshot()
    })
})

describe("addHealthObject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.addHealthObject("https://accounts.google.com/o/oauth2/revoke?token=%s", false, "\"\"2006-01-02T14:04:05.000Z\"\"", "Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.addHealthObject("ponicode.com", true, "\"[3,\"false\",false]\"", "Michael")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.addHealthObject("http://www.croplands.org/account/confirm?t=", true, "\"{\"x\":5,\"y\":6}\"", "George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.addHealthObject("ponicode.com", true, "\"{\"x\":[10,null,null,null]}\"", "George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.addHealthObject("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", true, "\"[3,\"false\",false]\"", "Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.addHealthObject("", true, "", "")
        expect(result).toMatchSnapshot()
    })
})

describe("flattenHealthData", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.flattenHealthData("https://", "path/to/folder/", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.flattenHealthData("https://api.telegram.org/", ".", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.flattenHealthData("https://croplands.org/app/a/reset?token=", "C:\\\\path\\to\\file.ext", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.flattenHealthData("https://croplands.org/app/a/reset?token=", "C:\\\\path\\to\\folder\\", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.flattenHealthData("http://www.croplands.org/account/confirm?t=", "./path/to/file", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.flattenHealthData("", "", "")
        expect(result).toMatchSnapshot()
    })
})

describe("getModuleName", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getModuleName("./path/to/file", "Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getModuleName("path/to/file.ext", "Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getModuleName("C:\\\\path\\to\\folder\\", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getModuleName("path/to/folder/", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getModuleName("path/to/file.ext", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getModuleName("", "")
        expect(result).toMatchSnapshot()
    })
})

describe("isHealthObject", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.isHealthObject("\"{\"x\":[10,null,null,null]}\"")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.isHealthObject("\"{\"x\":5,\"y\":6}\"")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.isHealthObject("\"\"2006-01-02T14:04:05.000Z\"\"")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.isHealthObject("\"[3,\"false\",false]\"")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.isHealthObject("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("hasSubSystem", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new health_service.JhiHealthService(inst2)
    })

    test("0", () => {
        let result: any = inst3.hasSubSystem("\"[3,\"false\",false]\"")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.hasSubSystem("\"{\"x\":5,\"y\":6}\"")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.hasSubSystem("\"{\"x\":[10,null,null,null]}\"")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.hasSubSystem("\"\"2006-01-02T14:04:05.000Z\"\"")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.hasSubSystem("")
        expect(result).toMatchSnapshot()
    })
})
