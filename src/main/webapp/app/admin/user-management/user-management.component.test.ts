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
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInUsers()
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("trackIdentity", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let param2: any = new user_model.User(undefined, "", "", "", "", true, "", undefined, "", undefined, "", undefined, "")
        let result: any = inst4.trackIdentity(Infinity, param2)
        expect(result).toMatchSnapshot()
    })
})

describe("sort", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst4.sort()
        expect(result).toMatchSnapshot()
    })
})

describe("setActive", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst4.setActive({ key0: "Edmond" }, 9876)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.setActive("username", false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.setActive("user-name", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.setActive("user name", true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.setActive("username", true)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.setActive(Infinity, "")
        expect(result).toMatchSnapshot()
    })
})

describe("loadPage", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst4.loadPage(64)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.loadPage(256)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.loadPage(0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.loadPage(32)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.loadPage(16)
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
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
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
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let param1: any = new user_model.User(undefined, "", "", "", "", false, "", undefined, "", undefined, "", undefined, "")
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
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst4.onError(true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError(false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("Message box: foo; bar\n")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("multiple errors occurred")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError({ message: "Error:" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError({ message: "" })
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
        inst = new user_service.UserService(undefined)
        inst2 = new account_service.AccountService(undefined)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new user_management_component.UserMgmtComponent(inst, undefined, inst3, undefined, undefined, undefined, undefined, undefined)
    })

    test("0", () => {
        let result: any = inst4.onSuccess(true, true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onSuccess(1000, false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onSuccess("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onSuccess(256, false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onSuccess(true, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onSuccess(NaN, "")
        expect(result).toMatchSnapshot()
    })
})
