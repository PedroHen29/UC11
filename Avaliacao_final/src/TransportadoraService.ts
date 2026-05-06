export class transportadoraService {
    constructor(){}

    enviar(peso:number, cep:string, frete:string):boolean{
        if(peso && cep && frete){
        console.log(`Enviando pacote: Peso ${peso}kg, CEP ${cep}, Frete R$${frete}`);
        return true
        }else if(!peso || !cep || !frete){
            throw new Error('Recusado')
        }
        return false;
    }
}