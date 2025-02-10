import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { PORT } from "../config/env.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); // Parse JSON

//ROUTES
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
