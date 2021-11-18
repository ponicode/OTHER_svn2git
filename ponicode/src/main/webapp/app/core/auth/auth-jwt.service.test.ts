import * as auth_jwt_service from "app/core/auth/auth-jwt.service"

// @ponicode
describe("getToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider("POST", "ponicode.com", "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst.getToken()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("login", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider("POST", "https://croplands.org/app/a/confirm?t=", "ponicode.com")
    })

    test("0", () => {
        let result: any = inst.login("user name")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.login("user-name")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.login("user123")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.login("123")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.login("user_name")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.login("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("loginWithToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider("POST", "https://api.telegram.org/", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("0", () => {
        let result: any = inst.loginWithToken("https://accounts.google.com/o/oauth2/revoke?token=%s", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.loginWithToken("https://api.telegram.org/bot", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.loginWithToken("https://api.telegram.org/bot", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.loginWithToken("https://api.telegram.org/bot", "v1.2.4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.loginWithToken("http://base.com", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.loginWithToken("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("storeAuthenticationToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider("POST", "https://api.telegram.org/bot", "http://www.croplands.org/account/confirm?t=")
    })

    test("0", () => {
        let result: any = inst.storeAuthenticationToken("Www.GooGle.com", "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.storeAuthenticationToken("http://base.com", "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.storeAuthenticationToken("http://www.example.com/route/123?foo=bar", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.storeAuthenticationToken("https://accounts.google.com/o/oauth2/revoke?token=%s", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.storeAuthenticationToken("https://api.telegram.org/bot", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.storeAuthenticationToken("", "")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("logout", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider("POST", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst.logout()
        expect(result).toMatchSnapshot()
    })
})
