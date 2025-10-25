# Script Raw Host

Um site full front-end para hospedar scripts Lua e acessá-los via loadstring, similar ao pastefy.app.

## Funcionalidades

- ✅ Criar e editar scripts Lua
- ✅ Armazenamento local (localStorage)
- ✅ URLs raw para cada script
- ✅ Copiar loadstring para clipboard
- ✅ Gerenciar múltiplos scripts
- ✅ Compartilhar scripts via link

## Instalação Local

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/script-raw-host.git
cd script-raw-host
```

2. Instale as dependências:
```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
```

4. Abra http://localhost:3000 no seu navegador

## Build para Produção

```bash
pnpm run build
```

Os arquivos compilados estarão em `dist/`

## Deploy no GitHub Pages

### Opção 1: Automático com GitHub Actions

1. Faça push do código para a branch `main`
2. O GitHub Actions automaticamente fará build e deploy
3. Seu site estará disponível em `https://seu-usuario.github.io/script-raw-host/`

### Opção 2: Manual

1. Execute o build:
```bash
GITHUB_PAGES=true pnpm run build
```

2. Faça push dos arquivos em `dist/` para a branch `gh-pages`:
```bash
git subtree push --prefix dist origin gh-pages
```

## Configuração do Repositório

Após fazer push para GitHub:

1. Vá para Settings → Pages
2. Em "Build and deployment", selecione:
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
3. Clique em Save

## Como Usar

1. Clique em **"Novo Script"**
2. Escreva seu código Lua
3. Clique em **"Salvar Script"**
4. Use **"URL"** para copiar a URL raw ou **"Loadstring"** para copiar o comando

## Exemplo de Uso

```lua
loadstring(game:HttpGet("https://seu-usuario.github.io/script-raw-host/raw.html?code=..."))()
```

## Estrutura do Projeto

```
script-raw-host/
├── client/
│   ├── src/
│   │   ├── pages/        # Páginas (Home, Editor, RawView)
│   │   ├── components/   # Componentes React
│   │   ├── App.tsx       # Roteador principal
│   │   └── index.css     # Estilos globais
│   ├── public/
│   │   └── raw.html      # Página para servir scripts raw
│   └── index.html        # HTML principal
├── vite.config.ts        # Configuração Vite
├── package.json          # Dependências
└── README.md             # Este arquivo
```

## Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Vite** - Build tool
- **Wouter** - Roteamento
- **Sonner** - Notificações

## Licença

MIT

## Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

