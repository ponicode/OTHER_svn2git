import * as auth_jwt_service from "app/core/auth/auth-jwt.service"

// @ponicode
describe("getToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
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
        inst = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.login({ username: "username", rememberMe: "v4.0.0-rc.4" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.login("user name")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.login(true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.login({ username: 123, rememberMe: "1.0.0" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.login(56784)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.login(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("loginWithToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.loginWithToken("$p3onyycat", 12345)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.loginWithToken("$p3onyycat", 56784)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.loginWithToken(false, "^5.0.0")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.loginWithToken("NoWiFi4you", 12)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.loginWithToken("bc23a9d531064583ace8f67dad60f6bb", 56784)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.loginWithToken(Infinity, Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("logout", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.logout()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("storeAuthenticationToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new auth_jwt_service.AuthServerProvider(undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst.storeAuthenticationToken("!Lov3MyPianoPony", "bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.storeAuthenticationToken(true, 12345)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.storeAuthenticationToken(true, "a1969970175")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.storeAuthenticationToken("$p3onyycat", "v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.storeAuthenticationToken("NoWiFi4you", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.storeAuthenticationToken("", -Infinity)
        expect(result).toMatchSnapshot()
    })
})
