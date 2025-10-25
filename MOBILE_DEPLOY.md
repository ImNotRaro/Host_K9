# 📱 Guia de Deploy no GitHub Pages - Versão Mobile

Siga este guia passo a passo direto do seu celular!

---

## ✅ Passo 1: Baixar e Descompactar o ZIP

### No Android:
1. Abra o navegador e vá para: https://github.com (ou use o app GitHub)
2. Baixe o arquivo `script-raw-host.zip` que você recebeu
3. Abra o app **Files** (ou **Gerenciador de Arquivos**)
4. Procure por `script-raw-host.zip` na pasta Downloads
5. Toque e segure no arquivo
6. Selecione **Extrair** ou **Descompactar**
7. Uma pasta `script-raw-host` será criada

### No iPhone:
1. Abra o app **Files**
2. Procure por `script-raw-host.zip` em Downloads
3. Toque no arquivo
4. Selecione **Descompactar**
5. Uma pasta `script-raw-host` será criada

---

## ✅ Passo 2: Criar Repositório no GitHub

### Pelo Celular:
1. Abra o navegador e vá para: **https://github.com**
2. Se não tem conta, clique em **Sign up** e crie uma
3. Se já tem, clique em **Sign in** e faça login
4. Depois de logado, clique no **+** (canto superior direito)
5. Selecione **New repository**
6. Preencha assim:
   - **Repository name**: `script-raw-host`
   - **Description**: `Script hosting service for Lua scripts`
   - **Public**: ✅ (marque como público)
   - **Initialize this repository with**: deixe em branco
7. Clique em **Create repository**

**Parabéns!** Seu repositório foi criado! 🎉

---

## ✅ Passo 3: Fazer Upload dos Arquivos

Aqui temos 2 opções para você:

### Opção A: Usar GitHub Web (Mais Fácil no Mobile)

1. Você está no repositório que acabou de criar
2. Clique no botão **Add file** (verde, canto superior direito)
3. Selecione **Upload files**
4. Clique em **choose your files**
5. Navegue até a pasta `script-raw-host` que descompactou
6. Selecione TODOS os arquivos e pastas:
   - `client/` (pasta)
   - `.github/` (pasta)
   - `package.json`
   - `vite.config.ts`
   - `tsconfig.json`
   - `README.md`
   - `DEPLOY.md`
   - `QUICK_START.md`
   - E todos os outros arquivos
7. Clique em **Commit changes**

### Opção B: Usar GitHub Desktop (Se Tiver Computador Disponível)

Se conseguir acessar um PC/Mac rapidinho:
1. Baixe GitHub Desktop: https://desktop.github.com
2. Instale e faça login
3. Clique em **File → Clone Repository**
4. Procure por `seu-usuario/script-raw-host`
5. Clique em **Clone**
6. Abra a pasta clonada no seu explorador de arquivos
7. Copie TODOS os arquivos da pasta `script-raw-host` descompactada
8. Cole na pasta clonada
9. Volta no GitHub Desktop
10. Clique em **Commit to main**
11. Clique em **Push origin**

---

## ✅ Passo 4: Configurar GitHub Pages

1. No GitHub, vá para seu repositório `script-raw-host`
2. Clique em **Settings** (engrenagem, canto superior direito)
3. No menu esquerdo, procure por **Pages**
4. Em "Build and deployment":
   - **Source**: Selecione **Deploy from a branch**
   - **Branch**: Selecione **gh-pages** (se não aparecer, deixe main por enquanto)
   - **Folder**: Selecione **/ (root)**
5. Clique em **Save**

---

## ✅ Passo 5: Aguardar o Deploy

1. Volte para a aba **Code** do seu repositório
2. Procure pela aba **Actions** (ao lado de Pull requests)
3. Você verá um workflow rodando chamado "Deploy to GitHub Pages"
4. Aguarde até ficar verde (✅)
5. Isso pode levar 2-5 minutos

---

## ✅ Pronto! 🎉

Seu site está live em:

```
https://seu-usuario.github.io/script-raw-host/
```

Substitua `seu-usuario` pelo seu username do GitHub!

---

## 🎮 Agora Use Seu Site!

1. Abra a URL do seu site no navegador
2. Clique em **"Novo Script"**
3. Escreva seu código Lua
4. Clique em **"Salvar Script"**
5. Clique em **"URL"** ou **"Loadstring"** para copiar
6. Compartilhe com seus amigos!

---

## ❓ Dúvidas Frequentes

### P: Fiz upload mas o site não aparece
**R**: Aguarde 5 minutos. GitHub Pages pode levar um tempo para processar.

### P: Aparece erro 404
**R**: Verifique se a URL está correta. Deve ser:
`https://seu-usuario.github.io/script-raw-host/`

### P: Quero fazer mudanças no site
**R**: Vá para o repositório, clique em um arquivo (ex: `client/src/pages/Home.tsx`), clique no lápis (✏️) para editar, faça as mudanças, e clique em **Commit changes**. O site atualiza automaticamente!

### P: Como compartilho um script?
**R**: Copie a URL que aparece quando você clica em "URL" ou "Loadstring" e compartilhe com qualquer pessoa. Eles conseguem acessar o script direto!

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas, me avise que ajudo! 😊

Bom deploy! 🚀

