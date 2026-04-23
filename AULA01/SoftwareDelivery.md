## Software Delivery

# Requisitos Funcionais
- Métodos de pagamento;
- Gestão de pedidos;
- Localização do cliente;
- Localização do pedido;
- Localização do restaurante;
- Informações do pedido;
- Fornecer diversos tipos de restaurantes;
- Opção para cancelar o pedido;
- Enviar notificações sobre o estado do pedido;
- Exibir as avaliações e comentarios sobre o restaurante/comida;
- Permitir que usuário faça as suas proprias avaliações;
- Busca e filtros (por tipo de comida, preço, avaliação, distância);



# Requisitos não Funcionais
- Interface intuitiva;
- O sistema deve suportar vários usuários conectados ao mesmo tempo;
- Garantir a segurança dos dados do usuário;
- O sistema deve ser acessivel para diversas plataformas e redes de internet;
- O sistema deve garantir a segurança das compras feitas pelo usuário;
- Oferecer suporte aos usuários
- Possuir tempo de resposta rápido;

# Teste do Cadastro de Usuário
- Verifique se o usuário consegue se cadastrar com dados válidos;
- Validar campos obrigatórios (nome, e-mail, senha, etc.);
- Testar cadastro com e-mail já existente;
- Verificar envio de confirmação por e-mail ou SMS;
- Testar login com dados corretos e incorretos;
- Verificar recuperação de senha;
- Garantir proteção contra dados inválidos;


# Teste de Movimentação de Entrega
- Verifique a atualização da localização do entregador em tempo real;
- Testar alteração de status do pedido (preparando -> em entrega -> entregue);
- Validar tempo estimado de entrega;
- Simular atraso e verificar notificação ao usuário;
- Testar cancelamento durante a entrega;
- Verificar precisão do mapa/localização;
- Testar comunicação entre cliente e entregador;