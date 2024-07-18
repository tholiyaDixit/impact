// require("dotenv").config()

// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : process.env.DB_HOST,
//       port : 3306,
//       user : process.env.KNEX_USER,
//       password : '',
//       database : process.env.DATABASE,
//       charset: 'utf8',
//       timezone:"UTC"
//     },
//     pool: { min: 0, max: 7 }
//     // migrations: {
//     //   directory: './migrations'
//     // },
//   });

  // knex.raw("SELECT VERSION()").then(() => {
  //   console.log("connection to db successful");
  // })


module.exports = {
  client: 'mysql',
      connection: {
        host : "192.168.29.169",
        host : "localhost",
        port : 3306,
        user : "root",
        password : '',
        database : "impact",
        charset: 'utf8',
        timezone:"UTC"
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName:"knex_migrations"
      }
}