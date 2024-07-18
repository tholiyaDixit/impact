import mysql, { createPool } from "mysql"

// class DbConnect {
//     constructor() {}
// }

// import dotenv from 'dotenv';

// dotenv.config();

// export const  dbConn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'test'
// });

// dbConn.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + dbConn.threadId);
// });


export const dbConn = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'impact',
  connectionLimit: 10
})


dbConn.getConnection(function (err: any, connection: any) {
  if (err) {
    // connection.release();
    console.log("error ---", err);
    throw err;
  }

  connection.on('error', function (err: any) {

    throw err;
    return;
  });
  console.log("db connect ---");
});