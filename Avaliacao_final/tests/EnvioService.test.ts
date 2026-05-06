import { EnvioService } from '../src/EnvioService'
import { transportadoraService } from '../src/TransportadoraService'; 

describe('EnvioService', () => {

  // Caso 1 – Envio válido
  it('deve processar envio com sucesso quando dados forem válidos', () => {
    const mockTransportadora = {
      enviar: jest.fn().mockReturnValue(true)
    };

    const envioService = new EnvioService(mockTransportadora as any);

    const resultado = envioService.processarEnvio(10, '12345-000');

    expect(resultado).toBe('Envio processado com sucesso');
    expect(mockTransportadora.enviar).toHaveBeenCalledWith(10, '12345-000', 20);
  });


  // Caso 2 – CEP vazio
  it('deve lançar erro quando CEP for vazio', () => {
    const mockTransportadora = {
      enviar: jest.fn()
    };

    const envioService = new EnvioService(mockTransportadora as any);

    expect(() => envioService.processarEnvio(10, '')).toThrow('CEP obrigatório');

    expect(mockTransportadora.enviar).not.toHaveBeenCalled();
  });


  // Caso 3 – Peso acima do limite
  it('deve lançar erro quando peso for maior que 50kg', () => {
    const mockTransportadora = {
      enviar: jest.fn()
    };

    const envioService = new EnvioService(mockTransportadora as any);

    expect(() => envioService.processarEnvio(60, '12345-000'))
      .toThrow('Peso excede o limite permitido');

    expect(mockTransportadora.enviar).not.toHaveBeenCalled();
  });


  // Caso 4 – Envio recusado
  it('deve lançar erro quando transportadora recusar envio', () => {
    const mockTransportadora = {
      enviar: jest.fn().mockReturnValue(false)
    };

    const envioService = new EnvioService(mockTransportadora as any);

    expect(() => envioService.processarEnvio(10, '12345-000'))
      .toThrow('Envio recusado pela transportadora');

    expect(mockTransportadora.enviar).toHaveBeenCalledWith(10, '12345-000', 20);
  });


  // Caso 5 – Spy 
  it('deve chamar o método enviar da transportadora usando spy', () => {
    const transportadora = new transportadoraService();

    const spy = jest.spyOn(transportadora, 'enviar');

    const envioService = new EnvioService(transportadora);

    const resultado = envioService.processarEnvio(15, '12345-000');

    expect(resultado).toBe('Envio processado com sucesso');
    expect(spy).toHaveBeenCalledWith(15, '12345-000', 40);
  });

});