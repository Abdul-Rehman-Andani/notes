import { Note } from "../models/note.model.js";

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

export const read = async (req, res) => {
  try {
    const notes = await Note.find({userId : req.id}).select("-userId");
    return res.json(notes);
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


export const del = async (req, res) => {
    const {id} = req.params;
    try {
        await Note.findOneAndDelete({_id : id});
        return res.json({success : true, message : "deleted"});
    } catch (error) {
        return res.json({ success: false, message: error.message });

    }
}