import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
console.log("JWT_SECRET from .env:", process.env.JWT_SECRET); // Check if it's loaded

const app = express();

const PORT = process.env.PORT || 5001; // Default to port 5000 if not specified in .env

const __dirname = path.resolve();

// Increase the payload limit
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));


  app.get("*", (req, res)  => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
};

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
  connectDB();
});
