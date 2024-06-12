module.exports = (app, configDB) => {
  app.post("/addHistorico", (req, res) => {
      const { userId, itemId, endereco, nome, esporte, latitude, longitude } = req.body;

      const query = `INSERT INTO History (user_id, item_id, endereco, nome, esporte, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      configDB.query(query, [userId, itemId, endereco, nome, esporte, latitude, longitude], (error, result) => {
          if (error) {
              console.error("Erro ao adicionar ao histórico:", error);
              return res.status(500).json({ error: "Erro ao adicionar ao histórico" });
          }
          res.json({ message: "Histórico adicionado com sucesso" });
      });
  });

  app.get("/historico", (req, res) => {
      const { userId } = req.query;

      const query = `SELECT * FROM History WHERE user_id = ?`;
      configDB.query(query, [userId], (error, results) => {
          if (error) {
              console.error("Erro ao buscar histórico:", error);
              return res.status(500).json({ error: "Erro ao buscar histórico" });
          }
          res.json(results);
      });
  });
};
