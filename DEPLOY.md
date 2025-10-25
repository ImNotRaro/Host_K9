# Guia de Deploy no GitHub Pages

## Passo 1: Preparar o Repositório

1. Crie um novo repositório no GitHub chamado `script-raw-host`

2. Clone este projeto e configure como repositório Git:
```bash
cd script-raw-host
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/script-raw-host.git
git push -u origin main
```

## Passo 2: Configurar GitHub Pages

1. Vá para https://github.com/seu-usuario/script-raw-host/settings/pages

2. Em "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**

3. Clique em **Save**

## Passo 3: Deploy Automático

Quando você fizer push para a branch `main`, o GitHub Actions automaticamente:
1. Instala as dependências
2. Faz o build do projeto
3. Deploy para a branch `gh-pages`

Seu site estará disponível em: `https://seu-usuario.github.io/script-raw-host/`

## Passo 4: Verificar o Deploy

1. Vá para a aba **Actions** do seu repositório
2. Procure pelo workflow "Deploy to GitHub Pages"
3. Quando terminar com ✅, seu site está live!

## Troubleshooting

### Workflow não está rodando
- Certifique-se que o arquivo `.github/workflows/deploy.yml` está no repositório
- Faça um novo push para triggerar o workflow

### Página em branco
- Verifique se o `base` em `vite.config.ts` está correto
- Para repositório `script-raw-host`, deve ser `/script-raw-host/`

### Erro de build
- Certifique-se que tem `pnpm` instalado
- Execute `pnpm install` localmente e teste com `pnpm run build`

## Atualizar o Site

Para fazer mudanças no site:

1. Edite os arquivos em `client/src/`
2. Teste localmente com `pnpm run dev`
3. Faça commit e push:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Actions automaticamente fará deploy das mudanças!

## URLs dos Scripts

Após fazer deploy, suas URLs raw terão o formato:

```
https://seu-usuario.github.io/script-raw-host/raw.html?code=BASE64_ENCODED_CODE
```

Exemplo de loadstring:
```lua
loadstring(game:HttpGet("https://seu-usuario.github.io/script-raw-host/raw.html?code=LS0gU2NyaXB0IEV4YW1wbGUK"))()
```

## Customizações

### Mudar o nome do repositório
Se quiser usar um nome diferente, atualize:
1. O `base` em `vite.config.ts` para `/seu-novo-nome/`
2. Renomeie o repositório no GitHub

### Usar domínio customizado
1. Vá para Settings → Pages
2. Em "Custom domain", adicione seu domínio
3. Configure o DNS do seu domínio conforme instruções do GitHub

