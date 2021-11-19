import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"
import * as http from "@angular/common/http"

describe("authenticate", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.authenticate("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.authenticate("https://accounts.google.com/o/oauth2/revoke?token=%s")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.authenticate("https://")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.authenticate("http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.authenticate("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.authenticate("")
        expect(result).toMatchSnapshot()
    })
})

describe("hasAnyAuthority", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.hasAnyAuthority(["c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", "9876"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.hasAnyAuthority(["bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.hasAnyAuthority(["c466a48309794261b64a4f02cfcc3d64", "9876", "c466a48309794261b64a4f02cfcc3d64"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.hasAnyAuthority(["9876", "12345", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", "12345"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.hasAnyAuthority(["c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64", "12345"])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.hasAnyAuthority([])
        expect(result).toMatchSnapshot()
    })
})

describe("hasAnyAuthorityDirect", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.hasAnyAuthorityDirect(["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "9876"])
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.hasAnyAuthorityDirect(["da7588892"])
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.hasAnyAuthorityDirect(["12345"])
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.hasAnyAuthorityDirect(["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64"])
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.hasAnyAuthorityDirect(["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "12345"])
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.hasAnyAuthorityDirect([])
        expect(result).toMatchSnapshot()
    })
})

describe("hasAuthority", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.hasAuthority("http://backend.userland.com/rss")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.hasAuthority("b'http://example.com/foo;1234?bar#frag'")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.hasAuthority("b'http://example.com/'")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.hasAuthority("b'http://example.com:1234/foo?bar'")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.hasAuthority("http://example.com/foo?bar")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.hasAuthority("")
        expect(result).toMatchSnapshot()
    })
})

describe("identity", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.identity(false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.identity(true)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.identity(undefined)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.identity(null)
        expect(result).toMatchSnapshot()
    })
})

describe("isAuthenticated", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.isAuthenticated()
        expect(result).toMatchSnapshot()
    })
})

describe("isIdentityResolved", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.isIdentityResolved()
        expect(result).toMatchSnapshot()
    })
})

describe("getImageUrl", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.getImageUrl()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("getAuthenticationState", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new account_service.AccountService(inst2)
        inst4 = new principal_service.Principal(inst3)
    })

    test("0", () => {
        let result: any = inst4.getAuthenticationState()
        expect(result).toMatchSnapshot()
    })
})
