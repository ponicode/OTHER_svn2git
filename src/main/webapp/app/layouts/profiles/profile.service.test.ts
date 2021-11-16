import * as profile_service from "app/layouts/profiles/profile.service"

// @ponicode
describe("getProfileInfo", () => {
    let inst: any

    beforeEach(() => {
        inst = new profile_service.ProfileService(undefined)
    })

    test("0", () => {
        let result: any = inst.getProfileInfo()
        expect(result).toMatchSnapshot()
    })
})
