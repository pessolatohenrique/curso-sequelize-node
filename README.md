# Escola de inglês (Backend)

### Sobre

Projeto de Escola de inglês construído com base nos cursos: [ORM com NodeJS: API com Sequelize e MySQL](https://cursos.alura.com.br/course/orm-nodejs-api-sequelize-mysql) e [ORM com NodeJS: Avançando nas funcionalidades do Sequelize](https://cursos.alura.com.br/course/orm-nodejs-avancando-sequelize).

### Tecnologias

- Node.js
- Sequelize (ORM)

### Instalação do projeto

Realizar o clone do projeto

    git clone https://github.com/USER/curso-sequelize-node.git

Acesse a pasta do projeto e rode o comando para instalar as dependências npm:

    npm install

Criar arquivo .env e configurar as variáveis de ambiente, semelhantes ao arquivo ".env-example".

Execute as "migrations" disponíveis, por meio do comando:

    npx sequelize-cli db:migrate

Execute os "seeders" disponíveis, por meio do comando:

    npx sequelize-cli db:seed:all

E, por fim, rode o projeto:

```
  npm start
```

### Comandos importantes

Para utilização do sequelize em linha de comando (CLI), utilizar:

    npx sequelize-cli <comando>

Por exemplo:

    npx sequelize-cli --help

### Observações

Os endpoints criados podem ser importados por meio do arquivo "endpoints.json" em um Software como o Postman (ou semelhante).
