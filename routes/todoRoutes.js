import express from "express";
import { addTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todoController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/todos', addTodo);
router.get('/todos', authMiddleware, getTodos);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;
