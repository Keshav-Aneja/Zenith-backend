import mongoose, { Schema, mongo } from "mongoose";

const tagSchema = new Schema(
  {
    label: {
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

export const Tag = new mongoose.model("Tag", tagSchema);
