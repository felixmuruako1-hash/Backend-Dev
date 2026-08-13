import express from "express";

const app = express(); // create an express application

app.use(express.json());

// Routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRoutes);

//example route: http://localhost:5000/api/v1/users/register

export default app;