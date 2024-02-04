import mongoose, { Schema } from "mongoose";
const tagSchema = new Schema({
  label: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const subTodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "ONGOING"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tags: [tagSchema],
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "ONGOING"],
      default: "PENDING",
    },
    list: {
      type: String,
      trim: true,
      default: "Personal",
    },
    subtodo: [subTodoSchema],
    author: {
      type: String,
      required: true,
      trim: true,
    },
    projectTodo: {
      type: Boolean,
      default: false,
    },
    SubAuthors: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
export const Todo = new mongoose.model("Todo", todoSchema);
