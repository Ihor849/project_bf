const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/users");
const sponsorsRouter = require("./routes/api/sponsors");
const newsRouter = require("./routes/api/news");
const petRouter = require("./routes/api/pets");
const noticeRouter = require("./routes/api/notices");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", authRouter);
app.use("/sponsors", sponsorsRouter);
app.use("/news", newsRouter);
app.use("/pets", petRouter);
app.use("/notices", noticeRouter);


app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });
  
  app.use((err, req, res, next) => {
    const { status = 500, message = "Server Error" } = err;
    res.status(status).json({ message });
  });
  
  module.exports = app;