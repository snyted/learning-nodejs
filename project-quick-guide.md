# Guia rápido de comandos, ferramentas e fluxo de backend moderno

Este arquivo reúne os comandos mais úteis para trabalhar com Node.js, TypeScript, Prisma, Docker e Git em projetos modernos de backend.

---

## Gerenciamento de pacotes

### npm (base)

- `npm init -y` → cria o arquivo `package.json`
- `npm install` → instala as dependências do projeto
- `npm install <pkg>` → instala uma dependência de produção
- `npm install -D <pkg>` → instala uma dependência de desenvolvimento
- `npm run <script>` → executa um script definido no `package.json`
- `npm outdated` → verifica pacotes desatualizados
- `npm update` → atualiza as dependências instaladas

### pnpm (alternativa mais rápida)

- `pnpm install`
- `pnpm add <pkg>`
- `pnpm add -D <pkg>`
- `pnpm run <script>`

### yarn

- `yarn install`
- `yarn add <pkg>`
- `yarn add -D <pkg>`
- `yarn <script>`

---

## TypeScript

- `npx tsc --init` → cria o arquivo `tsconfig.json`
- `npx tsc` → compila TypeScript para JavaScript
- `npx tsc --noEmit` → faz apenas a checagem de tipos
- `npx tsx src/index.ts` → executa TypeScript diretamente
- `npx tsx watch src/index.ts` → reinicia automaticamente ao salvar

---

## Scripts padrão no package.json

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "lint": "eslint .",
    "test": "vitest",
    "test:run": "vitest run"
  }
}
```

---

## Testes com Vitest

- `npx vitest` → executa em modo watch
- `npx vitest run` → executa uma vez
- `npx vitest --coverage` → gera relatório de cobertura

---

## Qualidade de código

### ESLint

- `npm init @eslint/config`
- `npx eslint .`

### Prettier

- `npx prettier . --write`

---

## Prisma (ORM)

### Setup

- `npx prisma init`

### Migrações

- `npx prisma migrate dev` → cria e aplica migrations
- `npx prisma migrate reset` → reseta o banco de dados
- `npx prisma db push` → sincroniza o schema sem criar migration

### Utilitários

- `npx prisma generate` → gera os tipos do Prisma Client
- `npx prisma studio` → abre a interface visual do banco
- `npx prisma format` → formata o schema

---

## Node.js Runtime

- `node src/server.js` → executa um arquivo JavaScript
- `node --watch src/server.js` → modo watch no Node 18+
- `process.env.VAR` → acesso a variáveis de ambiente

---

## Variáveis de ambiente

- `.env` → arquivo principal com valores locais
- `.env.example` → exemplo para compartilhar com a equipe

Exemplo de uso:

```ts
import 'dotenv/config'

const port = process.env.PORT
```

---

## Docker para backend moderno

### Build e execução

- `docker build -t my-app .`
- `docker run -p 3000:3000 my-app`

### Comandos úteis

- `docker ps` → lista containers em execução
- `docker stop <id>` → para um container
- `docker logs <id>` → visualiza logs

---

## Estrutura de projeto padrão

```text
src/
├── controllers/
├── services/
├── repositories/
├── routes/
├── middlewares/
├── utils/
├── config/
└── server.ts
```

---

## Fluxo de desenvolvimento backend

1. Criar uma feature
   - criar branch
   - `git checkout -b feature/auth-login`
2. Desenvolver
   - implementar controller, service e repository
   - testar localmente
3. Commitar
   - `git add .`
   - `git commit -m "feat: login authentication"`
4. Enviar para o repositório
   - `git push origin feature/auth-login`
5. Abrir Pull Request
   - revisar o código
   - fazer merge

---

## Git essencial

### Básico

- `git init`
- `git clone <url>`
- `git status`
- `git add .`
- `git commit -m "msg"`
- `git push`
- `git pull`

### Branches

- `git branch`
- `git checkout -b feature/x`
- `git checkout main`
- `git merge feature/x`
- `git branch -d feature/x`

### Histórico

- `git log --oneline`
- `git diff`

### Correções

- `git stash`
- `git stash pop`
- `git reset --soft HEAD~1`
- `git reset --hard HEAD~1`
