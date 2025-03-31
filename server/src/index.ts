import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.routes";
import { connectDB } from "./config/db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App listening on PORT:", PORT);
    });
  })
  .catch((error: any) => {
    console.log("App stopped", { error });
  });
