import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import TodosRoutes from "./routes/TodosRoutes.js";
import UserRoutes from "./routes/UserRoutes.js"
import { connectDb } from "./config/dbConnection.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());
app.use("/api/todos", TodosRoutes);
app.use("/api/users", UserRoutes)

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
});
