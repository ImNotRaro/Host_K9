# Quick Start - Script Raw Host

## 1️⃣ Descompacte o ZIP

```bash
unzip script-raw-host.zip
cd script-raw-host
```

## 2️⃣ Instale as Dependências

```bash
npm install -g pnpm  # Se não tiver pnpm
pnpm install
```

## 3️⃣ Teste Localmente

```bash
pnpm run dev
```

Abra http://localhost:3000 no navegador

## 4️⃣ Crie um Repositório no GitHub

1. Vá para https://github.com/new
2. Nome: `script-raw-host`
3. Clique em "Create repository"

## 5️⃣ Faça Push do Código

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/script-raw-host.git
git push -u origin main
```

## 6️⃣ Configure GitHub Pages

1. Vá para Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)
5. Clique em Save

## 7️⃣ Aguarde o Deploy

- Vá para a aba Actions
- Espere o workflow "Deploy to GitHub Pages" terminar
- Seu site estará em: https://seu-usuario.github.io/script-raw-host/

## ✅ Pronto!

Seu site está live! Comece a criar scripts:

1. Clique em "Novo Script"
2. Escreva seu código Lua
3. Clique em "Salvar Script"
4. Copie a URL ou Loadstring

## Exemplo de Uso em Roblox

```lua
loadstring(game:HttpGet("https://seu-usuario.github.io/script-raw-host/raw.html?code=..."))()
```

## Dúvidas?

Veja os arquivos:
- `README.md` - Documentação completa
- `DEPLOY.md` - Guia detalhado de deploy
- `vite.config.ts` - Configuração do build

Sucesso! 🚀

