export function statusaluno(nota:number, frequencia:number): String {
    if(nota>= 70 && frequencia>=75){
       return "Aprovado"
    }else if(nota>= 70 && frequencia<75){
        return "Recuperação"
    }else{
        return "Reprovado"
    };
}