# Projeto de Certificadora de Competência 1

### Equipe
| Integrantes                       | RA      |
|-----------------------------------|---------|
| Miguel Ferreira Mazetto           | 2266504 |
| André Luiz da Silva Junior        | 1383833 |
| Breno Rodrigues Lobo de Araujo    | 2312999 |
| Jose Antonio Menossi              | 2312670 |
| Kelson Felipe Budin de Almeida    | 2312697 |


### Descrição do projeto

No projeto foram propostas 10 questoes de fisica de nivel médio, contendo questões dissertativas e de múltipla escolha, as questões contém 3 níveis de dificuldade: *Facíl, Média e Dificil*. Para a realização e leitura delas, foi construido um ambiente onde o usuário pode responde-las. As 10 questões foram geradas a partir do [ChatGPT](https://chat.openai.com/auth/login), posteriormente foi pesquisado um [livro de fisica do ensino médio](https://drive.google.com/file/d/1fMNtfeitybaRnTNaOSFvCUtKzdfZKvCm/view?usp=sharing), assim descartando a idéia de utilizar questões do ChatGPT.

### Bibliotécas
Essa aplicação utiliza as técnologias:
 * [svelte](https://svelte.dev/) (Uma linguagem para web que aprimora o html);
 * [neltralino](https://neutralino.js.org/) (Gera um executável apenas utilizando js, html e css);
 * [git](https://github.com/) (Serve como controle de versão);
 * [node.js](https://nodejs.org/en/about) (Para a prototipação em tempo real e compilação do código);
 * [skeleton.dev](https://www.skeleton.dev/) (Para componentes svelte preprontos);
 * [tailwind](https://tailwindcss.com/) (Para a estilização uniforme e moderna).

### Repositório do projeto
- Código-Fonte: [Projeto Git](https://github.com/miguelmazetto/ProjetoCertificadora1)
- Primeira Entrega: [Video 1](https://drive.google.com/file/d/1gZYFuPbIPOie8LKHYm8HFqja9AVBTRhE/view)

### Instalação e Execução

* Baixe os artefatos [aqui](https://github.com/miguelmazetto/ProjetoCertificadora1/releases/download/v0.1/ProjetoCertComp1.zip)
* Descompacte o arquivo zip em algum lugar
* Tente o execútavel dentro da pasta window-mode, o executável sendo aquele correspondente ao sistema operacional que você estiver rodando (ele tentará usar um navegador já instalado para mostrar o frontend)
  * Se não funcionar o window-mode, tente o chrome-mode, ele usará especificamente o Google Chrome, que se você não tiver instalado tente o próximo método
  * Se não funcionar o chrome-mode, tente o browser-mode, ele abrirá o link correspondente ao servidor e mostrará o front em algum navegador
  * Se nada funcionar, entre em contato com os desenvolvedores

### Como ler o código fonte
A forma como o svelte funciona é que cada subpasta da pasta [src/routes](https://github.com/miguelmazetto/ProjetoCertificadora1/tree/master/src/routes) é um caminho web navegável, [src/routes/+page.svelte](https://github.com/miguelmazetto/ProjetoCertificadora1/blob/master/src/routes/%2Bpage.svelte) se trata da pagina principal, a qual é listada as questões, enquanto o arquivo [src/routes/questao/[nquestao]/+page.svelte](https://github.com/miguelmazetto/ProjetoCertificadora1/blob/master/src/routes/questao/%5Bnquestao%5D/%2Bpage.svelte) define o conteúdo da página de questão, do caminho [/questao/1](), [/questao/2](), etc...

O arquivo [src/lib/jsonwatcher.js](https://github.com/miguelmazetto/ProjetoCertificadora1/blob/master/src/lib/jsonwatcher.js) cuida do banco de dados, enquanto desenvolvendo será utilizado localstorage, e enquanto executável será utilizado um arquivo json.

O arquivo [src/lib/default_questions.js](https://github.com/miguelmazetto/ProjetoCertificadora1/blob/master/src/lib/default_questions.js) define o estado inicial do banco de dados, e guarda em hardcoded as respostas para cada questão.

O arquivo [src/lib/questoesdb.js](https://github.com/miguelmazetto/ProjetoCertificadora1/blob/master/src/lib/questoesdb.js) instancia o jsonwatcher para criar um banco para as questões, utilizando como estado inicial a array do default_questions.js sem as respostas.

O arquivo [neutralino/neutralino.config.json](https://github.com/miguelmazetto/ProjetoCertificadora1/blob/master/neutralino/neutralino.config.json) define as configurações do neutralino, como por exemplo o mode que será compilado (window, chrome ou browser), tamanho inicial da janela, etc...

### Como desenvolver
Para desenvolver o nosso projeto, você vai:
- Instalar Node: https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi
- Dar `git clone https://github.com/miguelmazetto/ProjetoCertificadora1`
- Abrir a pasta com o Visual Studio Code
- Ir na aba `Terminal` na parte debaixo, e digitar `npm install`
- Apertar F5 para iniciar o servidor
 - O site abrirá em http://localhost:5173/
- Instalar a extensão "Svelte for VS Code"
  - Outra recomendada é "Tailwind CSS IntelliSense", para ajudar na estilização
- Os arquivos a editar estão nas pastas `src/routes` e `src/lib`