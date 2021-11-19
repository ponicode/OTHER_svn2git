import * as migration_service from "app/entities/migration/migration.service"
import * as http from "@angular/common/http"

describe("create", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.create({ id: 0, svnGroup: "da7588892", svnProject: "path/to/file.ext", user: "Jean-Philippe", date: undefined, gitlabGroup: "da7588892", gitlabProject: "/path/to/file", status: undefined, maxFileSize: "64832", forbiddenFileExtensions: "m2v", gitlabUrl: "https://api.telegram.org/", gitlabToken: undefined, svnUrl: undefined, svnUser: "Edmond", svnPassword: "1.0.0", svnRevision: undefined, trunk: undefined, branches: undefined, tags: "Kailey Bypass", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/ports", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Manager" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.create({ id: undefined, svnGroup: "bc23a9d531064583ace8f67dad60f6bb", svnProject: "C:\\\\path\\to\\folder\\", user: "George", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "pdf", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "https://twitter.com/path?abc", svnUser: undefined, svnPassword: "1.0.0", svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: undefined, branches: undefined, tags: undefined, svnHistory: "da7588892", tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/opt/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.create({ id: 1, svnGroup: "9876", svnProject: "/path/to/file", user: "Jean-Philippe", date: undefined, gitlabGroup: "12345", gitlabProject: "C:\\\\path\\to\\file.ext", status: undefined, maxFileSize: "43083", forbiddenFileExtensions: "pdf", gitlabUrl: "http://www.example.com/route/123?foo=bar", gitlabToken: undefined, svnUrl: undefined, svnUser: "Jean-Philippe", svnPassword: "^5.0.0", svnRevision: undefined, trunk: undefined, branches: undefined, tags: "Renner Circle", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.create({ id: 100, svnGroup: "9876", svnProject: "C:\\\\path\\to\\folder\\", user: "Pierre Edouard", date: undefined, gitlabGroup: "da7588892", gitlabProject: "/path/to/file", status: undefined, maxFileSize: "44074", forbiddenFileExtensions: "jpeg", gitlabUrl: "https://croplands.org/app/a/reset?token=", gitlabToken: undefined, svnUrl: undefined, svnUser: "Pierre Edouard", svnPassword: "v4.0.0-rc.4", svnRevision: undefined, trunk: undefined, branches: undefined, tags: "Beryl Coves", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.create({ id: undefined, svnGroup: "da7588892", svnProject: "./path/to/file", user: "Michael", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "59089", forbiddenFileExtensions: "mpe", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "Edmond", svnPassword: undefined, svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: undefined, branches: undefined, tags: undefined, svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "v1.2.4", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: false, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.create({ id: undefined, svnGroup: "", svnProject: "", user: "", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "", forbiddenFileExtensions: "", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "", svnPassword: undefined, svnRevision: "", trunk: undefined, branches: undefined, tags: undefined, svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "", createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: false, uploadType: "" })
        expect(result).toMatchSnapshot()
    })
})

describe("retry", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.retry(1, false)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.retry(100, false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.retry(-5.48, false)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.retry(1, true)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.retry(-100, false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.retry(NaN, true)
        expect(result).toMatchSnapshot()
    })
})

describe("update", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.update({ id: undefined, svnGroup: "c466a48309794261b64a4f02cfcc3d64", svnProject: undefined, user: undefined, date: undefined, gitlabGroup: "12345", gitlabProject: undefined, status: undefined, maxFileSize: "44074", forbiddenFileExtensions: undefined, gitlabUrl: "Www.GooGle.com", gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "v1.2.4", svnRevision: undefined, trunk: undefined, branches: "sensor-copy", tags: undefined, svnHistory: "12345", tagsToMigrate: undefined, branchesToMigrate: "v1.2.4", createdTimestamp: undefined, workingDirectory: "/usr/sbin", emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.update({ id: -100, svnGroup: undefined, svnProject: "C:\\\\path\\to\\folder\\", user: "George", date: undefined, gitlabGroup: "12345", gitlabProject: undefined, status: undefined, maxFileSize: "64832", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "https://accounts.google.com/o/oauth2/revoke?token=%s", svnUser: undefined, svnPassword: "v1.2.4", svnRevision: undefined, trunk: undefined, branches: undefined, tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: "1.0.0", branchesToMigrate: "^5.0.0", createdTimestamp: undefined, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.update({ id: 0, svnGroup: undefined, svnProject: "./path/to/file", user: undefined, date: undefined, gitlabGroup: "da7588892", gitlabProject: "path/to/folder/", status: undefined, maxFileSize: "69660", forbiddenFileExtensions: undefined, gitlabUrl: "https://twitter.com/path?abc", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: undefined, svnUser: undefined, svnPassword: "v1.2.4", svnRevision: "Lq8wLspXaJraZSs3CwiCTF85mkvp", trunk: "pdf", branches: "port-generate", tags: "Clement Cliffs", svnHistory: "da7588892", tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.update({ id: undefined, svnGroup: "9876", svnProject: "/path/to/file", user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: "path/to/folder/", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: "https://", gitlabToken: "oAuthToken", svnUrl: undefined, svnUser: "George", svnPassword: "1.0.0", svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: undefined, branches: "port-generate", tags: undefined, svnHistory: "c466a48309794261b64a4f02cfcc3d64", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: true, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.update({ id: 1, svnGroup: "9876", svnProject: "./path/to/file", user: "Edmond", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "Anas", svnPassword: undefined, svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "pdf", branches: "port-generate", tags: "Beryl Coves", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.update({ id: NaN, svnGroup: undefined, svnProject: "", user: undefined, date: undefined, gitlabGroup: "", gitlabProject: "", status: undefined, maxFileSize: "", forbiddenFileExtensions: undefined, gitlabUrl: "", gitlabToken: "", svnUrl: undefined, svnUser: undefined, svnPassword: "", svnRevision: "", trunk: "", branches: "", tags: "", svnHistory: "", tagsToMigrate: "", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })
})

describe("find", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.find(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.find(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.find(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.find(Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("findHistories", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.findHistories(-100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.findHistories(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.findHistories(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.findHistories(0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.findHistories(1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.findHistories(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("findMappings", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.findMappings(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.findMappings(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.findMappings(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.findMappings(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.findMappings(Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.delete(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.delete(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("query", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.query(404)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.query(200)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.query(429)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.query(400)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.query(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

describe("convertDateFromServer", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.convertDateFromServer(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.convertDateFromServer(null)
        expect(result).toMatchSnapshot()
    })
})

describe("convertDateFromClient", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.convertDateFromClient({ id: 0, svnGroup: "c466a48309794261b64a4f02cfcc3d64", svnProject: ".", user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "pdf", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "Michael", svnPassword: "v4.0.0-rc.4", svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: "pdf", branches: "protocol-reboot", tags: "Clement Cliffs", svnHistory: "9876", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.convertDateFromClient({ id: 1, svnGroup: undefined, svnProject: undefined, user: undefined, date: undefined, gitlabGroup: "c466a48309794261b64a4f02cfcc3d64", gitlabProject: undefined, status: undefined, maxFileSize: "43083", forbiddenFileExtensions: "m2v", gitlabUrl: "https://croplands.org/app/a/confirm?t=", gitlabToken: undefined, svnUrl: "http://www.croplands.org/account/confirm?t=", svnUser: undefined, svnPassword: undefined, svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: "pdf", branches: undefined, tags: "Beryl Coves", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: "/usr/ports", emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.convertDateFromClient({ id: undefined, svnGroup: "da7588892", svnProject: undefined, user: "Edmond", date: undefined, gitlabGroup: undefined, gitlabProject: "C:\\\\path\\to\\file.ext", status: undefined, maxFileSize: "59089", forbiddenFileExtensions: undefined, gitlabUrl: "https://api.telegram.org/bot", gitlabToken: undefined, svnUrl: undefined, svnUser: "Edmond", svnPassword: "4.0.0-beta1\t", svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: "pdf", branches: undefined, tags: undefined, svnHistory: "da7588892", tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: false, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.convertDateFromClient({ id: -100, svnGroup: "c466a48309794261b64a4f02cfcc3d64", svnProject: "C:\\\\path\\to\\file.ext", user: undefined, date: undefined, gitlabGroup: undefined, gitlabProject: "/path/to/file", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "pdf", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "Pierre Edouard", svnPassword: "4.0.0-beta1\t", svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: "pdf", branches: "microchip-bypass", tags: "Corrine Square", svnHistory: "12345", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: undefined, workingDirectory: undefined, emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.convertDateFromClient({ id: undefined, svnGroup: "12345", svnProject: "C:\\\\path\\to\\file.ext", user: "Anas", date: undefined, gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "pdf", gitlabUrl: "http://www.example.com/route/123?foo=bar", gitlabToken: undefined, svnUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", svnUser: "Jean-Philippe", svnPassword: undefined, svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: undefined, branches: undefined, tags: undefined, svnHistory: "12345", tagsToMigrate: "v1.2.4", branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: undefined, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.convertDateFromClient({ id: undefined, svnGroup: "", svnProject: "", user: "", date: undefined, gitlabGroup: "", gitlabProject: "", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "", svnPassword: undefined, svnRevision: undefined, trunk: undefined, branches: "", tags: undefined, svnHistory: "", tagsToMigrate: undefined, branchesToMigrate: "", createdTimestamp: undefined, workingDirectory: "", emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("convertDateArrayFromServer", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new http.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new migration_service.MigrationService(inst2)
    })

    test("0", () => {
        let result: any = inst3.convertDateArrayFromServer(undefined)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.convertDateArrayFromServer(null)
        expect(result).toMatchSnapshot()
    })
})
