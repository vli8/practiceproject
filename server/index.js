const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./db");
const seed = require("./db/seed");
const pkg = require("../package.json");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res, next) => {
  res.send("Error 404, no path found.").sendStatus(404);
});

app.listen(3000, async () => {
  console.log("Ready to listen");
  //   try {
  //     await db.sync();
  //   } catch (error) {
  //     console.log("Errrrrrrror", error);
  //   }
});
