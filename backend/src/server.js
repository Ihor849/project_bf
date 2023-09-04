require("colors")
const mongoose = require("mongoose");
const connectDb = require("../../config/connectDb")

const path = require('path');
const configPath = path.join(__dirname, '..','..','config','.env');
require('dotenv').config({ path: configPath });

const express = require('express');
// const app = express();
const app = require("./app");
mongoose.set("strictQuery", true);

const { DB_HOST, PORT = 5000 } = process.env;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use("/auth",require("./routes/usersRouter"))


// connectDb()

// app.listen(process.env.PORT, () => {
//   console.log('Server is running on port '.green.bold.italic + process.env.PORT);
// });

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });