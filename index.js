// Server configuration variables
require("dotenv").config();

// Import Libraries
const consola = require("consola");
const cors = require("cors");
const express = require("express");

// Create the express server
const app = express();

// Create Sequelize Models
const models = require("./models");

async function start() {
  // Use CORS middleware
  let corsOptions = {
    origin: "*",
  };
  app.use(cors(corsOptions));

  // Set Body Parser Middleware
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: false, limit: "10mb" }));

  // routes file integrated with app
  require("./routes/physicianRoutes")(app);
  require("./routes/appointmentRoutes.js")(app);
  require("./routes/patientRoutes")(app);

  // Verify the database connection
  models.sequelize
    .authenticate()
    .then(() => {
      consola.success("Database connection established.");
      // Start the server
      const port = process.env.PORT || 8080;
      app.listen(port, () => {
        consola.ready({
          message: `Server is running on port ${port}.`,
          badge: true,
        });
      });
    })
    .catch((err) => {
      consola.error("Unable to connect to the database", error);
    });
}

start();
