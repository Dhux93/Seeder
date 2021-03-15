import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index.routes';
import {createConnection} from 'typeorm';
const app = express();
createConnection();
//MIDLLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/',indexRoutes);


app.listen(3000);
console.log('Server on Port',3000);

