import * as health_service from "app/admin/health/health.service"

// @ponicode
describe("checkHealth", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.checkHealth()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getBaseName", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.getBaseName("..")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getBaseName(".Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getBaseName("George.")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getBaseName("Jean-Philippe.George")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getBaseName("Jean-Philippe..George")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getBaseName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("transformHealthData", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.transformHealthData("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.transformHealthData("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getSubSystemName", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("DELETE")
    })

    test("0", () => {
        let result: any = inst.getSubSystemName("..")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getSubSystemName("George.")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getSubSystemName(".")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getSubSystemName("Michael")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getSubSystemName("Edmond")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getSubSystemName("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("flattenHealthData", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.flattenHealthData("http://base.com", "/path/to/file", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.flattenHealthData("https://api.telegram.org/", "C:\\\\path\\to\\folder\\", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.flattenHealthData("https://api.telegram.org/bot", "path/to/file.ext", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.flattenHealthData("https://croplands.org/app/a/reset?token=", "path/to/folder/", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.flattenHealthData("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "path/to/folder/", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.flattenHealthData("", "", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getModuleName", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.getModuleName("./path/to/file", "Michael")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.getModuleName("C:\\\\path\\to\\file.ext", "Edmond")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.getModuleName("./path/to/file", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.getModuleName(".", "Edmond")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.getModuleName("C:\\\\path\\to\\file.ext", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.getModuleName("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("addHealthObject", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.addHealthObject("https://api.telegram.org/bot", false, "\"{\"x\":[10,null,null,null]}\"", "George")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.addHealthObject("ponicode.com", false, "\"{\"x\":[10,null,null,null]}\"", "George")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.addHealthObject("https://api.telegram.org/", true, "\"\"2006-01-02T14:04:05.000Z\"\"", "Michael")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.addHealthObject("http://www.example.com/route/123?foo=bar", true, "\"{\"x\":[10,null,null,null]}\"", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.addHealthObject("www.google.com", true, "\"[3,\"false\",false]\"", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.addHealthObject("", false, "", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("hasSubSystem", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.hasSubSystem("\"\"2006-01-02T14:04:05.000Z\"\"")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.hasSubSystem("\"{\"x\":5,\"y\":6}\"")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.hasSubSystem("\"[3,\"false\",false]\"")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.hasSubSystem("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("isHealthObject", () => {
    let inst: any

    beforeEach(() => {
        inst = new health_service.JhiHealthService("POST")
    })

    test("0", () => {
        let result: any = inst.isHealthObject("\"{\"x\":5,\"y\":6}\"")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.isHealthObject("\"[3,\"false\",false]\"")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.isHealthObject("\"\"2006-01-02T14:04:05.000Z\"\"")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.isHealthObject("\"{\"x\":[10,null,null,null]}\"")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.isHealthObject("")
        expect(result).toMatchSnapshot()
    })
})
