## Fluxo de trabalho para criação de API

### Criando o Projeto
Vamos criar uma pasta chamada "backend" e dentro desse diretório (pelo terminal),
digitamos o comando "yarn init" (para configuração padrão é só dar enter nas perguntas) ... 
Isso vai criar nosso package.json que contem nossas dependencias.

### Gerenciando dependências 
Se você quiser usar outro pacote, primeiro você precisa adicioná-lo como uma dependência. Para isso você deve executar: yarn add [pacote]. Isto adicionará automaticamente o [pacote] às suas dependências no seu package.json. Ele também irá atualizar seu yarn.lock para refletir a alteração.

Agora que já entendemos o conceita adicionaremos essa lista de dependencias:

yarn add express  
Ele é responsável por gerenciar as rotas, requisições e respostas ao servidor
yarn add -D nodemon
Instala a dependiencia em ambiente de desenvolvimento. Alem disso é ele que automatiza o servidor (explicado mais a baixo).
yarn add mongoose
Para utilizar apenas js para se comunicar com o banco de dados
yarn add axios
para acessar api externas (no nosso caso acessar as informações na api do github)

### Estrutura do projeto

Vamos estruturar nosso projeto criando a pasta "src" e dentro dela colocar todos os códigos e pastas do nosso projeto. Para isso costumo deixar o backend com a seguinte estrutura simplificada:

-/backend
--/package.json
--/src
---/controllers
---/models
---/server.js
---/routes.js


Outra configuração importante é automatizar a execução do servidor sem precisar reinicialo manualmente
depois que alteramos o código, e para isso segue a seguinte confiuração. no package.json vamos inserir o código
"scripts": {
  "dev": "nodemon scr/server.js"
}

### Codigos
para tentar não ficar extenso o tutorial vou postando os codigos e fazer alguns comentários. Primeiro vamos configurar o server.js e routes.js

// server.js code
// routes.js code

Agora em models, criamos o arquivo Dev.js :
// Dev.js code

e em controllers, criamos os arquivos DevController.js
// DevController.js code

podemos fazer alguns testes no insominia para algumas rotas

// imagem resultado

ainda nos controllers vamos implementar a like entre devs
//LikeController.js