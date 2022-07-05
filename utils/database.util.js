const { Sequelize, DataTypes} = require('sequelize') 
           
const db = new Sequelize({
    dialect:'postgres', 
    host:'localhost', 
    username:'postgres',
    password:'pass1234', 
    port:5432,
    database:'checkinout',
    logging: false  /* Activar si necesito ver la consulta y debuggear */
})

module.exports = { db  , DataTypes} // Exporto al conexion de la base de dato al modelo 