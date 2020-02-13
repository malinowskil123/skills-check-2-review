require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const app = express();

app.use(express.json());

app.get("/api/transactions", ctrl.getTransaction);
app.post('/api/transactions', ctrl.addTransaction)

const port = SERVER_PORT || 4040;

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db);
  console.log("|database instance connected-----|");
  app.listen(port, () => console.log(`|----------Server running on ${port}|`));
});

