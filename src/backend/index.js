// import { pool } from "./db.js";
import app from "./app.js";
import {PORT} from "./config.js"

app.listen(PORT)
console.log("funciona y no de errror porfa creeeme")
// async function main(){
//     try {
//         await pool.sync({})
//         app.listen(3000)
//         console.log("host activo en el puerto ", 3000)
//         console.log("el proyecto y la base de datos estan conectados");

//     } catch (error) {
//         console.log('no hay conecxion con la base de datos',error);
//     }
// }

// connection.connect((error) => {
//     if (error) {
//       console.error('Error de conexión: ' + error.stack);
//       return;
//     }
//     console.log('Conexión establecida con éxito',3000);

//   });

// try {
//   await connection.authenticate();
//   console.log('Connection has been established successfully.');
//   app.listen("host",3000)
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }


// main()
