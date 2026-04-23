import {calcularDesconto} from '../src/calcularDesconto';

describe('Função calcularDesconto' , () => {

    it('deve aplicar desconto quando valor for maior que 100', () =>{
        expect(calcularDesconto(200)).toBe(180);
    });
    it('nao deve aplicar desconto quando valor for menor ou igual a 100', () =>{
        expect(calcularDesconto(100)).toBe(100);
    });
});