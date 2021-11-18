import * as user_service from "app/core/user/user.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService("POST")
    })

    test("0", () => {
        let result: any = inst.find("https://")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find("https://api.telegram.org/")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find("https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.find("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService("DELETE")
    })

    test("0", () => {
        let result: any = inst.update({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "https://api.telegram.org/bot", firstName: undefined, lastName: undefined, email: "user@host:300", activated: false, langKey: "de", authorities: undefined, createdBy: "12345", createdDate: undefined, lastModifiedBy: "9876", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: "Edmond", lastName: "Al Saud", email: undefined, activated: true, langKey: "de", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "da7588892", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: undefined, lastName: undefined, email: undefined, activated: true, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: "NoWiFi4you" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: "ponicode.com", firstName: undefined, lastName: undefined, email: "user1+user2@mycompany.com", activated: false, langKey: "fr", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "da7588892", lastModifiedDate: undefined, password: "YouarenotAllowed2Use" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: "http://www.croplands.org/account/confirm?t=", firstName: undefined, lastName: "Murray-Kynynmound", email: "something@example.com", activated: true, langKey: "fr", authorities: undefined, createdBy: "9876", createdDate: undefined, lastModifiedBy: "9876", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: "", login: undefined, firstName: "", lastName: "", email: undefined, activated: true, langKey: "", authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService("DELETE")
    })

    test("0", () => {
        let result: any = inst.query(500)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.query(429)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.query(200)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.query(400)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.query(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService("POST")
    })

    test("0", () => {
        let result: any = inst.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: "George", lastName: undefined, email: undefined, activated: true, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "bc23a9d531064583ace8f67dad60f6bb", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: undefined, lastName: "Zong", email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.create({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "www.google.com", firstName: "Michael", lastName: undefined, email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: "9876", lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.create({ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", login: "http://www.croplands.org/account/confirm?t=", firstName: "Edmond", lastName: "Dupont", email: "email@Google.com", activated: true, langKey: "fr", authorities: undefined, createdBy: "da7588892", createdDate: undefined, lastModifiedBy: "9876", lastModifiedDate: undefined, password: "accessdenied4u" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.create({ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", login: undefined, firstName: undefined, lastName: "Dupont", email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.create({ id: "", login: undefined, firstName: undefined, lastName: "", email: undefined, activated: undefined, langKey: undefined, authorities: undefined, createdBy: undefined, createdDate: undefined, lastModifiedBy: undefined, lastModifiedDate: undefined, password: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService("POST")
    })

    test("0", () => {
        let result: any = inst.delete("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete("Www.GooGle.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete("https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete("https://api.telegram.org/")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.delete("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("authorities", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService("POST")
    })

    test("0", () => {
        let result: any = inst.authorities()
        expect(result).toMatchSnapshot()
    })
})
