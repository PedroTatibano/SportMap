const express = require("express");
const mysql2 = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const configDB = mysql2.createConnection({
  host: "HOST",
  port: "PORT",
  user: "USER",
  password: "PASSWORD",
  database: "DATABASE",
});

configDB.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Conexão bem sucedida!");
});

app.use(express.json());
app.use(cors());

const authRoutes = require("./api-routes/authRoutes");
authRoutes(app, configDB);

const coordRoutes = require("./api-routes/coordRoutes");
coordRoutes(app, configDB);

const favoriteRoutes = require("./api-routes/favoritosRoutes");
favoriteRoutes(app, configDB);

const historyRoutes = require("./api-routes/historicoRoutes");
historyRoutes(app, configDB);

app.listen(port, () => {
  console.log("Servidor rodando na porta", port);
});
