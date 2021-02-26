const models = require("../models");

module.exports = function (router) {
  router.get("/appointments", async (req, res) => {
    try {
      const result = await models.Appointment.findAll({
        include: [models.Physician, models.Patient],
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  router.get("/appointments/:id", async (req, res) => {
    try {
      const result = await models.Appointment.findAll({
        where: { id: req.params.id },
        include: [models.Physician, models.Patient],
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  router.post("/appointments", async (req, res) => {
    try {
      const result = await models.Appointment.create({
        physicianId: req.body.physicianId,
        patientId: req.body.patientId,
      });

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  router.put("/appointments/:id", async (req, res) => {
    try {
      const result = await models.Appointment.update(
        { physicianId: req.body.physicianId, patientId: req.body.patientId },
        { where: { id: req.params.id } }
      );

      if (result) {
        res.send(result);
      }
    } catch (error) {
      res.send(error);
    }
  });

  router.delete("/appointments/:id", async (req, res) => {
    try {
      const result = await models.Appointment.destroy({
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
