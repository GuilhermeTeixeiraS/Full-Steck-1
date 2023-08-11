# Full-Steck-1 testes Front com Back

INTRODUÇÃO AO APP

O app oferece uma interface para cadastro de um cliente em que este pode adicionar vários contatos e armazená-los, bem como imprimir sua lista de contatos em PDF. Os usuários devem se registrar para logar na aplicação. No dashboard, o usuário pode adicionar, editar e deletar os contatos, que são renderizados diretamente no dashboard. O back end traz a possibilidade de implementar privilégios de usuário admin, que não estão presentes nesta versão do app.

No back end, o app é escrito em Node.js com Express, TypeORM, PostgreSQL e Typescript

No front end, o app utiliza React.js com Typescript.

PARA INICIAR

BACK

Navegue até o diretório "back-end" no terminal.

Instale as dependências do Node.js usando o comando npm install.

Há um arquivo .env.example que demonstra como seu arquivo .env deve ser construído. Copie este arquivo para um novo arquivo chamado .env e preencha as variáveis de acordo com sua configuração local.

Rodar as migrações:

npm run typeorm migration:generate ./src/migrations/InitialMigration -- - d ./src/data-source.ts

npm run typeorm migration:run -- -d ./src/data-source

Inicie o servidor com npm run dev.

FRONT

Navegue até o diretório "front-end" no terminal.
Instale as dependências do Node.js usando o comando npm install.
Inicie o servidor front-end com npm run dev.
ROTAS:

-->LOGIN Fazer Login: POST /login

--> CLIENTS *Criar Client: POST /clients

*Atualizar Client: PATCH /client/id

*Listar todos os Clients: GET /clients

*Listar um Client específico: GET /clients/id

*Deletar Client: DELETE /clients/id

*Criar um PDF com a lista de todos os Clients: GET /clients/pdf

--> CONTACTS --------------------------------------------------

*Criar Contact: POST /contact

*Atualizar Contact: PATCH /contact/id

*Listar todos os Contacts: GET /contact

*Listar um Contact específico: GET /contact/id

*Deletar ClContactient: DELETE /contact/id

*Criar um PDF com a lista de todos os Contacts: GET /contact/pdf

ESTRUTURA DO APP NO BACK-END

O app segue a arquitetura controller-service. O Express não está presente nos arquivos service.

Os middlewares fazem validações que evitam erros, como verificar se o ID do usuário buscado existe.

---------------------------------------------------------------------------------------------------

React Hook-forms e Zod: validar os dados nos formulários
Toastify: é utilizado para retornar feedback ao usuário em relação às requisições.
React Router-DOM: é utilizado para navegação entre páginas.
Axios: para as requisições.
JWT-Decode: foi utilizado para manipular dados do token e validação.
Stitches: foi usado para estilização.
