require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const connectDB = require("./utils/db");

const studentRouter = require("./routes/student-router");

app.use("/api/student", studentRouter);

PORT = 9000;

connectDB().then(
  app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
  })
);
