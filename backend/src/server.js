import express from "express";
import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 5005;

//Middleware
app.use(cors());

app.use(express.json()); // Parse JSON

//ROUTES

app.post("/api/auth/register", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Debugging..." });
});

app.get("/", (req, res) => {
  console.log("Hello");
  res.status(200).json({ message: "Debugging..." });
});

// app.use("/api/auth", authRoutes);

app.listen(BACKEND_PORT, () => {
  console.log(`Server has started on port: ${BACKEND_PORT}`);
});
