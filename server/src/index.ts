import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";

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
