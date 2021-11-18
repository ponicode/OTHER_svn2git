import * as migration_removed_file_update_component from "app/entities/migration-removed-file/migration-removed-file-update.component"
import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"
import * as migration_service from "app/entities/migration/migration.service"

describe("previousState", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(56784)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(56784, inst, inst2, "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst3.previousState()
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("a1969970175")
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(56784, inst, inst2, "https://api.telegram.org/")
    })

    test("0", () => {
        let result: any = inst3.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(12)
        inst2 = new migration_service.MigrationService("a1969970175")
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(56784, inst, inst2, "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst3.save()
        expect(result).toMatchSnapshot()
    })
})

describe("subscribeToSaveResponse", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(12345)
        inst2 = new migration_service.MigrationService(12)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent("a1969970175", inst, inst2, "http://base.com")
    })

    test("0", () => {
        let result: any = inst3.subscribeToSaveResponse("https://croplands.org/app/a/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.subscribeToSaveResponse("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.subscribeToSaveResponse("https://")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.subscribeToSaveResponse("www.google.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.subscribeToSaveResponse("http://www.croplands.org/account/confirm?t=")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.subscribeToSaveResponse("")
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveError", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService(987650)
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent("bc23a9d531064583ace8f67dad60f6bb", inst, inst2, "https://")
    })

    test("0", () => {
        let result: any = inst3.onSaveError()
        expect(result).toMatchSnapshot()
    })
})

describe("onSaveSuccess", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("a1969970175")
        inst2 = new migration_service.MigrationService(12)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(12345, inst, inst2, "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst3.onSaveSuccess()
        expect(result).toMatchSnapshot()
    })
})

describe("onError", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(56784)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent(12, inst, inst2, "http://www.example.com/route/123?foo=bar")
    })

    test("0", () => {
        let result: any = inst3.onError("Unknown error")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.onError("Error:")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.onError("TypeError exception should be raised")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.onError("Empty name specified")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.onError("Mock Error Message")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.onError("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("trackMigrationById", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_service.MigrationService(987650)
        inst3 = new migration_removed_file_update_component.MigrationRemovedFileUpdateComponent("a1969970175", inst, inst2, "https://api.telegram.org/bot")
    })

    test("0", () => {
        let result: any = inst3.trackMigrationById(-1, { id: undefined, svnGroup: "12345", svnProject: undefined, user: "Pierre Edouard", date: "01-01-2030", gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "https://twitter.com/path?abc", svnUser: undefined, svnPassword: undefined, svnRevision: undefined, trunk: "pdf", branches: "protocol-reboot", tags: "Corrine Square", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "v4.0.0-rc.4", createdTimestamp: false, workingDirectory: "/usr/ports", emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: "Manager" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.trackMigrationById(100, { id: undefined, svnGroup: undefined, svnProject: undefined, user: "Anas", date: "01-13-2020", gitlabGroup: undefined, gitlabProject: "path/to/file.ext", status: undefined, maxFileSize: "69660", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: undefined, svnUser: undefined, svnPassword: "4.0.0-beta1\t", svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: "m2v", branches: undefined, tags: "Beryl Coves", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: undefined, createdTimestamp: false, workingDirectory: "/usr/sbin", emptyDirs: true, histories: undefined, mappings: undefined, flat: true, uploadType: "Developer" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.trackMigrationById(-100, { id: -5.48, svnGroup: "da7588892", svnProject: undefined, user: undefined, date: "01-01-2030", gitlabGroup: "bc23a9d531064583ace8f67dad60f6bb", gitlabProject: undefined, status: undefined, maxFileSize: "69660", forbiddenFileExtensions: undefined, gitlabUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: "m2v", branches: "sensor-copy", tags: undefined, svnHistory: "c466a48309794261b64a4f02cfcc3d64", tagsToMigrate: undefined, branchesToMigrate: "^5.0.0", createdTimestamp: false, workingDirectory: "/usr/ports", emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.trackMigrationById(100, { id: undefined, svnGroup: "12345", svnProject: "C:\\\\path\\to\\folder\\", user: undefined, date: "01-01-2030", gitlabGroup: "da7588892", gitlabProject: undefined, status: undefined, maxFileSize: "44074", forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", svnUser: "George", svnPassword: "^5.0.0", svnRevision: "MPZf3hhgRxurYDDVsHhDc23nDi", trunk: undefined, branches: undefined, tags: "Beryl Coves", svnHistory: "12345", tagsToMigrate: "1.0.0", branchesToMigrate: undefined, createdTimestamp: true, workingDirectory: "/opt/share", emptyDirs: false, histories: undefined, mappings: undefined, flat: true, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.trackMigrationById(0, { id: -100, svnGroup: "bc23a9d531064583ace8f67dad60f6bb", svnProject: undefined, user: undefined, date: "01-01-2020", gitlabGroup: "c466a48309794261b64a4f02cfcc3d64", gitlabProject: undefined, status: undefined, maxFileSize: "59089", forbiddenFileExtensions: undefined, gitlabUrl: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", gitlabToken: "u7djsl186ksk99-DsklLk89", svnUrl: undefined, svnUser: undefined, svnPassword: undefined, svnRevision: "3cBk3sCzB58vfDGAznLJK9KPSnW1", trunk: "mpe", branches: "sensor-copy", tags: undefined, svnHistory: "9876", tagsToMigrate: undefined, branchesToMigrate: "v1.2.4", createdTimestamp: false, workingDirectory: "/usr/ports", emptyDirs: true, histories: undefined, mappings: undefined, flat: undefined, uploadType: undefined })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.trackMigrationById(-Infinity, { id: undefined, svnGroup: "", svnProject: undefined, user: "", date: "", gitlabGroup: undefined, gitlabProject: undefined, status: undefined, maxFileSize: undefined, forbiddenFileExtensions: undefined, gitlabUrl: undefined, gitlabToken: undefined, svnUrl: "", svnUser: undefined, svnPassword: undefined, svnRevision: undefined, trunk: "", branches: "", tags: "", svnHistory: undefined, tagsToMigrate: undefined, branchesToMigrate: "", createdTimestamp: false, workingDirectory: "", emptyDirs: undefined, histories: undefined, mappings: undefined, flat: undefined, uploadType: "" })
        expect(result).toMatchSnapshot()
    })
})
