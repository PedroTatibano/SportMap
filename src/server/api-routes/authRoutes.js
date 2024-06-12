const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (app, configDB) => {
  app.post("/criarUser", async (req, res) => {
    const { email, user, senha } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(senha, 10);
      const query = `INSERT INTO User (email, username, PasswordHash) VALUES (?, ?, ?)`;
      configDB.query(query, [email, user, hashedPassword], (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Erro ao criar usuário" });
        }
        res.json({
          message: "Usuário criado com sucesso",
          userId: result.insertId,
        });
      });
    } catch (error) {
      console.error("Erro interno do servidor:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  app.post("/emails", (req, res) => {
    const query = "SELECT email FROM User";
    configDB.query(query, (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Erro ao buscar emails" });
      } else {
        const emails = result.map((row) => row.email);
        res.json(emails);
      }
    });
  });

  app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    try {
      const query = "SELECT * FROM User WHERE email = ?";
      configDB.query(query, [email], async (error, results) => {
        if (error) {
          console.error("Erro interno do servidor durante o login:", error);
          return res
            .status(500)
            .json({ error: "Erro interno do servidor durante o login" });
        }
        if (results.length === 0) {
          return res.status(404).json({ error: "Usuário não encontrado" });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(senha, user.PasswordHash);
        if (!passwordMatch) {
          return res.status(401).json({ error: "Credenciais inválidas" });
        }

        const token = jwt.sign(
          { email: user.email, id: user.idUser },
          "secreto",
          {
            expiresIn: "1h",
          }
        );

        return res
          .status(200)
          .json({ message: "Login bem-sucedido", token, userId: user.idUser });
      });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro interno do servidor durante o login" });
    }
  });
};
