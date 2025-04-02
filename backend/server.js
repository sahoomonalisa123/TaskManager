require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

//Middleware to handel CORS
app.use(
    cors({
         origin: process.env.CLIENT_URL || "*",
         method: ["GET","POST","PUT","DELETE"],
         allowedHeaders: ["Content-Type", "Authorization"],
    })
);

//Connect Database
connectDB();

// Middleware
app.use(express.json());


//Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", authRoutes);
// app.use("/api/tasks", authRoutes);
// app.use("/api/reports", authRoutes);



//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
