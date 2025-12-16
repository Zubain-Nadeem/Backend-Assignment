const express = require("express");
const app = express();
const PORT = 3000;
const authRouter = require("./router/authRouter");

app.use(express.json());

app.use("/", authRouter);

app.listen(PORT, () =>
  console.log(`Server is running successfully on port ${PORT}`)
);
