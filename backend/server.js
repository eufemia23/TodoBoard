import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import TodosRoutes from "./routes/TodosRoutes.js";
import UserRoutes from "./routes/UserRoutes.js"
import { connectDb } from "./config/dbConnection.js";
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 5000;






if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
app.use("/api/todos", TodosRoutes);
app.use("/api/users", UserRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/files{/*path}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
});


