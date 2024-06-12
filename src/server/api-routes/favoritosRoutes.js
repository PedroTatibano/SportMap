module.exports = (app, configDB) => {
  app.get("/pegarFavoritos", (req, res) => {
    const { userId } = req.query;

    if (!userId) {
      return res
        .status(400)
        .json({ error: "userId ausente na query da requisição" });
    }

    const query = `SELECT * FROM Favorites WHERE user_id = ?`;
    configDB.query(query, [userId], (error, results) => {
      if (error) {
        console.error("Erro ao buscar favoritos:", error);
        return res.status(500).json({ error: "Erro ao buscar favoritos" });
      }
      res.json(results);
    });
  });

  app.post("/adicionarFavoritos", (req, res) => {
    const {
      itemId,
      userId,
      endereco,
      nome,
      esporte,
      latitude,
      longitude,
    } = req.body;

    if (
      !itemId ||
      !userId ||
      !endereco ||
      !nome ||
      !esporte ||
      !latitude ||
      !longitude
    ) {
      return res
        .status(400)
        .json({ error: "Dados incompletos no corpo da requisição" });
    }

    const query = `INSERT INTO Favorites (user_id, item_id, endereco, nome, esporte, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    configDB.query(
      query,
      [userId, itemId, endereco, nome, esporte, latitude, longitude],
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Erro ao adicionar favorito" });
        }
        res.json({
          message: "Favorito adicionado com sucesso",
          favoritoId: result.insertId,
        });
      }
    );
  });

  app.delete("/removerFavorito", (req, res) => {
    const { itemId, userId } = req.body;

    if (!itemId || !userId) {
      return res
        .status(400)
        .json({ error: "itemId ou userId ausente no corpo da requisição" });
    }

    const query = `DELETE FROM Favorites WHERE item_id = ? AND user_id = ?`;
    configDB.query(query, [itemId, userId], (error, result) => {
      if (error) {
        console.error("Erro ao remover favorito:", error);
        return res.status(500).json({ error: "Erro ao remover favorito" });
      }
      res.json({ message: "Favorito removido com sucesso" });
    });
  });
};
