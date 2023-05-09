<!-- # H1
1. Lista
# H2
**Negrito**
- Tópicos -->

# Projeto Integrador - Larissa e Vinicius

Desenvolvimento do Projeto Integrador na Disciplina de Desenvolvimento Mobile do Curso de Técnico em Desenvolvimento de Sistemas para a Internet Integrado ao Ensino Médio do IFC - Campus Araquari.

Alunos: [Larissa Cristina Bileski](github.com/larissabileski) e [Vinicius Henrique da Silva](github.com/viniihds). 

Professores: [Eduardo da Silva](github.com/eduardo-da-silva).

Links do projeto:

-   [Documentação](github.com/larissabileski/pi-larissaevinicius.git)
-   [Backend]()
-   [Frontend]()
-   [Mobile](github.com/larissabileski/mobile-telas.git)

# Situação Problema

-   **Introdução**: O sistema será desenvolvido para a empresa Fiberblu. Presente há 28 anos no mercado, é o maior comercio de tanques de fibra na região Sul do país. O dono Odair, o gerente comercial Ednilson, a diretora financeira, e os representantes da empresa, são os principais funcionários e os que terão acesso ao sistema.
-   **Situação-problema**: Atualmente a empresa funciona da seguinte forma: o representante anota o pedido em uma planilha, em seguida, o pedido é enviado por email e depois cadastrado no sistema. O sistema realiza o relatório do pedido e avisa a equipe de estoque. No dia do carregamento, o sistema fatura o pedido, desconta do estoque e é emitido o boleto. Atualmente, no sistema utilizado não há como fazer o pedido direto no sistema, além disso, o sistema também não emite o boleto diretamente para o cliente, nem avisa se o boleto está vencendo ou se foi pago.
-   **Conclusão**: Notamos a falta de alguns recursos no atual software utilizado pela empresa, como por exemplo: O sistema não envia nem notifica o cliente em relação ao boleto, seja para avisar sobre o prazo do pagamento ou eventual vencimento. Outra dificuldade que percebemos foi que, o sistema não tem uma opção para fazer pedidos. O cliente faz o pedido por uma planilha, envia por e-mail, e os administradores do sistema precisam registrar o pedido.

# Descrição da proposta

**Alguns pontos importantes a se destacar são:**

-   **Qual o foco de ação do software** : Acessar o relatório de vendas, cadastrar novas vendas, controle de estoque, gerir ganhos e despesas, gerenciar cota de representantes, emissão de boletos após o faturamento dos pedidos e mensagens automáticas.
-   **Os níveis de usuário do sistema**: O acesso ao sistema será restrito ao dono, ao gerente comercial, ao diretor financeiro e aos representantes da empresa. O dono terá acesso a todas as ações do software como administrador, o gerente comercial terá acesso ao relatório e histórico de vendas, ao cadastro de novas vendas, ao controle de estoque e ao controle de ganhos e despesa, o diretor fincanceiro terá acesso ao relatório e histórico de vendas, ao gerenciamento de ganhos e despesas e as emissões de boletos, e os representantes terão acesso ao estoque, ao cadastro de novas vendas e aos pedidos efetuados no sistema.
-   **O que poderá ser feito no software**: O software será utilizado para: acessar relatório e histórico de vendas, cadastro de novos pedidos, controle de estoque, gerir ganhos e despesas, gerenciar cota de representantes, emissão de boletos após o faturamento dos pedidos, mensagens automáticas após algumas ações( faturamento, emissões de boletos, vencimento de boletos ).

# Regras de negócio

- **RN01 - Requisito do Cliente**: Apenas pessoas jurídicas podem efetuar pedidos.
- **RN02 – Inserir Produtos no Pedido**: Para inserir um produto na pedido, é necessário que o produto esteja cadastrado no sistema e que a quantia comprada seja acima de zero.
- **RN03 - Valor Minimo do Pedido**: Só serão efetuados pedidos acima de R$1000,00.
- **RN04 - Cadastro do Pedido**: Para o pedido ser cadastrado no sistema, ele deve ser realizado por um representante da empresa ou pelo gerente comercial. 
- **RN06 - Controle do Estoque**: O produto é descontado do estoque apenas no dia do carregamento.
- **RN07 - Envio do Pedido**: O pedido só é enviado após o faturamento do pedido.
- **RN08 - Relatório de Vendas**: Só terão acesso ao relatório de vendas o dono, o gerente comercial e o diretor financeiro.
- **RN09 - Cota para Representantes**: A cota para novos representantes é de 50 peças por mês.
- **RN010 - Cota para Representantes**: Para representantes antigos a cota é de 15% a mais do que o vendido no mesmo mês do ano anterior.

