import mongoose from "mongoose";
import { date } from "../utils/date.js";

const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true, trim: true },
  note: { type: String, required: true, trim: true },
  color: { type: String },
  img: { type: String },
  date: { type: String, default: date() },
  status: {
    type: String,
    enum: ["todo", "completed"],
    trim: true,
    default: "todo",
  },
});

export const Note = mongoose.model("Note", noteSchema);
