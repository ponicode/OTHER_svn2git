import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

describe("hasAnyAuthority", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService("a1969970175")
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.hasAnyAuthority(["9876", "9876", "da7588892"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.hasAnyAuthority(["bc23a9d531064583ace8f67dad60f6bb", "12345", "9876"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.hasAnyAuthority(["c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.hasAnyAuthority(["9876", "9876", "12345"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.hasAnyAuthority(["12345", "c466a48309794261b64a4f02cfcc3d64", "9876"])
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
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.authenticate("https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.authenticate("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.authenticate("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.authenticate("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.authenticate("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.authenticate("")
        expect(result).toMatchSnapshot()
    })
})

describe("hasAnyAuthorityDirect", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(12)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["bc23a9d531064583ace8f67dad60f6bb"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["9876"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["9876", "bc23a9d531064583ace8f67dad60f6bb", "12345", "12345", "12345"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["da7588892", "12345", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.hasAnyAuthorityDirect(["9876", "9876", "da7588892", "12345", "bc23a9d531064583ace8f67dad60f6bb"])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.hasAnyAuthorityDirect([])
        expect(result).toMatchSnapshot()
    })
})

describe("identity", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.identity(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.identity(true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.identity(null)
        expect(result).toMatchSnapshot()
    })
})

describe("hasAuthority", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(56784)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.hasAuthority("http://backend.userland.com/rss")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.hasAuthority("b'http://example.com/foo?bar'")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.hasAuthority("b'http://example.com/'")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.hasAuthority("b'http://example.com/foo;1234?bar#frag'")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.hasAuthority("b'http://example.com:1234/foo?bar'")
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
        inst = new account_service.AccountService("a1969970175")
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.isAuthenticated()
        expect(result).toMatchSnapshot()
    })
})

describe("isIdentityResolved", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService("a1969970175")
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.isIdentityResolved()
        expect(result).toMatchSnapshot()
    })
})

describe("getImageUrl", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.getImageUrl()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getAuthenticationState", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(12345)
        inst2 = new principal_service.Principal(inst)
    })

    test("0", () => {
        let result: any = inst2.getAuthenticationState()
        expect(result).toMatchSnapshot()
    })
})
