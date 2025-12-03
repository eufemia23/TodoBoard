import express from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/TodosController.js";

const router = express.Router();

router.route("/").get(getTodos);
router.route("/:id").get(getTodo);
router.route("/").post(createTodo);
router.route("/:id").put(updateTodo);
router.route("/:id").delete(deleteTodo);

export default router;
