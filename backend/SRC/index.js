const express = require('express');
const cors = require('cors')
const routes = require('./routes')
const app = express();

app.use(cors())
app.use(express.json())

app.use(routes)


app.listen(3333);

/*
**Metodos http:
GET- Buscar/listar uma informação do backend
POST- Criar uma informação no backend
PUT- Alterar uma informação no backend
DELETE- Deletar uma informação no backend
*/

/* 
**tipos de parametro

*Query params- Parametros nomeados e enviados na rota após
o simbolo de interrogação (filtros, paginação)
*Route Params- Parametros utilizados para identificar recursos
*Request Body- Corpo da requisição utilizado para criar ou alterar recursos

*/

/*
SQL : MySQL,SQLite, PostgreSQL, Oracle, Microsoft SQL server
NoSQL: MongoDB, CouchDB, etc
*/

/*
Como instalar banco de dadoss

*Driver: SELECT * FROM users
*Query Builder: table('users').select('*').where()
*/