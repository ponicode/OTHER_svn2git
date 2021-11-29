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

// @ponicode
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

// @ponicode
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
        let result: any = inst3.getBaseName("..")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getBaseName("Jean-Philippe.George")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getBaseName(".")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getBaseName("George.")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getBaseName(".Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getBaseName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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
        let result: any = inst3.getSubSystemName("George.")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getSubSystemName(".Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getSubSystemName("Jean-Philippe..George")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getSubSystemName("Jean-Philippe.George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getSubSystemName("..")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getSubSystemName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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
        let object: any = [["https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/", "http://www.croplands.org/account/confirm?t=", "www.google.com"], ["http://base.com", "https://croplands.org/app/a/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s", "www.google.com"], ["www.google.com", "ponicode.com", "ponicode.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["http://www.example.com/route/123?foo=bar", "ponicode.com", "https://api.telegram.org/", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let object2: any = [["http://www.croplands.org/account/confirm?t=", "ponicode.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["https://api.telegram.org/", "https://api.telegram.org/bot", "ponicode.com", "https://croplands.org/app/a/reset?token="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://accounts.google.com/o/oauth2/revoke?token=%s", "ponicode.com", "https://"], ["www.google.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let object3: any = [["https://", "http://base.com", "https://croplands.org/app/a/reset?token=", "www.google.com"], ["www.google.com", "www.google.com", "http://www.croplands.org/account/confirm?t=", "Www.GooGle.com"], ["https://twitter.com/path?abc", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://api.telegram.org/bot", "http://www.croplands.org/account/confirm?t="], ["http://base.com", "www.google.com", "http://www.example.com/route/123?foo=bar", "http://base.com"]]
        let object4: any = [["https://croplands.org/app/a/reset?token=", "www.google.com", "Www.GooGle.com", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://croplands.org/app/a/reset?token=", "https://", "https://croplands.org/app/a/reset?token=", "https://croplands.org/app/a/confirm?t="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/bot", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://base.com"], ["http://www.example.com/route/123?foo=bar", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://twitter.com/path?abc", "https://"]]
        let param1: any = [object, object2, object3, object4]
        let result: any = inst3.addHealthObject(param1, false, ["\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"[3,\"false\",false]\""], "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object: any = [["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t="], ["http://www.croplands.org/account/confirm?t=", "http://www.croplands.org/account/confirm?t=", "https://croplands.org/app/a/confirm?t=", "ponicode.com"], ["http://www.example.com/route/123?foo=bar", "Www.GooGle.com", "https://twitter.com/path?abc", "http://www.example.com/route/123?foo=bar"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "www.google.com", "ponicode.com", "http://www.example.com/route/123?foo=bar"]]
        let object2: any = [["http://www.example.com/route/123?foo=bar", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/confirm?t=", "http://base.com"], ["https://api.telegram.org/", "https://twitter.com/path?abc", "www.google.com", "https://twitter.com/path?abc"], ["www.google.com", "www.google.com", "https://croplands.org/app/a/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["https://api.telegram.org/", "https://twitter.com/path?abc", "ponicode.com", "www.google.com"]]
        let object3: any = [["https://api.telegram.org/bot", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://", "https://croplands.org/app/a/reset?token="], ["https://croplands.org/app/a/confirm?t=", "Www.GooGle.com", "Www.GooGle.com", "https://croplands.org/app/a/reset?token="], ["www.google.com", "https://api.telegram.org/bot", "https://croplands.org/app/a/reset?token=", "https://"], ["www.google.com", "http://www.example.com/route/123?foo=bar", "https://api.telegram.org/bot", "https://api.telegram.org/"]]
        let object4: any = [["www.google.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://twitter.com/path?abc", "https://api.telegram.org/"], ["http://www.example.com/route/123?foo=bar", "http://www.example.com/route/123?foo=bar", "ponicode.com", "https://api.telegram.org/"], ["ponicode.com", "https://croplands.org/app/a/confirm?t=", "http://www.example.com/route/123?foo=bar", "https://croplands.org/app/a/reset?token="], ["Www.GooGle.com", "http://www.croplands.org/account/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "www.google.com"]]
        let param1: any = [object, object2, object3, object4]
        let result: any = inst3.addHealthObject(param1, false, ["\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\"", "\"[3,\"false\",false]\"", "\"{\"x\":5,\"y\":6}\""], "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object: any = [["http://www.croplands.org/account/confirm?t=", "https://croplands.org/app/a/reset?token=", "ponicode.com", "http://www.example.com/route/123?foo=bar"], ["https://croplands.org/app/a/confirm?t=", "Www.GooGle.com", "https://api.telegram.org/", "www.google.com"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/reset?token=", "https://api.telegram.org/", "https://api.telegram.org/bot"], ["www.google.com", "https://croplands.org/app/a/reset?token=", "ponicode.com", "Www.GooGle.com"]]
        let object2: any = [["Www.GooGle.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc"], ["https://twitter.com/path?abc", "https://api.telegram.org/", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token="], ["www.google.com", "http://base.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["http://base.com", "https://api.telegram.org/", "ponicode.com", "https://api.telegram.org/bot"]]
        let object3: any = [["https://croplands.org/app/a/confirm?t=", "http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/bot", "www.google.com"], ["http://base.com", "https://api.telegram.org/bot", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://twitter.com/path?abc"], ["https://twitter.com/path?abc", "https://twitter.com/path?abc", "ponicode.com", "http://www.example.com/route/123?foo=bar"], ["https://api.telegram.org/bot", "https://api.telegram.org/bot", "http://www.example.com/route/123?foo=bar", "http://www.example.com/route/123?foo=bar"]]
        let object4: any = [["https://api.telegram.org/bot", "https://croplands.org/app/a/confirm?t=", "https://croplands.org/app/a/reset?token=", "http://base.com"], ["https://croplands.org/app/a/reset?token=", "https://api.telegram.org/", "https://twitter.com/path?abc", "www.google.com"], ["https://twitter.com/path?abc", "https://croplands.org/app/a/confirm?t=", "https://croplands.org/app/a/confirm?t=", "http://www.croplands.org/account/confirm?t="], ["http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/", "http://base.com", "https://api.telegram.org/bot"]]
        let param1: any = [object, object2, object3, object4]
        let result: any = inst3.addHealthObject(param1, true, ["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\""], "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object: any = [["http://base.com", "http://base.com", "Www.GooGle.com", "http://base.com"], ["www.google.com", "https://api.telegram.org/bot", "https://api.telegram.org/bot", "http://www.example.com/route/123?foo=bar"], ["ponicode.com", "https://croplands.org/app/a/confirm?t=", "http://www.example.com/route/123?foo=bar", "http://www.example.com/route/123?foo=bar"], ["ponicode.com", "http://base.com", "http://www.croplands.org/account/confirm?t=", "http://base.com"]]
        let object2: any = [["https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/bot", "https://api.telegram.org/", "https://api.telegram.org/"], ["https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/", "https://croplands.org/app/a/confirm?t=", "www.google.com"], ["https://twitter.com/path?abc", "Www.GooGle.com", "www.google.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://api.telegram.org/bot", "http://base.com", "http://www.example.com/route/123?foo=bar"]]
        let object3: any = [["https://croplands.org/app/a/confirm?t=", "http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/bot", "http://www.croplands.org/account/confirm?t="], ["https://croplands.org/app/a/reset?token=", "http://base.com", "www.google.com", "http://base.com"], ["http://base.com", "Www.GooGle.com", "https://api.telegram.org/bot", "https://croplands.org/app/a/confirm?t="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/reset?token=", "Www.GooGle.com", "https://croplands.org/app/a/confirm?t="]]
        let object4: any = [["https://api.telegram.org/bot", "https://twitter.com/path?abc", "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/"], ["http://www.example.com/route/123?foo=bar", "www.google.com", "https://", "http://www.example.com/route/123?foo=bar"], ["http://www.croplands.org/account/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://", "www.google.com"], ["https://twitter.com/path?abc", "https://croplands.org/app/a/reset?token=", "http://www.croplands.org/account/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let param1: any = [object, object2, object3, object4]
        let result: any = inst3.addHealthObject(param1, true, ["\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":[10,null,null,null]}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object: any = [["www.google.com", "Www.GooGle.com", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "Www.GooGle.com", "http://base.com", "ponicode.com"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "ponicode.com", "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/"], ["ponicode.com", "https://", "http://www.croplands.org/account/confirm?t=", "http://www.example.com/route/123?foo=bar"]]
        let object2: any = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.example.com/route/123?foo=bar", "http://base.com", "https://croplands.org/app/a/confirm?t="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/bot", "http://base.com", "Www.GooGle.com"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://api.telegram.org/"], ["ponicode.com", "http://www.croplands.org/account/confirm?t=", "https://croplands.org/app/a/confirm?t=", "https://croplands.org/app/a/reset?token="]]
        let object3: any = [["https://api.telegram.org/bot", "https://", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token="], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://accounts.google.com/o/oauth2/revoke?token=%s", "Www.GooGle.com", "https://twitter.com/path?abc"], ["https://croplands.org/app/a/reset?token=", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://twitter.com/path?abc"], ["ponicode.com", "http://base.com", "http://www.croplands.org/account/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s"]]
        let object4: any = [["https://api.telegram.org/", "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/bot", "https://api.telegram.org/"], ["https://api.telegram.org/bot", "https://api.telegram.org/", "http://www.croplands.org/account/confirm?t=", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["www.google.com", "http://www.example.com/route/123?foo=bar", "www.google.com", "https://twitter.com/path?abc"], ["ponicode.com", "http://base.com", "https://", "https://"]]
        let param1: any = [object, object2, object3, object4]
        let result: any = inst3.addHealthObject(param1, true, ["\"\"2006-01-02T14:04:05.000Z\"\"", "\"{\"x\":5,\"y\":6}\"", "\"{\"x\":5,\"y\":6}\"", "\"\"2006-01-02T14:04:05.000Z\"\""], "Edmond")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.addHealthObject([], false, [], "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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
        let result: any = inst3.flattenHealthData("http://www.example.com/route/123?foo=bar", "path/to/file.ext", ["data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.flattenHealthData("http://base.com", "path/to/file.ext", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.flattenHealthData("https://croplands.org/app/a/reset?token=", "/path/to/file", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.flattenHealthData("https://croplands.org/app/a/confirm?t=", "/path/to/file", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.flattenHealthData("Www.GooGle.com", "/path/to/file", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.flattenHealthData("", "", [])
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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
        let result: any = inst3.getModuleName("C:\\\\path\\to\\file.ext", "Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getModuleName("/path/to/file", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getModuleName("C:\\\\path\\to\\folder\\", "Edmond")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getModuleName(".", "George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getModuleName("path/to/file.ext", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getModuleName("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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
        let result: any = inst3.isHealthObject({ hasOwnProperty: () => true })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.isHealthObject({ hasOwnProperty: () => false })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.isHealthObject(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
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
        let result: any = inst3.transformHealthData({ details: "12345" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.transformHealthData({ details: "bc23a9d531064583ace8f67dad60f6bb" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.transformHealthData({ details: "c466a48309794261b64a4f02cfcc3d64" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.transformHealthData({ details: "9876" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.transformHealthData({ details: "" })
        expect(result).toMatchSnapshot()
    })
})
