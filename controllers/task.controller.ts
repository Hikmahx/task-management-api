import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Task, { ITask } from "../models/Task.model";
import dotenv from "dotenv";
import User, { IUser } from "../models/User.model";

interface AuthRequest extends Request {
  user?: IUser;
}

// @route    POST api/tasks
// @desc     Create new task
// @access   Private
export const createTask = async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, description, dueDate, status } = req.body;

    const user = await User.findById(req.user?.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newTask = new Task({
      user: req.user?.id,
      title,
      description,
      dueDate,
      status,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @route    GET api/tasks
// @desc     Get all tasks
// @access   Private
export const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.user?.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const tasks = await Task.find({user});
    res.status(200).json(tasks);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route    Update api/tasks/:id
// @desc     Update task
// @access   Private
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, status } = req.body;

    const updateTask = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, status },
      {
        new: true,
      }
    );

    if (!updateTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated", updateTask });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// @route    Delete api/tasks/:id
// @desc     Delete task
// @access   Private
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task is successfully deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
