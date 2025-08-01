import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api/notes", notesRoutes);

// Start server function
const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();

    // Then start the server
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();