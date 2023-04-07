const express = require("express");
const mongoose = require("mongoose");
const cors = require("./middlewares/cors");
const auth = require("./middlewares/auth");
const userController = require("./controllers/usersController");
const recipesController = require("./controllers/recipesController");

const connectionString = "mongodb://127.0.0.1:27017/cooking";
const port = 8080;

start();

async function start() {
  try {
    await mongoose.connect(
      connectionString,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      mongoose.set("strictQuery", true)
    );

    console.log("Database connected");

    mongoose.connection.on("error", (err) => {
      console.error("Database error");
      console.error(err);
    });
  } catch (err) {
    console.error("Database connection failed");
    process.exit(1);
  }

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(auth());

  app.use("/users", userController);
  app.use("/recipes", recipesController);

  app.listen(port, () => {
    console.log("App listening at http://localhost:8080");
  });
}
