import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  user: any;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
}

const taskSchema = new Schema<ITask>({
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  dueDate: Date,
  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
});

const Task = model<ITask>("Task", taskSchema);

export default Task;
