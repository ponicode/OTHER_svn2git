import * as activate_service from 'app/account/activate/activate.service'
import * as http from '@angular/common/http';
import * as backend from '@angular/common/http/src/backend';

// @ponicode
describe('get', () => {
    let inst: any;
    let inst2: any;
    let inst3: any;

    beforeEach(() => {
        inst = new backend.HttpHandler();
        inst2 = new http.HttpClient(inst);
        inst3 = new activate_service.ActivateService(inst2);
    })

    test('0', () => {
        let result: any = inst3.get('Elio');
        expect(result).toMatchSnapshot();
    })

    test('1', () => {
        let result: any = inst3.get('elio@example.com');
        expect(result).toMatchSnapshot();
    })

    test('2', () => {
        let result: any = inst3.get('Dillenberg');
        expect(result).toMatchSnapshot();
    })

    test('3', () => {
        let result: any = inst3.get('');
        expect(result).toMatchSnapshot();
    })
})
