import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("hasAnyAuthority", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.hasAnyAuthority(["^5.0.0"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.hasAnyAuthority(["v4.0.0-rc.4", "^5.0.0", "1.0.0", "1.0.0", "1.0.0"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.hasAnyAuthority(["4.0.0-beta1\t", "4.0.0-beta1\t", "4.0.0-beta1\t", "^5.0.0", "v4.0.0-rc.4"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.hasAnyAuthority(["1.0.0", "v1.2.4"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.hasAnyAuthority(["^5.0.0", "4.0.0-beta1\t"])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.hasAnyAuthority([])
        expect(result).toMatchSnapshot()
    })
})

describe("authenticate", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.authenticate(["a", "b", "043", "holasenior"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.authenticate([-1, 0.5, 1, 2, 3, 4, 5])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.authenticate(false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.authenticate(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.authenticate([10, -45.9, 103.5, 0.955674])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.authenticate(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("hasAnyAuthorityDirect", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["v1.2.4", "v1.2.4", "1.0.0"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["v4.0.0-rc.4"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["^5.0.0"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["^5.0.0", "v1.2.4"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["v1.2.4", "4.0.0-beta1\t", "v4.0.0-rc.4"])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.hasAnyAuthorityDirect([])
        expect(result).toMatchSnapshot()
    })
})

describe("hasAuthority", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.hasAuthority("b'http://example.com/foo?bar'")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.hasAuthority("b'https://example.com:1234/foo?bar'")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.hasAuthority("b'http://example.com/'")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.hasAuthority("b'http://example.com:1234/foo?bar'")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.hasAuthority("http://another.example.com/")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.hasAuthority("")
        expect(result).toMatchSnapshot()
    })
})

describe("isAuthenticated", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.isAuthenticated()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("isIdentityResolved", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.isIdentityResolved()
        expect(result).toMatchSnapshot()
    })
})
