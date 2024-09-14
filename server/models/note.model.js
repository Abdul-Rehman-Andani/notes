import mongoose from "mongoose";
import {date} from "../utils/date.js";

const noteSchema = new mongoose.Schema({
    userId : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title : {type : String, required : true ,trim : true},
    note : {type : String, required : true ,trim : true},
    color : {type : String},
    img : {type : String},
    date : {type : String, default : date()}
});

export const Note = mongoose.model("Note", noteSchema);