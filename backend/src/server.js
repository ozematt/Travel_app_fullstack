import express from "express";
import cors from "cors";
import { PORT } from "../config/env.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); // Parse JSON

//ROUTES
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
