# Gerenciador de Eventos


| ID   | Requisito | Descrição                             | Entrada                          | Resultado Esperado              |
|:----:|:---------:|:-------------------------------------:|:--------------------------------:|:------------------------------: |
| **CT01** | `RF01` | Cadastrar usuário com dados válidos            | Nome, email válido, senha válida, data de nascimento | Usuário cadastrado com sucesso |
| **CT02** | `RF01` | Cadastrar usuário com email duplicado          | Email já existente                                           | Sistema deve impedir cadastro   |
| **CT03** | `RF02` | Login com senha incorreta                      | Email válido + senha errada                                  | Sistema deve negar acesso       | 
| **CT04** | `RF02` | Login com senha correta                        | Email válido + senha correta                                 | Sistema deve permitir o acesso  |
| **CT05** | `RF03` | Cadastrar evento com dados válidos             | Nome do evento, descrição, dados do evento, número máximo de participantes | Evento cadastrado com sucesso |
| **CT06** | `RF03` | Cadastrar evento com nome duplicado            | Nome do evento já existente                                  | Sistema deve impedir o cadastro | 
| **CT07** | `RF04` | Listar eventos                                 | Nome
| **CT08** | `RF04` | Listar eventos cadastrados                     | Solicitação de listagem                                      | Sistema exibe todos os eventos cadastrados |
| **CT09** | `RF04` | Listar eventos sem eventos cadastrados         | Solicitação de listagem                                      | Sistema exibe lista vazia                  |
| **CT10** | `RF05` | Inscrição em evento com sucesso                | Usuário autenticado + evento disponível                      | Inscrição realizada com sucesso            |
| **CT11** | `RF05` | Inscrição duplicada no mesmo evento            | Usuário já inscrito no evento                                | Sistema deve impedir inscrição             |
| **CT12** | `RF05` | Inscrição em evento lotado                     | Evento com capacidade máxima atingida                        | Sistema deve impedir inscrição             |
| **CT13** | `RF05` | Inscrição em evento já realizado               | Evento com data passada                                      | Sistema deve impedir inscrição             |
| **CT14** | `RF05` | Inscrição sem estar autenticado                | Usuário não logado                                           | Sistema deve exigir login                  |
| **CT15** | `RF06` | Cancelar inscrição com sucesso                 | Usuário inscrito no evento                                   | Inscrição cancelada e vaga liberada        |
| **CT16** | `RF06` | Cancelar inscrição sem estar inscrito          | Usuário não inscrito no evento                               | Sistema deve impedir cancelamento          |
| **CT17** | `RNF01`| Validação de campos obrigatórios               | Campos obrigatórios vazios                                   | Sistema deve exibir mensagem de erro       |
| **CT18** | `RNF02`| Senha inválida (menos de 8 caracteres)         | Senha com menos de 8 caracteres                              | Sistema deve rejeitar senha                |
| **CT19** | `RNF02`| Senha sem número                               | Senha sem número                                             | Sistema deve rejeitar senha                |
| **CT20** | `RNF02`| Senha sem letra                                | Senha sem letra                                              | Sistema deve rejeitar senha                |
| **CT21** | `RNF03`| Tempo de resposta da listagem                  | Solicitação de listagem                                      | Resposta em até 2 segundos                 |
| **CT22** | `RNF04`| Compatibilidade com Chrome                     | Acesso via navegador Chrome                                  | Sistema funciona corretamente              |
| **CT23** | `RNF04`| Compatibilidade com Firefox                    | Acesso via navegador Firefox                                 | Sistema funciona corretamente              |
| **CT24** | `RNF04`| Compatibilidade com Edge                       | Acesso via navegador Edge                                    | Sistema funciona corretamente              |
| **CT25** | `RNF05`| Cadastro de usuário com email duplicado        | Email já cadastrado                                          | Sistema deve impedir cadastro              |