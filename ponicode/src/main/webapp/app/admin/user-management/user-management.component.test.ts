import * as user_management_component from "app/admin/user-management/user-management.component"
import * as user_service from "app/core/user/user.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

import * as user_model from "app/core/user/user.model"
describe("registerChangeInUsers", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(12345)
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "https://", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://twitter.com/path?abc", "9876", true)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInUsers()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(12345)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "https://croplands.org/app/a/confirm?t=", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://api.telegram.org/", "https://accounts.google.com/o/oauth2/revoke?token=%s", "c466a48309794261b64a4f02cfcc3d64", true)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService("a1969970175")
        inst2 = new account_service.AccountService(987650)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "Www.GooGle.com", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://croplands.org/app/a/reset?token=", "http://www.example.com/route/123?foo=bar", "9876", false)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("setActive", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(12345)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "https://croplands.org/app/a/reset?token=", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc", "bc23a9d531064583ace8f67dad60f6bb", true)
    })

    test("0", () => {
        let result: any = inst4.setActive("Michael", true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.setActive("Jean-Philippe", false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.setActive("Anas", true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.setActive("Jean-Philippe", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.setActive("George", false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.setActive("", false)
        expect(result).toMatchSnapshot()
    })
})

describe("trackIdentity", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "http://base.com", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "http://base.com", "https://api.telegram.org/", "da7588892", true)
    })

    test("0", () => {
        let param2: any = new user_model.User("a1969970175", undefined, undefined, "Becky Bednar", undefined, undefined, "Janet Homenick", undefined, "Becky Bednar", undefined, "Ronald Keeling", undefined, "Maurice Purdy")
        let result: any = inst4.trackIdentity(1, param2)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param2: any = new user_model.User("bc23a9d531064583ace8f67dad60f6bb", undefined, undefined, "Gail Hoppe", "Becky Bednar", true, "Janet Homenick", undefined, "Janet Homenick", undefined, undefined, undefined, undefined)
        let result: any = inst4.trackIdentity(0, param2)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param2: any = new user_model.User(12345, "Gail Hoppe", "Janet Homenick", undefined, undefined, false, "Ronald Keeling", undefined, undefined, undefined, "Janet Homenick", undefined, undefined)
        let result: any = inst4.trackIdentity(0, param2)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param2: any = new user_model.User(12, "Becky Bednar", undefined, undefined, undefined, undefined, "Maurice Purdy", undefined, undefined, undefined, undefined, undefined, undefined)
        let result: any = inst4.trackIdentity(1, param2)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param2: any = new user_model.User("a1969970175", "Janet Homenick", undefined, undefined, undefined, undefined, "Maurice Purdy", undefined, undefined, undefined, undefined, undefined, undefined)
        let result: any = inst4.trackIdentity(1, param2)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param2: any = new user_model.User("", undefined, undefined, "", "", true, "", undefined, "", undefined, undefined, undefined, undefined)
        let result: any = inst4.trackIdentity(NaN, param2)
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(12)
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "http://www.croplands.org/account/confirm?t=", "www.google.com", "12345", true)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("sort", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService("a1969970175")
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "https://twitter.com/path?abc", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://croplands.org/app/a/reset?token=", "https://accounts.google.com/o/oauth2/revoke?token=%s", "da7588892", false)
    })

    test("0", () => {
        let result: any = inst4.sort()
        expect(result).toMatchSnapshot()
    })
})

describe("loadPage", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(12)
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "https://api.telegram.org/bot", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://croplands.org/app/a/reset?token=", "https://croplands.org/app/a/reset?token=", "bc23a9d531064583ace8f67dad60f6bb", false)
    })

    test("0", () => {
        let result: any = inst4.loadPage(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.loadPage(16)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.loadPage(64)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.loadPage(32)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.loadPage(256)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.loadPage(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("transition", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(56784)
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "Www.GooGle.com", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://api.telegram.org/", "da7588892", false)
    })

    test("0", () => {
        let result: any = inst4.transition()
        expect(result).toMatchSnapshot()
    })
})

describe("deleteUser", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(12)
        inst2 = new account_service.AccountService("bc23a9d531064583ace8f67dad60f6bb")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "www.google.com", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://api.telegram.org/", "https://croplands.org/app/a/confirm?t=", "bc23a9d531064583ace8f67dad60f6bb", true)
    })

    test("0", () => {
        let param1: any = new user_model.User("bc23a9d531064583ace8f67dad60f6bb", "Janet Homenick", undefined, undefined, "Becky Bednar", true, "Becky Bednar", undefined, "Ronald Keeling", undefined, undefined, undefined, undefined)
        let result: any = inst4.deleteUser(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new user_model.User(987650, "Becky Bednar", "Maurice Purdy", undefined, undefined, undefined, "Maurice Purdy", undefined, undefined, undefined, "Becky Bednar", undefined, "Becky Bednar")
        let result: any = inst4.deleteUser(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new user_model.User(12345, "Becky Bednar", "Maurice Purdy", undefined, undefined, undefined, "Ronald Keeling", undefined, undefined, undefined, "Maurice Purdy", undefined, "Gail Hoppe")
        let result: any = inst4.deleteUser(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new user_model.User("a1969970175", "Janet Homenick", "Janet Homenick", "Maurice Purdy", undefined, true, "Ronald Keeling", undefined, "Ronald Keeling", undefined, "Janet Homenick", undefined, undefined)
        let result: any = inst4.deleteUser(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new user_model.User(12345, "Ronald Keeling", undefined, "Ronald Keeling", "Becky Bednar", undefined, "Janet Homenick", undefined, "Becky Bednar", undefined, "Gail Hoppe", undefined, undefined)
        let result: any = inst4.deleteUser(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new user_model.User(-Infinity, "", "", undefined, undefined, undefined, "", undefined, undefined, undefined, "", undefined, "")
        let result: any = inst4.deleteUser(param1)
        expect(result).toMatchSnapshot()
    })
})

describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(56784)
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "Www.GooGle.com", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/reset?token=", "12345", true)
    })

    test("0", () => {
        let result: any = inst4.onError("Message box: foo; bar\n")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("too many arguments")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("error")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("invalid choice")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("error\n")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("onSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(12345)
        inst2 = new account_service.AccountService(12345)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, "www.google.com", inst3, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://api.telegram.org/bot", "https://accounts.google.com/o/oauth2/revoke?token=%s", "da7588892", true)
    })

    test("0", () => {
        let result: any = inst4.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "https://accounts.google.com/o/oauth2/revoke?token=%s")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onSuccess("", "")
        expect(result).toMatchSnapshot()
    })
})
