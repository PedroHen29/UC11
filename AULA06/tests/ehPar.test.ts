import {expression} from '@babel/template';
import {ehPar} from '../src/ehPar'

describe('Função ehPar', () =>{

    it('deve retornar true para o numero par', () =>{
        expect(ehPar(6)).toBeTruthy();
    });
    it('deve retomar false para o numero impar', () => {
        expect(ehPar(7)).toBeFalsy();
    });
});

