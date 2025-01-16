import express from "express";
import cors from "cors";

const app = express();
const BACKEND_PORT = process.env.PORT || 5005;
const FRONTEND_PORT = "http://localhost:5173";

//Middleware
app.use(
  cors({
    origin: FRONTEND_PORT,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); // Parse JSON

//ROUTES
app.get("/api/users", (req, res) => {
  res.json("Działa!");
});

app.listen(BACKEND_PORT, () => {
  console.log(`Server has started on port: ${BACKEND_PORT}`);
});
