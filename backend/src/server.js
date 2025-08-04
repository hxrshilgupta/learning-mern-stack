import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON requests
app.use(express.json());

//Middleware is a function that runs in the middle between the request and response

app.use(rateLimiter);
//custom middleware that we just created

// Routes
app.use("/api/notes", notesRoutes);

// Start server function
const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();

    // Then start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
