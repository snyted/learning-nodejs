# Gerenciamento de Pacotes (Universal: npm / pnpm / yarn)

Antes do TypeScript ou de qualquer framework rodar, você gerencia o projeto com estes comandos (o exemplo abaixo usa `npm`, mas a lógica é idêntica para os outros):

- `npm init -y`: Cria o arquivo `package.json` inicial aceitando todas as perguntas padrão.
- `npm install`: Baixa todas as dependências listadas no `package.json` de um projeto clonado.

- `npm install <nome>`: Instala uma biblioteca para o ambiente de produção.

- `npm install -D <nome>`: Instala uma biblioteca apenas para o ambiente de desenvolvimento.

- `npm run <nome-do-script>`: Executa scripts customizados que você mesmo define dentro do `package.json`.

- `npm outdated`: Verifica se as dependências do seu projeto estão desatualizadas.

Gerenciamento de Pacotes (Node.js)

- `npm init -y`: Inicia um projeto Node.js criando o arquivo `package.json`.
- `npm install`: Instala todas as dependências listadas no `package.json`.
- `npm install <nome>`: Instala uma biblioteca para o ambiente de produção.
- `npm install -D <nome>`: Instala uma biblioteca apenas para desenvolvimento.
- `npm run <script>`: Executa um comando customizado configurado no `package.json`.

TypeScript e executores

- `npx tsc --init`: Cria o arquivo de configuração `tsconfig.json`.
- `npx tsc`: Transpila o código TypeScript para JavaScript (dist).
- `npx tsc --noEmit`: Checa erros de tipagem sem gerar arquivos JS.
- `npx tsx <arquivo.ts>`: Executa um arquivo TypeScript instantaneamente.
- `npx tsx watch <arquivo.ts>`: Executa e reinicia a cada alteração salva.

Banco de Dados e ORM (Prisma)

- `npx prisma init`: Inicializa a estrutura e o arquivo de schema do Prisma.
- `npx prisma migrate dev`: Cria as tabelas e gera o histórico de migrações.
- `npx prisma generate`: Atualiza as tipagens automáticas do TS com base no schema.
- `npx prisma studio`: Abre uma interface web para visualizar e editar os dados.

Testes Automatizados (Vitest)

- `npx vitest`: Roda os testes em modo observação (watch).
- `npx vitest run`: Executa todos os testes uma vez.
- `npx vitest --coverage`: Gera relatório de cobertura de testes.

Qualidade e padronização

- `npm init @eslint/config`: Configura o ESLint para o projeto.
- `npx prettier . --write`: Formata o estilo de todos os arquivos.
