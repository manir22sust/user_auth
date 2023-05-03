import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";

// express app
const app = express();

dotenv.config();
// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db
connectDB();

const port = process.env.PORT || 8000;

//routes
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
