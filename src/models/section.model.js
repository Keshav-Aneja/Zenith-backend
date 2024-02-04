import mongoose, { Schema } from "mongoose";

const sectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo",
      },
    ],
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "ONGOING"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Section = new mongoose.model("Section", sectionSchema);
