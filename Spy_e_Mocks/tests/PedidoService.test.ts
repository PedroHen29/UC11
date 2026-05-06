import {PedidoService} from '../src/services/PedidoService'

describe('PedidoService', () =>{
    it('Deve finalizar pedido quando pagamento for aprovado', ()=>{
        const mockPagamentoService = {
            processarPagamento: jest.fn().mockReturnValues(true)
        }

        const pedidoService = new PedidoService(mockPagamentoService as any)
        const resultado = pedidoService.finalizarPedido(100)
        expect(resultado).toBe('Pedido finalizado com sucesso')

        expect(mockPagamentoService.processarPagamento).toHaveBeenCalledWith(100)
    })
})