import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    userId : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title : {type : String, required : true ,trim : true},
    note : {type : String, required : true ,trim : true},
    color : {type : String},
    img : {type : String}
});

export const Note = mongoose.model("Note", noteSchema);