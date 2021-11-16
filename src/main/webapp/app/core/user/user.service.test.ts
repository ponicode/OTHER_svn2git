import * as user_service from "app/core/user/user.service"

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
    })

    test("0", () => {
        let result: any = inst.find("user123")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find("user-name")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find("username")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(123)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find("user_name")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.find("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
    })

    test("0", () => {
        let result: any = inst.query(undefined)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
    })

    test("0", () => {
        let inst3: any = new Date("01-01-2020")
        let inst2: any = new Date("01-01-2020")
        let result: any = inst.create({ id: true, login: "user123", firstName: "Anas", lastName: "Zong", email: "bed-free@tutanota.de", activated: false, langKey: "it", authorities: [false, "^5.0.0", false], createdBy: 62562, createdDate: inst2, lastModifiedBy: 62562, lastModifiedDate: inst3, password: "accessdenied4u" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let inst3: any = new Date("01-13-2020")
        let inst2: any = new Date("01-01-2020")
        let result: any = inst.create({ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", login: 123, firstName: "George", lastName: "Zong", email: "user1+user2@mycompany.com", activated: true, langKey: "de", authorities: ["v4.0.0-rc.4", true], createdBy: 62562, createdDate: inst2, lastModifiedBy: "91659-4424", lastModifiedDate: inst3, password: "!Lov3MyPianoPony" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let inst3: any = new Date("01-01-2030")
        let inst2: any = new Date("01-01-2030")
        let result: any = inst.create({ id: false, login: "user name", firstName: "Edmond", lastName: "Baziz", email: "TestUpperCase@Example.com", activated: false, langKey: "ru", authorities: [true, "^5.0.0", true], createdBy: "73609-2040", createdDate: inst2, lastModifiedBy: 60144, lastModifiedDate: inst3, password: "$p3onyycat" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let inst3: any = new Date("32-01-2020")
        let inst2: any = new Date("01-01-2020")
        let result: any = inst.create({ id: false, login: "user123", firstName: "Jean-Philippe", lastName: "Dupont", email: "email@Google.com", activated: false, langKey: "ar", authorities: ["1.0.0", "1.0.0"], createdBy: 23306, createdDate: inst2, lastModifiedBy: "73609-2040", lastModifiedDate: inst3, password: "NoWiFi4you" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let inst3: any = new Date("32-01-2020")
        let inst2: any = new Date("01-01-2030")
        let result: any = inst.create({ id: false, login: "username", firstName: "George", lastName: "Baziz", email: "user@host:300", activated: false, langKey: "it", authorities: ["1.0.0"], createdBy: 62562, createdDate: inst2, lastModifiedBy: 62562, lastModifiedDate: inst3, password: "$p3onyycat" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let inst3: any = new Date("")
        let inst2: any = new Date("")
        let result: any = inst.create({ id: -Infinity, login: "", firstName: "", lastName: "", email: "", activated: false, langKey: "", authorities: [], createdBy: "", createdDate: inst2, lastModifiedBy: "", lastModifiedDate: inst3, password: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
    })

    test("0", () => {
        let result: any = inst.delete("user name")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete("user-name")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete("username")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(123)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete("user_name")
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
        inst = new user_service.UserService(undefined)
    })

    test("0", () => {
        let result: any = inst.authorities()
        expect(result).toMatchSnapshot()
    })
})
