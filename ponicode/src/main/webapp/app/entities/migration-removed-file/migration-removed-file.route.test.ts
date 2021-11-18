import * as migration_removed_file_route from "app/entities/migration-removed-file/migration-removed-file.route"
import * as migration_removed_file_service from "app/entities/migration-removed-file/migration-removed-file.service"

// @ponicode
describe("resolve", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new migration_removed_file_service.MigrationRemovedFileService("bc23a9d531064583ace8f67dad60f6bb")
        inst2 = new migration_removed_file_route.MigrationRemovedFileResolve(inst)
    })

    test("0", () => {
        let result: any = inst2.resolve("http://www.croplands.org/account/confirm?t=", "{}")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst2.resolve("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "{}")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst2.resolve("https://api.telegram.org/bot", "{}")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst2.resolve("https://", "{}")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst2.resolve("www.google.com", "{}")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst2.resolve("", "")
        expect(result).toMatchSnapshot()
    })
})
