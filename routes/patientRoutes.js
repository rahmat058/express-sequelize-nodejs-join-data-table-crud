const models = require("../models");

module.exports = function(router) {
  router.get("/patients", async (req, res) => {
      try {
        const result = await models.Patient.findAll({
          include: [models.Physician],
        });
    
        if (result) {
          res.send(result);
        }
      } catch (error) {
        res.send(error);
      }
  });

  router.get("/patients/:id", async (req, res) => {
    try {
      const result = await models.Patient.findAll({
        where: { id: req.params.id },
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  router.post("/patients", async (req, res) => {
    try {
      const result = await models.Patient.create({
        name: req.body.name,
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  router.put("/patients/:id", async (req, res) => {
    try {
      const result = await models.Patient.update(
        { name: req.body.name },
        { where: { id: req.params.id } }
      );

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  router.delete("/patients/:id", async (req, res) => {
    try {
      const result = await models.Patient.destroy({
        where: { id: req.params.id },
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });
};