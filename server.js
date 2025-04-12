import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import movieRoutes from "./routes/MovieRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
