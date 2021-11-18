import * as migration_component from "app/entities/migration/migration.component"
import * as migration_service from "app/entities/migration/migration.service"
import * as principal_service from "app/core/auth/principal.service"
import * as account_service from "app/core/auth/account.service"

import * as migration_model from "app/shared/model/migration.model"
describe("reset", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 12345, "bc23a9d531064583ace8f67dad60f6bb", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.reset()
        expect(result).toMatchSnapshot()
    })
})

describe("loadAll", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(987650)
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 12345, "bc23a9d531064583ace8f67dad60f6bb", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.loadAll()
        expect(result).toMatchSnapshot()
    })
})

describe("loadPage", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(12345)
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, "a1969970175", "c466a48309794261b64a4f02cfcc3d64", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.loadPage("http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.loadPage("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.loadPage("https://croplands.org/app/a/reset?token=")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.loadPage("http://base.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.loadPage("https://twitter.com/path?abc")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.loadPage("")
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnDestroy", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(987650)
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, "a1969970175", "9876", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnDestroy()
        expect(result).toMatchSnapshot()
    })
})

describe("registerChangeInMigrations", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 987650, "c466a48309794261b64a4f02cfcc3d64", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.registerChangeInMigrations()
        expect(result).toMatchSnapshot()
    })
})

describe("sort", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("a1969970175")
        inst2 = new account_service.AccountService(12)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 987650, "9876", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.sort()
        expect(result).toMatchSnapshot()
    })
})

describe("cssClass", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 56784, "bc23a9d531064583ace8f67dad60f6bb", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.RUNNING)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.cssClass(migration_model.StatusEnum.DONE)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.cssClass(null)
        expect(result).toMatchSnapshot()
    })
})

describe("paginateMigrations", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(56784)
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 12345, "c466a48309794261b64a4f02cfcc3d64", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let param1: any = [{ id: 1, svnGroup: "9876", svnProject: "path/to/folder/", user: undefined, date: "01-01-2020", gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "https://", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: undefined, svnUser: undefined, svnPassword: "v4.0.0-rc.4", svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: undefined, branches: undefined, tags: "Clement Cliffs", svnHistory: "da7588892", tagsToMigrate: undefined, branchesToMigrate: "v1.2.4", createdTimestamp: true, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Producer" }, null, null, null]
        let result: any = inst4.paginateMigrations(param1, "https://api.telegram.org/bot")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = [{ id: 0, svnGroup: "da7588892", svnProject: undefined, user: undefined, date: "01-01-2020", gitlabGroup: undefined, gitlabProject: ".", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "https://accounts.google.com/o/oauth2/revoke?token=%s", gitlabToken: undefined, svnUrl: "https://accounts.google.com/o/oauth2/revoke?token=%s", svnUser: undefined, svnPassword: "1.0.0", svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: "mpe", branches: "sensor-copy", tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: undefined, createdTimestamp: true, workingDirectory: "/usr/sbin", emptyDirs: true, histories: undefined, mappings: undefined, flat: true, uploadType: undefined }, null, null]
        let result: any = inst4.paginateMigrations(param1, "https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = [{ id: 0, svnGroup: undefined, svnProject: "C:\\\\path\\to\\folder\\", user: "George", date: "32-01-2020", gitlabGroup: "bc23a9d531064583ace8f67dad60f6bb", gitlabProject: "./path/to/file", status: undefined, maxFileSize: "44074", forbiddenFileExtensions: "jpeg", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "https://twitter.com/path?abc", svnUser: undefined, svnPassword: "4.0.0-beta1\t", svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: undefined, branches: undefined, tags: "Kailey Bypass", svnHistory: undefined, tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: true, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: undefined }, null]
        let result: any = inst4.paginateMigrations(param1, "https://accounts.google.com/o/oauth2/revoke?token=%s")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = [{ id: 100, svnGroup: undefined, svnProject: "C:\\\\path\\to\\file.ext", user: "Edmond", date: "32-01-2020", gitlabGroup: "da7588892", gitlabProject: ".", status: undefined, maxFileSize: "44074", forbiddenFileExtensions: "m2v", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "http://base.com", svnUser: undefined, svnPassword: "v1.2.4", svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: undefined, branches: undefined, tags: "Clement Cliffs", svnHistory: undefined, tagsToMigrate: "v1.2.4", branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: true, workingDirectory: "/selinux", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: undefined }, null]
        let result: any = inst4.paginateMigrations(param1, "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = [{ id: -5.48, svnGroup: undefined, svnProject: "path/to/folder/", user: "Michael", date: "32-01-2020", gitlabGroup: "c466a48309794261b64a4f02cfcc3d64", gitlabProject: "./path/to/file", status: undefined, maxFileSize: "64832", forbiddenFileExtensions: "pdf", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "http://www.example.com/route/123?foo=bar", svnUser: undefined, svnPassword: "v1.2.4", svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: undefined, branches: undefined, tags: "Renner Circle", svnHistory: undefined, tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: "1.0.0", createdTimestamp: true, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: undefined }, null]
        let result: any = inst4.paginateMigrations(param1, "http://www.example.com/route/123?foo=bar")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.paginateMigrations([], "")
        expect(result).toMatchSnapshot()
    })
})

describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 56784, "da7588892", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.onError("Message recipient is the same as originator")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.onError("Could not find a grader object for message from xqueue")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.onError("Unable to allocate address")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.onError("TrainerCourseDetailError: Either not an ajax call or not a GET request!!!")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.onError("To force deletion of the LAG use delete_force: True")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.onError("")
        expect(result).toMatchSnapshot()
    })
})

