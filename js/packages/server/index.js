const express = require("express");
const cors = require("cors");
const fs = require('fs');
const app = express();
const mysql = require('mysql');

const port = process.env.PORT || 3030;
const baseUrl = '0.0.0.0';

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'solaminter'
});

const httpsOptions = {
  key: fs.readFileSync("./cert/key.pem"),
  cert: fs.readFileSync("./cert/cert.pem")
};

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/initDb", (req, res) => {
  var sql = "CREATE TABLE transaction (id INT AUTO_INCREMENT PRIMARY KEY, fee DOUBLE, transaction_at DATETIME";
  connection.query(sql, function (err, result) {
    if(err) throw err;
    console.log("Table created");
  });

  res.status(200).send('');
})

app.post("/api/saveTransaction", (req, res) => {

  res.status(200).send('');
})

app.post("/api/getStatistics", (req, res) => {
  res.status(200).send({result});
})

app.post("/api/setFee", (req, res) => {
    res.status(200).send({result});
})

app.post("/api/getFee", (req, res) => {
    res.status(200).send({result});
})


// https.createServer(httpsOptions, app).listen(port, baseUrl, () => {
app.listen(port, baseUrl, () => {
  console.log("server is listening on port 3030");
});
