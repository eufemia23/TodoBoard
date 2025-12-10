import express from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/TodosController.js";
import {validateToken} from "../middleware/validateTokenHandler.js"

const router = express.Router();
router.use(validateToken)

router.route("/:userid").get(getTodos);
router.route("/:userid/:id").get(getTodo);
router.route("/:userid").post(createTodo);
router.route("/:userid/:id").put(updateTodo);
router.route("/:userid/:id").delete(deleteTodo);

export default router;
