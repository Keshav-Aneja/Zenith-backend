import mongoose, { Schema } from "mongoose";

const sharedMemberSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      enum: ["VIEW", "EDIT"],
      default: "VIEW",
    },
  },
  { timestamps: true }
);

export const SharedMember = new mongoose.model(
  "SharedMember",
  sharedMemberSchema
);
