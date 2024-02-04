import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Note = new mongoose.model("Note", noteSchema);
