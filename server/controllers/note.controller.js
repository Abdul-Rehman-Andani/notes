import mongoose from "mongoose";
import { Note } from "../models/note.model.js";

// endpoint for create
export const create = async (req, res) => {
  const { title, note, color } = req.body;
  try {
    if (req.file) {
      const newNote = new Note({
        userId: req.id,
        title,
        note,
        color,
        img: req.file.filename,
      });
      await newNote.save();
    } else {
      const newNote = new Note({ userId: req.id, title, note, color });
      await newNote.save();
    }
    return res.json({ success: true, message: "note created" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// endpoint for raed
export const read = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.id }).select("-userId");
    return res.json(notes);
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// endpoint for del
export const del = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findOneAndDelete({ _id: id });
    return res.json({ success: true, message: "deleted" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// endpoint for update
export const upadte = async (req, res) => {
  const { id } = req.params;
  const {title , note ,color} = req.body;
   try {
    await Note.findOneAndUpdate({ _id: id }, { title , note ,color }, { new: true });
    return res.json({ success: true, message: "updated" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// endpoint for single
export const show = async (req, res) => {
  const { id } = req.params;
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID");
    }
    

    const note = await Note.findOne({ _id: id }).select("-userId");
    return res.json(note);
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
