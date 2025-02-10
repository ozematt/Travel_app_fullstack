import { config } from "dotenv";

config({ path: ".env" });

export const { PORT, JWT_SECRET, DATABASE_URL } = process.env;
