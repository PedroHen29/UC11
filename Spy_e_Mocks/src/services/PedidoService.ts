import strict from "assert/strict";
import { PagamentoService } from "./PagamentoService";

export class PedidoService{
    constructor(private pagamentoService: PagamentoService){
    }
        finalizarPedido(valor:number): String{
            if(valor <= 0){
                throw new Error ('valor do pedido deve ser maior que zero')
            }

            const pagamentoAprovado = this.pagamentoService.processarPagamento(valor)

            if(!pagamentoAprovado){
                throw new Error('Pagamento não aprovado')
            }
            return 'pedido finalizado com sucesso'
            
        }
    
}