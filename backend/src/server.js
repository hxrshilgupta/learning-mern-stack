import express from "express";
import cors from "cors"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
)
app.use(express.json()); // Middleware to parse JSON requests
app.use(rateLimiter); //custom middleware that we just created
//Middleware is a function that runs in the middle between the request and response

app.use("/api/notes", notesRoutes); // Routes

/**
 * Best Practice: Connect to the database before starting the server
 * This ensures that the server only starts if the database connection is successful
 * If the database connection fails, we can log the error and exit the process
 * This prevents the server from running in an inconsistent state where it cannot access the database.
 * This is especially important for applications that rely on database operations for their functionality.
 * It helps in maintaining the integrity and reliability of the application.
 * This is a common pattern in Node.js applications to ensure that the server is ready to handle
*/
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