describe("trackId", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new account_service.AccountService(56784)
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, "a1969970175", "da7588892", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.trackId(-100, { id: 1, svnGroup: "9876", svnProject: undefined, user: undefined, date: "01-01-2030", gitlabGroup: "9876", gitlabProject: "path/to/folder/", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "https://croplands.org/app/a/reset?token=", gitlabToken: "oAuthToken", svnUrl: "http://www.example.com/route/123?foo=bar", svnUser: "Jean-Philippe", svnPassword: undefined, svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "jpeg", branches: "microchip-bypass", tags: "Renner Circle", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: true, workingDirectory: "/usr/ports", emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst4.trackId(-1, { id: 100, svnGroup: "9876", svnProject: ".", user: undefined, date: "01-13-2020", gitlabGroup: undefined, gitlabProject: "/path/to/file", status: undefined, maxFileSize: "59089", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "v4.0.0-rc.4", svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: "pdf", branches: "microchip-bypass", tags: "Renner Circle", svnHistory: "da7588892", tagsToMigrate: "1.0.0", branchesToMigrate: undefined, createdTimestamp: true, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: true, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst4.trackId(100, { id: 100, svnGroup: "12345", svnProject: undefined, user: undefined, date: "32-01-2020", gitlabGroup: "c466a48309794261b64a4f02cfcc3d64", gitlabProject: ".", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: "ponicode.com", svnUser: "Michael", svnPassword: undefined, svnRevision: "Lq8wLspXaJraZSs3CwiCTF85mkvp", trunk: "pdf", branches: "matrix-input", tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "v1.2.4", createdTimestamp: false, workingDirectory: "/usr/share", emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Architect" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst4.trackId(100, { id: 1, svnGroup: "bc23a9d531064583ace8f67dad60f6bb", svnProject: undefined, user: undefined, date: "01-13-2020", gitlabGroup: "9876", gitlabProject: "/path/to/file", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "https://croplands.org/app/a/reset?token=", gitlabToken: "oAuthToken", svnUrl: "http://www.example.com/route/123?foo=bar", svnUser: "Michael", svnPassword: undefined, svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "pdf", branches: "matrix-input", tags: "Renner Circle", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "^5.0.0", createdTimestamp: true, workingDirectory: "/usr/ports", emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst4.trackId(-100, { id: undefined, svnGroup: undefined, svnProject: undefined, user: "Anas", date: "01-13-2020", gitlabGroup: "bc23a9d531064583ace8f67dad60f6bb", gitlabProject: "./path/to/file", status: undefined, maxFileSize: "43083", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: undefined, trunk: undefined, branches: "port-generate", tags: undefined, svnHistory: "12345", tagsToMigrate: undefined, branchesToMigrate: "^5.0.0", createdTimestamp: false, workingDirectory: "/selinux", emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst4.trackId(NaN, { id: undefined, svnGroup: undefined, svnProject: "", user: undefined, date: "", gitlabGroup: "", gitlabProject: undefined, status: undefined, maxFileSize: "", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: undefined, trunk: undefined, branches: undefined, tags: undefined, svnHistory: "", tagsToMigrate: "", branchesToMigrate: undefined, createdTimestamp: true, workingDirectory: "", emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any

    beforeEach(() => {
        inst = new migration_service.MigrationService(987650)
        inst2 = new account_service.AccountService("a1969970175")
        inst3 = new principal_service.Principal(inst2)
        inst4 = new migration_component.MigrationComponent(inst, 12, "bc23a9d531064583ace8f67dad60f6bb", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", inst3)
    })

    test("0", () => {
        let result: any = inst4.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
