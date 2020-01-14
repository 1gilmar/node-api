# node-api

criando o projeto 
- npm init -y

criando a dependencia, micro framewrork que ajuda a lidar com rotas e views
- npm install express

installando o nodemon para nao ter de ficar toda hora parando o server.js/servidor
- npm install -D nodemon

para rodar o script
- npm run dev
- http://localhost:3001/api/

instalando mondodb via docker
- docker pull mongo

rodando mongodb via docker; vou dar o --nome de mongodb, usando a porta -p padrao e usando a imagen(-d) mongo
- docker run --name mongodb -p 27017:27017 -d mongo

- docker ps "para mostrar a imagem rodando"
- Acesse o localhost:27017 para ver se esta rodando.
- Pode ser usado o "Rubo 3t" para visualizar os dados via banco de dados.

instalando a dependencia mongoose: Ele é um ORM de bando nao relacional
- npm install mongoose

Para nao ter de ficar escrevendo todos os model sera utilizado a biblioteca require-dir
- npm install require-dir

instalar o https://insomnia.rest/ para verificar os registro retorados em json.

instalar o modulo mongoose-paginate
- npm install mongoose-paginate

instalar o cors para poder acessar de outros enderecos
- npm install cors