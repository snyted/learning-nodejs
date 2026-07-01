
# Guia rápido de comandos, ferramentas e fluxo de backend moderno

---

## Gerenciamento de Pacotes

## npm (base)

- `npm init -y` → cria package.json
- `npm install` → instala dependências do projeto
- `npm install <pkg>` → instala dependência de produção
- `npm install -D <pkg>` → instala dependência de desenvolvimento
- `npm run <script>` → executa scripts do package.json
- `npm outdated` → verifica pacotes desatualizados
- `npm update` → atualiza dependências

---

## pnpm (alternativa mais rápida)

- `pnpm install`
- `pnpm add <pkg>`
- `pnpm add -D <pkg>`
- `pnpm run <script>`

---

## yarn

- `yarn install`
- `yarn add <pkg>`
- `yarn add -D <pkg>`
- `yarn <script>`

---

## ⚙️ TypeScript

- `npx tsc --init` → cria tsconfig.json
- `npx tsc` → compila TS → JS
- `npx tsc --noEmit` → apenas checagem de tipos
- `npx tsx src/index.ts` → executa TS direto
- `npx tsx watch src/index.ts` → hot reload

---

## 🏗 Scripts padrão (package.json)

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
