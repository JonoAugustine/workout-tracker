require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const { dbConnect } = require("./db");

const main = async () => {
  // Await DB connection
  await dbConnect();

  const server = express();

  // Serve static files
  server.use("/", routes.views);
  // Add API routes
  server.use("/api/workouts", routes.workouts);

  server.listen(process.env.PORT, () => {
    console.log(`Serving at https://127.0.0.1:${process.env.PORT}`);
  });
};

main();
