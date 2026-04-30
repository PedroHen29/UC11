import {calcularFrete} from '../src/calcularFrete'

describe('Função de calcular frete', () => {
    it('deve aplicar o frete se o valor for menor que 200 ', () => {
        expect(calcularFrete(10)).toBe(20)
    })
    it('não deve aplicar o frete se o valor for maior que 200 ', () => {
        expect(calcularFrete(300)).toBe(0)
    })
})

