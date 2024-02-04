import mongoose, { Schema, mongo } from "mongoose";

const projectSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    deadline: {
      type: Date,
    },
    sections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    subAuthors: [
      {
        type: Schema.Types.ObjectId,
        ref: "SharedMember",
      },
    ],
  },
  { timestamps: true }
);

export const Project = new mongoose.model("Project", projectSchema);
