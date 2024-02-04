import { Router } from "express";
import {
  addNewTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//secured routes
router.route("/").get(verifyJWT, getAllTodos);
router.route("/").post(verifyJWT, addNewTodo);
router.route("/update").post(verifyJWT, updateTodo);
export default router;
