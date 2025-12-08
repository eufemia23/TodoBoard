import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;