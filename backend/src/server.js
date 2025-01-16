import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 5005;

//Middleware
app.use(cors());

app.use(express.json()); // Parse JSON

//ROUTES
app.use("/auth", authRoutes);

app.listen(BACKEND_PORT, () => {
  console.log(`Server has started on port: ${BACKEND_PORT}`);
});
