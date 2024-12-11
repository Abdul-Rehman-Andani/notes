import React from "react";
import { Note as NoteType } from "../model/model";
import { GoTrash } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import SubmitButton from "./SubmitButton";
import axios from "axios";

// Define the props interface
interface Props {
  note: NoteType;
  delNote?: (id: string) => void;
  getNote?: (id: string) => void;
  setIsFetching?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Note: React.FC<Props> = ({
  note,
  delNote,
  getNote,
  setIsFetching,
}: Props) => {
  // Update status function
  async function updateStatus(id: string) {
    const res = await axios.patch(
      `http://localhost:9000/note/update-status/${id}`
    );
    if (res.data.message == "status updated") {
      if (setIsFetching) {
        setIsFetching(true);
      }
    }
  }

  return (
    <div
      className={`note border masonry-item rounded-md ${
        note.color == "black" && "text-white"
      }`}
      style={{ backgroundColor: note.color }}
    >
      {note.img && (
        <img src={`http://localhost:9000/images/${note.img}`} alt="img" />
      )}
      <div className="p-3">
        <div className="node-header flex justify-between align-middle">
          <h2 className="font-bold text-lg">{note.title}</h2>
          <span className="text-[12px]">{note?.date}</span>
        </div>
        <p>{note.note}</p>
        <p className="flex justify-end gap-2">
          {/* Conditional checks before invoking optional props */}
          <span onClick={() => getNote && getNote(note._id)}>
            <MdOutlineModeEdit />
          </span>
          <span onClick={() => delNote && delNote(note._id)}>
            <GoTrash />
          </span>
        </p>
        <span onClick={() => updateStatus(note._id)}>
          <SubmitButton value="Mark as done" />
        </span>
      </div>
    </div>
  );
};

export default Note;