# Requisitos funcionais

**Entradas:**
- **RF01 - Registro de Usuário**: O usuário deve ser cadastrado pela sua função, para ter acesso a determinadas telas.
  - **Dados necessários:** nome, email, telefone, login, senha e nível de permissão. 
  - **Usuários:** todos os níveis de usuário.
- **RF02 - Registro de Produto**: No cadastro do produto deverá ser informado o código do produto, sua cor, material, tamanho e valor.
  - **Dados necessários:** código do produto, cor, material, tamanho e valor.
  - **Usuários:** gerente comercial.
  
**Processos:**
- **RF03 - Autenticação de Usuário**: O usuário deve ter o acesso ao sistema autenticado, para verificação das telas disponiveis para acesso conforme sua função.
  - **Dados necessários:** login, senha e nível de permissão. 
  - **Usuários:** todos os níveis de usuário.
- **RF04 - Registro de Pedido**: O pedido deve ser cadastrado identificando o nome da empresa, produtos selecionados, valor do pedido e vendedor que efetuou o pedido.
  - **Dados necessários:** nome da empresa, produtos selecionados, valor do pedido e vendedor que efetuou o pedido.
  - **Usuários:** representantes da empresa.
- **RF05 - Produto em Estoque**: Para o pedido ser efetuado, a quantidade de produtos selecionados pelo cliente deve estar em estoque. 
  - **Dados necessários:** código do produto e quantidade do produto.
  - **Usuários:** gerente comercial e representantes da empresa.
  
**Saidas:**
- **RF06 - Relatório e histórico de vendas**: Após cada pedido efetuado, o sistema deve fazer um relatório da venda, e inclui-la no histórico de vendas.
  - **Dados necessários:** código do pedido, valor do pedido, horário que o pedido foi enviado para a entrega, cliente e vendedor que efetuou o pedido.
  - **Usuários:** gerente comercial.

# 6. Requisitos não funcionais

- **RNF01 - Segurança**: O software terá diferentes tipos de acesso para cada tipo de login, tendo as permissões ideais a função de cada um.
- **RNF02 - Atuação**: O sistema deve ser capaz de lidar com o número necessário de usuários sem qualquer degradação no desempenho.
- **RNF03 - Escalabilidade**: O sistema deve ser capaz de aumentar ou diminuir conforme necessário.
- **RNF04 - Disponibilidade**: O sistema deve estar disponível quando necessário.
- **RNF05 - Manutenção**: O sistema deve ser fácil de manter e atualizar.
- **RNF06 - Portabilidade**: O sistema deve ser capaz de rodar em diferentes plataformas com alterações mínimas.
- **RNF07 - Confiabilidade**: O sistema deve ser confiável e atender aos requisitos do usuário.
- **RNF08 - Usabilidade**: O sistema deve ser fácil de usar e entender.
- **RNF09 - Compatibilidade**: O sistema deve ser compatível com outros sistemas.
- **RNF10 - Conformidade**: O sistema deve cumprir todas as leis e regulamentos aplicáveis.
- **RNF11 - Navegadores homologados**: Navegadores homologados: o sistema deverá ser homologado para os navegadores Google Chrome e Mozilla Firefox. 
- **RNF012 - Tecnologia Front-end**: Para a exibição em front-end, o software utilizará o CSS3 e o HTML5, além das bibliotecas de Vue.js e React Native para mobile.
- **RNF13 - Tecnologia Back-end**: O software será desenvolvido pela linguagem de programação Python e biblioteca Django.
- **RNF14 - Forma de uso do software**: O sistema por fazer parte de um ambiente interno, provavelmente será utilizado de acordo com as horas de trabalho da empresa, mas estará ativo 24 horas por dia em 7 dias por semana.
- **RNF15 - Desempenho**: Para a utilização correta e com uma qualidade e eficiência melhor, é recomendado que se use o Sistema OperacionalRe mais atualizado.
- **RNF16 - Autenticação**: Para realizar o acesso ao sistema é necessário ter um usuário de autenticação criado pelo administrador, além da possibilidade de solicitar um envio de redefinição de senha.
- **RNF17 - Legais**: O sistema deve atender às exigências da LGPD (Leis Gerais da Proteção de Dados).