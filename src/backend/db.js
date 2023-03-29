// import mysql from 'mysql'
// import { Sequelize } from 'sequelize';

// export const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'tusena'
// });


// export const connection = new Sequelize('tusena', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// connection.connect((error) => {
//   if (error) {
//     console.error('Error de conexión: ' + error.stack);
//     return;
//   }
//   console.log('Conexión establecida con éxito');
// });


import { createPool } from "mysql2/promise" 
import {DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE} from './config.js'

//crear y exportar la constante pool con 
// los parametros de la DB
export const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
})