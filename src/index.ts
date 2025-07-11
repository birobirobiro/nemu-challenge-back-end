import express from "express";
import journeysRouter from "./routes/journeys";

const app = express();
const port = 3333;

app.use("/journeys", journeysRouter);

app.listen(port, () => {
  console.log("Server is running 🤘");
});
