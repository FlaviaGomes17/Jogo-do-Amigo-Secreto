# 🎁 Amigo Secreto

Um pequeno jogo de **Amigo Secreto** feito com **HTML, CSS e JavaScript
puro**.\
O usuário pode adicionar amigos a uma lista e sortear um participante de
forma aleatória.

------------------------------------------------------------------------

## 📦 Instalação

1.  Clone este repositório ou faça o download do código:

    ``` bash
    git clone https://github.com/seu-usuario/amigo-secreto.git
    ```

    *(ou apenas baixe o `.zip` e extraia em uma pasta)*

2.  Abra a pasta do projeto no seu editor de código favorito (VS Code,
    Sublime, etc.).

3.  Certifique-se de que a estrutura está assim:

        amigo-secreto/
        ├── index.html
        ├── style.css
        ├── app.js
        ├── assets/
        │   ├── amigo-secreto.png
        │   └── play_circle_outline.png
        └── favicon.ico   (opcional)

------------------------------------------------------------------------

## ⚙️ Dependências

Este projeto **não possui dependências externas** além de um navegador
moderno.\
Você só precisa do: - Google Chrome, Firefox, Edge ou Safari (última
versão). - (Opcional) **Live Server** no VS Code para rodar com
recarregamento automático.

------------------------------------------------------------------------

## ▶️ Como executar

1.  Abra o arquivo `index.html` diretamente no navegador\
    ou\
2.  Se estiver usando o VS Code:
    -   Instale a extensão **Live Server**.
    -   Clique com o botão direito em `index.html` → **Open with Live
        Server**.


------------------------------------------------------------------------

## ⚠️ Possíveis Problemas e Soluções

### 1. ❌ `Failed to load resource: the server responded with a status of 404 (Not Found) favicon.ico`

-   Isso significa que o navegador não encontrou o ícone do site.\
    ✅ Solução: adicione um arquivo `favicon.ico` na raiz do projeto ou
    defina um caminho válido no `<head>`:

``` html
<link rel="icon" href="assets/amigo-secreto.png" type="image/png">
```

------------------------------------------------------------------------

### 2. ❌ Nomes em branco estão sendo adicionados

-   Isso acontece se você clicar em **Adicionar** sem digitar nada.\
    ✅ Solução: o código já possui uma verificação
    (`if(nome === "") { alert(...) }`).\
    Digite um nome válido antes de adicionar.

------------------------------------------------------------------------

### 3. ❌ Sorteio não funciona

-   Isso acontece se não houver nenhum nome na lista.\
    ✅ Solução: adicione pelo menos 1 amigo antes de clicar em
    **Sortear**.

------------------------------------------------------------------------

### 4. ❌ CSS não carrega

-   Verifique se o arquivo `style.css` está no mesmo diretório que
    `index.html`.\
-   No `<head>`, o link deve estar assim:

``` html
<link rel="stylesheet" href="style.css">
```

------------------------------------------------------------------------

## 📖 Melhorias futuras

-   Adicionar botão de **remover amigos** da lista.\
-   Evitar sorteios repetidos até todos serem escolhidos.\
-   Salvar os amigos no **LocalStorage** para manter a lista após
    recarregar a página.

------------------------------------------------------------------------

## 👨‍💻 Autor

Flavia Souza
