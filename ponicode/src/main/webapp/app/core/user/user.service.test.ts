import * as user_service from "app/core/user/user.service"
import * as http from "@angular/common/http"

describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: "https://", firstName: undefined, lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "9876", lastModifiedDate: undefined, password: "NoWiFi4you" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: undefined, firstName: "Edmond", lastName: "Al Saud", email: "ponicode.com", activated: true, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "bc23a9d531064583ace8f67dad60f6bb", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: undefined, lastName: "Baziz", email: "something@example.com", activated: false, langKey: "en", authorities: undefined, createdBy: "9876", createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "YouarenotAllowed2Use" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: undefined, firstName: undefined, lastName: "Al Saud", email: "user1+user2@mycompany.com", activated: false, langKey: "fr", authorities: undefined, createdBy: "12345", createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "NoWiFi4you" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: "Www.GooGle.com", firstName: undefined, lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "c466a48309794261b64a4f02cfcc3d64", lastModifiedDate: undefined, password: "$p3onyycat" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: "", login: undefined, firstName: "", lastName: "", email: "", activated: true, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "", lastModifiedDate: undefined, password: undefined })
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
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find("https://")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.find("")
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
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: "https://croplands.org/app/a/confirm?t=", firstName: "Pierre Edouard", lastName: undefined, email: undefined, activated: false, langKey: "ar", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "12345", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: undefined, lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: "12345", createdDate: undefined, lastModifiedBy: "bc23a9d531064583ace8f67dad60f6bb", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "http://www.croplands.org/account/confirm?t=", firstName: undefined, lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: "12345", createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: "https://croplands.org/app/a/confirm?t=", firstName: undefined, lastName: undefined, email: undefined, activated: false, langKey: "ar", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "da7588892", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: undefined, firstName: undefined, lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: "12345", createdDate: undefined, lastModifiedBy: "c466a48309794261b64a4f02cfcc3d64", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: "", login: "", firstName: undefined, lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: "", createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
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
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(500)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query(Infinity)
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
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.delete("https://api.telegram.org/")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.delete("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("authorities", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.authorities()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: undefined, firstName: "Michael", lastName: "Zong", email: "TestUpperCase@Example.com", activated: undefined, langKey: undefined, authorities: undefined, createdBy: "c466a48309794261b64a4f02cfcc3d64", createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "NoWiFi4you" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "https://croplands.org/app/a/confirm?t=", firstName: undefined, lastName: undefined, email: "ponicode.com", activated: true, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "YouarenotAllowed2Use" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "https://croplands.org/app/a/confirm?t=", firstName: "George", lastName: "Baziz", email: "something.example.com", activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: "Edmond", lastName: undefined, email: "user1+user2@mycompany.com", activated: true, langKey: undefined, authorities: undefined, createdBy: "bc23a9d531064583ace8f67dad60f6bb", createdDate: undefined, lastModifiedBy: "c466a48309794261b64a4f02cfcc3d64", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: "http://base.com", firstName: "Jean-Philippe", lastName: "Murray-Kynynmound", email: "bed-free@tutanota.de", activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: "", login: "", firstName: undefined, lastName: undefined, email: "", activated: true, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("find", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find("https://")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find("https://api.telegram.org/")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find("http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.find("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: "https://croplands.org/app/a/confirm?t=", firstName: "Michael", lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "NoWiFi4you" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", firstName: "George", lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "NoWiFi4you" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: "https://api.telegram.org/bot", firstName: undefined, lastName: "Zong", email: "something@example.com", activated: false, langKey: "cn", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: "http://www.example.com/route/123?foo=bar", firstName: undefined, lastName: "Baziz", email: "user1+user2@mycompany.com", activated: false, langKey: "it", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "www.google.com", firstName: undefined, lastName: "Al Saud", email: "bed-free@tutanota.de", activated: false, langKey: "cn", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: "", login: undefined, firstName: undefined, lastName: "", email: undefined, activated: true, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "", lastModifiedDate: undefined, password: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(500)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.query(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new user_service.UserService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete("http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete("https://accounts.google.com/o/oauth2/revoke?token=%s")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete("https://")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.delete("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.delete("")
        expect(result).toMatchSnapshot()
    })
})
