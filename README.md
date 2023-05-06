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

-   **Qual o foco de ação do software** : Acessar o relatório de vendas, controle de estoque, gerir ganhos e despesas, gerenciar cota de representantes, emissão de boletos após o faturamento dos pedidos e mensagens automáticas.
-   **Os níveis de usuário do sistema**: O acesso ao sistema será restrito ao dono, ao gerente comercial, ao diretor financeiro e aos representantes da empresa. O dono terá acesso a todas as ações do software como administrador, o gerente comercial terá acesso ao relatório de vendas, ao controle de estoque e ao controle de ganhos e despesa, o diretor fincanceiro terá acesso ao relatório e histórico de vendas, ao gerenciamento de ganhos e despesas e as emissões de boletos, e os representantes terão acesso ao estoque e aos pedidos efetuados no sistema.
-   **O que poderá ser feito no software**: O software será utilizado para: acessar relatório e histórico de vendas, controle de estoque, gerir ganhos e despesas, gerenciar cota de representantes, emissão de boletos após o faturamento dos pedidos, mensagens automáticas após algumas ações( faturamento, emissões de boletos, vencimento de boletos ).

# Regras de negócio
- **RN01 - Requisito do Cliente**: Apenas pessoas jurídicas podem efetuar pedidos.
- **RN02 – Inserir Produtos no Pedido**: Para inserir um produto na pedido, é necessário que o produto esteja cadastrado no sistema e que a quantia comprada seja acima de zero.
- **RN03 - Valor Minimo do Pedido**: Só serão efetuados pedidos acima de R$1000,00.
- **RN04 - Cadastro do Pedido**: Para o pedido ser cadastrado no sistema, ele deve ser realizado por um representante da empresa.
- **RN05 - Controle do Estoque**: O produto é descontado do estoque apenas no dia do carregamento.
- **RN06 - Envio do Pedido**: O pedido só é enviado após o faturamento do pedido.
- **RN07 - Relatório de Vendas**: Só terão acesso ao relatório de vendas os administradores (dono, gerente comercial e diretor financeiro).
- **RN08 - Cota para Representantes**: A cota para novos representantes é de 50 peças por mês.
- **RN09 - Cota para Representantes**: Para representantes antigos a cota é de 15% a mais do que o vendido no mesmo mês do ano anterior.

# Requisitos funcionais

**Entradas:**
- **Registro de usuário**: O usuário deve ser cadastrado pela sua função, para ter acesso a determinadas telas.
- **Registro de Produto**: No cadastro do produto deverá ser informado o código do produto, sua cor, material, tamanho e valor.
  
**Processos:**
- **Autenticação de usuário**: Dados necessários para autenticação: login, senha e função
- **Registro de pedido**: O pedido deve ser cadastrados identificando o nome da empresa, produtos pedidos, valor do pedido e vendedor que efetuou o pedido.
  
**Saidas:**
- Relatório de vendas
- “Log de usuários autenticados
  
<!-- 
- **R.F. 01 - Autenticação de usuário:** tem como propósito autenticar o acesso ao sistema, verificando se o usuário pode acessá-lo e, caso possa, o direcionando
para a página principal de seu perfil de acesso. 
  - **Dados necessários:** login, senha, nível de permissão. 
  - **Usuários:** todos os níveis de usuário.-->

# 6. Requisitos não funcionais

1. **Segurança**: O sistema deve ser protegido contra acesso não
autorizado.
2. **Atuação**: O sistema deve ser capaz de lidar com o número necessário
de usuários sem qualquer degradação no desempenho.
3. **Escalabilidade**: O sistema deve ser capaz de aumentar ou diminuir
conforme necessário.
4. **Disponibilidade**: O sistema deve estar disponível quando necessário.
5. **Manutenção**: O sistema deve ser fácil de manter e atualizar.
6. **Portabilidade**: O sistema deve ser capaz de rodar em diferentes
plataformas com alterações mínimas.
7. **Confiabilidade**: O sistema deve ser confiável e atender aos requisitos
do usuário.
8. **Usabilidade**: O sistema deve ser fácil de usar e entender.
9. **Compatibilidade**: O sistema deve ser compatível com outros sistemas.
10. **Conformidade**: O sistema deve cumprir todas as leis e regulamentos
aplicáveis.

