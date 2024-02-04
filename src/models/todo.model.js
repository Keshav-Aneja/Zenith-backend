import mongoose, { Schema } from "mongoose";
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
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
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
  },
  { timestamps: true }
);
export const Todo = new mongoose.model("Todo", todoSchema);
