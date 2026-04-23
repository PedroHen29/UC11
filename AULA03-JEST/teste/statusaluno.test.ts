import {statusaluno} from '../src/statusaluno'

describe('Função status aluno', () =>{
    it('Deve retornar aprovado para nota maior ou igual que 70 e a frequencia for superior a 75%', () => {
        expect(statusaluno(70,90)).toBe("Aprovado")
    });
    it('Deve retornar recuperação para nota maior ou igual que 70 e frequencia inferior a 75', () =>{
        expect(statusaluno(70,60)).toBe("Recuperação")
    });
    it('Deve retornar reprovado para nota inferior a 70', () => {
        expect(statusaluno(20,86)).toBe("Reprovado")
    })
})