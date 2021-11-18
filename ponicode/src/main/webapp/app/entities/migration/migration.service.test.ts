import * as migration_service from "app/entities/migration/migration.service"

// @ponicode
describe("retry", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.retry(100, true)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.retry(-100, false)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.retry(1, true)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.retry(0, false)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.retry(-5.48, false)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.retry(Infinity, false)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.update({ id: undefined, svnGroup: undefined, svnProject: undefined, user: "Pierre Edouard", date: "32-01-2020", gitlabGroup: undefined, gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "mpe", gitlabUrl: undefined, gitlabToken: "oAuthToken", svnUrl: undefined, svnUser: "Pierre Edouard", svnPassword: "4.0.0-beta1\t", svnRevision: undefined, trunk: undefined, branches: "microchip-bypass", tags: undefined, svnHistory: "bc23a9d531064583ace8f67dad60f6bb", tagsToMigrate: undefined, branchesToMigrate: "1.0.0", createdTimestamp: false, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.update({ id: -5.48, svnGroup: "da7588892", svnProject: "./path/to/file", user: undefined, date: "01-01-2030", gitlabGroup: "bc23a9d531064583ace8f67dad60f6bb", gitlabProject: undefined, status: undefined, maxFileSize: "69660", forbiddenFileExtensions: undefined, gitlabUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", gitlabToken: undefined, svnUrl: "https://accounts.google.com/o/oauth2/revoke?token=%s", svnUser: undefined, svnPassword: undefined, svnRevision: "Lq8wLspXaJraZSs3CwiCTF85mkvp", trunk: "m2v", branches: undefined, tags: "Kailey Bypass", svnHistory: "12345", tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: undefined, createdTimestamp: false, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.update({ id: undefined, svnGroup: undefined, svnProject: "./path/to/file", user: undefined, date: "32-01-2020", gitlabGroup: "12345", gitlabProject: undefined, status: undefined, maxFileSize: "69660", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: "Anas", svnPassword: undefined, svnRevision: undefined, trunk: "pdf", branches: undefined, tags: undefined, svnHistory: "c466a48309794261b64a4f02cfcc3d64", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: true, workingDirectory: undefined, emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.update({ id: undefined, svnGroup: undefined, svnProject: undefined, user: undefined, date: "01-13-2020", gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "64832", forbiddenFileExtensions: "m2v", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "^5.0.0", svnRevision: undefined, trunk: undefined, branches: "microchip-bypass", tags: undefined, svnHistory: "da7588892", tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: "1.0.0", createdTimestamp: false, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.update({ id: 1, svnGroup: "12345", svnProject: "/path/to/file", user: undefined, date: "01-13-2020", gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "44074", forbiddenFileExtensions: undefined, gitlabUrl: "https://api.telegram.org/", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: undefined, svnUser: undefined, svnPassword: "^5.0.0", svnRevision: undefined, trunk: undefined, branches: undefined, tags: undefined, svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: false, workingDirectory: undefined, emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: "Manager" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.update({ id: -Infinity, svnGroup: "", svnProject: "", user: undefined, date: "", gitlabGroup: "", gitlabProject: undefined, status: undefined, maxFileSize: "", forbiddenFileExtensions: undefined, gitlabUrl: "", gitlabToken: undefined, svnUrl: "", svnUser: undefined, svnPassword: undefined, svnRevision: "", trunk: "", branches: undefined, tags: "", svnHistory: "", tagsToMigrate: "", branchesToMigrate: undefined, createdTimestamp: false, workingDirectory: "", emptyDirs: false, histories: undefined, mappings: undefined, flat: undefined, uploadType: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("find", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.find(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.find(1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.find(-100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.find(100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.find(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findHistories", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.findHistories(-100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.findHistories(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.findHistories(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.findHistories(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.findHistories(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("query", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("DELETE")
    })

    test("0", () => {
        let result: any = inst.query(200)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.query(500)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.query(400)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.query(404)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.query(429)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.query(NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.delete(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.delete(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.delete(100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.delete(-100)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.delete(Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("findMappings", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.findMappings(0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.findMappings(-100)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.findMappings(1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.findMappings(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.findMappings(100)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.findMappings(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("convertDateFromClient", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.convertDateFromClient({ id: undefined, svnGroup: undefined, svnProject: undefined, user: "George", date: "01-13-2020", gitlabGroup: "12345", gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "1.0.0", svnRevision: undefined, trunk: "jpeg", branches: undefined, tags: undefined, svnHistory: "12345", tagsToMigrate: "v4.0.0-rc.4", branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: true, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Manager" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.convertDateFromClient({ id: -100, svnGroup: undefined, svnProject: undefined, user: "Michael", date: "01-01-2020", gitlabGroup: undefined, gitlabProject: "/path/to/file", status: undefined, maxFileSize: "44074", forbiddenFileExtensions: "m2v", gitlabUrl: "http://base.com", gitlabToken: "oAuthToken", svnUrl: "https://twitter.com/path?abc", svnUser: undefined, svnPassword: undefined, svnRevision: undefined, trunk: "pdf", branches: "sensor-copy", tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: true, workingDirectory: "/selinux", emptyDirs: true, histories: undefined, mappings: undefined, flat: true, uploadType: "Manager" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.convertDateFromClient({ id: undefined, svnGroup: undefined, svnProject: undefined, user: "Anas", date: "01-01-2020", gitlabGroup: "bc23a9d531064583ace8f67dad60f6bb", gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "1.0.0", svnRevision: undefined, trunk: "jpeg", branches: undefined, tags: undefined, svnHistory: "da7588892", tagsToMigrate: "^5.0.0", branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: true, workingDirectory: undefined, emptyDirs: false, histories: undefined, mappings: undefined, flat: false, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.convertDateFromClient({ id: -5.48, svnGroup: undefined, svnProject: undefined, user: "Anas", date: "01-01-2020", gitlabGroup: undefined, gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: "59089", forbiddenFileExtensions: "pdf", gitlabUrl: "ponicode.com", gitlabToken: "oAuthToken", svnUrl: "https://croplands.org/app/a/confirm?t=", svnUser: undefined, svnPassword: undefined, svnRevision: undefined, trunk: "m2v", branches: "matrix-input", tags: "Clement Cliffs", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "^5.0.0", createdTimestamp: false, workingDirectory: "/selinux", emptyDirs: true, histories: undefined, mappings: undefined, flat: true, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.convertDateFromClient({ id: 0, svnGroup: "bc23a9d531064583ace8f67dad60f6bb", svnProject: "./path/to/file", user: undefined, date: "01-01-2020", gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "69660", forbiddenFileExtensions: "pdf", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "www.google.com", svnUser: undefined, svnPassword: "1.0.0", svnRevision: "Lq8wLspXaJraZSs3CwiCTF85mkvp", trunk: "mpe", branches: "port-generate", tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: "4.0.0-beta1\t", branchesToMigrate: undefined, createdTimestamp: false, workingDirectory: "/usr/ports", emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.convertDateFromClient({ id: Infinity, svnGroup: undefined, svnProject: undefined, user: "", date: "", gitlabGroup: undefined, gitlabProject: "", status: undefined, maxFileSize: "", forbiddenFileExtensions: "", gitlabUrl: "", gitlabToken: "", svnUrl: "", svnUser: undefined, svnPassword: undefined, svnRevision: undefined, trunk: "", branches: "", tags: "", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "", createdTimestamp: false, workingDirectory: "", emptyDirs: true, histories: undefined, mappings: undefined, flat: true, uploadType: "" })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("convertDateFromServer", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.convertDateFromServer("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.convertDateFromServer("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("convertDateArrayFromServer", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.convertDateArrayFromServer("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.convertDateArrayFromServer("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new migration_service.MigrationService("POST")
    })

    test("0", () => {
        let result: any = inst.create({ id: undefined, svnGroup: "12345", svnProject: "path/to/file.ext", user: undefined, date: "01-01-2020", gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: "69660", forbiddenFileExtensions: "jpeg", gitlabUrl: undefined, gitlabToken: "oAuthToken", svnUrl: undefined, svnUser: undefined, svnPassword: "4.0.0-beta1\t", svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: undefined, branches: "microchip-bypass", tags: undefined, svnHistory: "bc23a9d531064583ace8f67dad60f6bb", tagsToMigrate: "v1.2.4", branchesToMigrate: undefined, createdTimestamp: true, workingDirectory: "/usr/sbin", emptyDirs: undefined, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.create({ id: undefined, svnGroup: "bc23a9d531064583ace8f67dad60f6bb", svnProject: undefined, user: undefined, date: "01-13-2020", gitlabGroup: "12345", gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "m2v", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "^5.0.0", svnRevision: "Lq8wLspXaJraZSs3CwiCTF85mkvp", trunk: undefined, branches: undefined, tags: undefined, svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "1.0.0", createdTimestamp: true, workingDirectory: "/usr/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.create({ id: undefined, svnGroup: "c466a48309794261b64a4f02cfcc3d64", svnProject: undefined, user: undefined, date: "32-01-2020", gitlabGroup: "da7588892", gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: "jpeg", gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "1.0.0", svnRevision: "3pxicLBUuEs8qDUKmTABBcWrxzf", trunk: undefined, branches: undefined, tags: undefined, svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "4.0.0-beta1\t", createdTimestamp: false, workingDirectory: "/selinux", emptyDirs: false, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Manager" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.create({ id: -100, svnGroup: undefined, svnProject: "path/to/file.ext", user: undefined, date: "01-01-2020", gitlabGroup: undefined, gitlabProject: "path/to/folder/", status: undefined, maxFileSize: "43083", forbiddenFileExtensions: undefined, gitlabUrl: "https://accounts.google.com/o/oauth2/revoke?token=%s", gitlabToken: undefined, svnUrl: "https://api.telegram.org/", svnUser: undefined, svnPassword: undefined, svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: undefined, branches: "protocol-reboot", tags: "Clement Cliffs", svnHistory: "12345", tagsToMigrate: "v1.2.4", branchesToMigrate: undefined, createdTimestamp: false, workingDirectory: "/usr/ports", emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.create({ id: -5.48, svnGroup: undefined, svnProject: "./path/to/file", user: undefined, date: "32-01-2020", gitlabGroup: "12345", gitlabProject: undefined, status: undefined, maxFileSize: "64832", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: "LKinAN1FRfbjJXYAEWCbx1H443wbjHip", trunk: undefined, branches: undefined, tags: "Renner Circle", svnHistory: "c466a48309794261b64a4f02cfcc3d64", tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: true, workingDirectory: "/selinux", emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: "Producer" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.create({ id: -Infinity, svnGroup: undefined, svnProject: "", user: undefined, date: "", gitlabGroup: undefined, gitlabProject: "", status: undefined, maxFileSize: "", forbiddenFileExtensions: undefined, gitlabUrl: "", gitlabToken: undefined, svnUrl: "", svnUser: undefined, svnPassword: undefined, svnRevision: "", trunk: undefined, branches: "", tags: "", svnHistory: "", tagsToMigrate: "", branchesToMigrate: undefined, createdTimestamp: false, workingDirectory: "", emptyDirs: true, histories: undefined, mappings: undefined, flat: false, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })
})
