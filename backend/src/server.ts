import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './Routes';
import ErrorHandler from './errors/handles'

const app = express();

app.use(cors())
app.use(express.json()); //Indica que iremos trabalhar no formato json
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(ErrorHandler)

//Rota: Conjunto inteiro;
//Recurso: Users;

//Métodos HTTP = GET, POST, PUT, DELETE
//Parametros = Query, Route, Body

//GET => Buscar informação
//POST => Cria informação nova
//PUT => Edita uma informação 
//DELETE => Deleta uma informação

//Query params = http:localhost:8080/users?search=diego
//Route params = http://localhost:8080/users/1(id do usuario) (Identificar um Recurso, usados nos metodos put e delete)
//Body = 



app.listen(8080)

 