<!-- 
1. **Atributos de qualidade:** Estas são as características do sistema que determinam sua qualidade geral. Exemplos de atributos de qualidade incluem segurança, desempenho e usabilidade.
2. **Restrições:** Estas são as limitações impostas ao sistema.
Exemplos de restrições incluem tempo, recursos e ambiente. 

**Sistema de Padaria**:
- R.N.F. 01 - Navegador homologado: O sistema deverá ser homologado somente para o navegador Google Chrome.
- R.N.F. 02 - Processador: É recomendado para o sistema  no mínimo um processador Intel i3, similar ou superior a geração 7100 ou AMD Ryzen 3 da geração similar ou superior ao 3100, para que o servidor funcione em sua melhor performance.
- R.N.F. 03 - Memória RAM: é recomendável que o sistema possua no mínimo 2GB de Ram para melhor performance.
- R.N.F. 04 - Arquitetura: A arquitetura que será utilizada para criação do sistema será Rest.
- R.N.F. 05 - Conexão com banco de dados: Para conexão com o banco de dados, o sistema utilizará a ferramenta de MySQL Connector.
- R.N.F. 06- Banco de dados: O sistema será implementado com o banco de dados MySQL.
- R.N.F. 07 - Implementação: O sistema deverá ser desenvolvido com linguagem Java, Javascript,  HTML5, CSS3 e JQuery.
- R.N.F. 08 - Segurança: Ficará a critério do responsável do estabelecimento a segurança dos acessos ao sistema, tendo consciência das pessoas que possua permissão para acesso.
- R.N.F. 09 - Ambiente de Desenvolvimento Integrado (IDE): Para criação do sistema, será utilizado  Eclipse.
- R.N.F. 10 - Disponibilidade: O sistema irá atender 99% do tempo de uso, somente ocorreria problemas de cadastro, remoção, inserção ou alteração em casos de falta de rede ou energia.
- R.N.F. 11 - Legais: O sistema deve atender às exigências da LGPD (Leis Gerais da Proteção de Dados).

**Sistema de Ordem de Serviço:**
- R.N.F. 01 - Navegadores homologados: o sistema deverá ser homologado para os navegadores Google Chrome e Mozilla Firefox. 
- R.N.F. 02 - Tecnologia Front-end: Para a exibição em front-end, o software utilizará o CSS3 e o HTML5, além das bibliotecas de jQuery e Javascript.
- R.N.F. 03- Tecnologia Back-end: O software será desenvolvido pela linguagem de programação Java.
- R.N.F. 04- Interoperabilidade: O banco de dados será o Mysql, com a linguagem SQL de banco, sendo todo produzido através do mysql Workbench .
- R.N.F. 05- Forma de uso do software: O sistema por fazer parte de um ambiente interno, provavelmente será utilizado de acordo com as horas de trabalho da empresa, mas estará ativo 24 horas por dia em 7 dias por semana.
- R.N.F. 06- Desempenho: Para a utilização correta e com uma qualidade e eficiência melhor, é recomendado que se use o SO mais atualizado, com recursos de hardware equivalentes a um processador intel i3 5°Gen ou semelhante, e 8GB de memória RAM, assim como os navegadores homologados.
- R.N.F. 07- Autenticação: Para realizar o acesso ao sistema é necessário ter um usuário de autenticação criado pelo administrador, além da possibilidade de solicitar um envio de redefinição de senha.
- R.N.F. 08- Web Server: O servidor web utilizado será o Apache Tomcat, nas versões mais atualizadas.
R.N.F. 08- Níveis de segurança: O software terá diferentes tipos de acesso para cada tipo de login, tendo as permissões ideais a função de cada um.-->