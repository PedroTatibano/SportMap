module.exports = (app, configDB) => {
    app.get("/marks", (req, res) => {
      configDB.query("SELECT * FROM Coordenadas", (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result);
      });
    });
  
    app.post("/mandarCoords", (req, res) => {
      const { latitude, longitude, esportesPraticados, nome, userId } = req.body;
  
      try {
        const query = `
          INSERT INTO Coordenadas (Nome, Latitude, Longitude, EsportesPraticados, user_id)
          VALUES (?, ?, ?, ?, ?)
        `;
        configDB.query(
          query,
          [nome, latitude, longitude, esportesPraticados, userId],
          (error, result) => {
            if (error) {
              return res
                .status(500)
                .json({ error: "Erro interno do servidor ao inserir coordenadas" });
            }
            res.json({
              message: "Coordenadas inseridas com sucesso",
              coordId: result.insertId,
            });
          }
        );
      } catch (error) {
        res
          .status(500)
          .json({ error: "Erro interno do servidor ao inserir coordenadas" });
      }
    });
  };
  