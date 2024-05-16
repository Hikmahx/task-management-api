import express from "express";
import { body } from "express-validator";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller";
import { verifyToken, verifyTokenAndUser } from "../middlewares/authMiddleware";

const router = express.Router();

// GET ALL TASKS
router.get("/", verifyToken, getTasks);

// CREATE NEW TASK
router.post(
  "/",
  body("title", "title is required").not().isEmpty(),
  body("status", "Invalid status")
    .optional()
    .isIn(["todo", "in-progress", "done"]),
  verifyToken,
  createTask
);

// UPDATE TASK
router.put(
  "/:id",
  body("title", "title is required").not().isEmpty(),
  body("status", "Invalid status")
    .optional()
    .isIn(["todo", "in-progress", "done"]),
  verifyToken,
  updateTask
);

// DELETE TASK
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
