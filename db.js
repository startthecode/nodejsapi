import mysql from "mysql";
import "dotenv/config";
let connection = mysql.createConnection({
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
});

console.log(process.env.DB_HOST);

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

export let dataBase = connection;
