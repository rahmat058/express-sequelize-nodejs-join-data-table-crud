const models = require("../models");

module.exports = function (router) {
  // get all physicians
  router.get("/physicians", async (req, res) => {
    try {
      const result = await models.Physician.findAll({
        include: [models.Patient],
      });

      console.log("result", result)

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  // get single physicians by id
  router.get("/physicians/:id", async (req, res) => {
    try {
      const result = await models.Physician.findAll({
        where: { id: req.params.id },
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  // create physicians
  router.post("/physicians", async (req, res) => {
    try {
      const result = await models.Physician.create({
        name: req.body.name,
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  // update physicians by id
  router.put("/physicians/:id", async (req, res) => {
    try {
      const result = await models.Physician.update(
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

  // delete physicians by id
  router.delete("/physicians/:id", async (req, res) => {
    try {
      const result = await models.Physician.destroy({
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
