import React from "react";
import { Note as NoteType } from "../model/model";
import { GoTrash } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";

// Define the props interface
interface Props {
  note: NoteType;
  delNote: (id: string) => void;
  getNote: (id: string) => void;
}

const Note: React.FC<Props> = ({ note, delNote, getNote }: Props) => {
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
        <p className="flex justify-end  gap-2">
          <span onClick={() => getNote(note._id)}>
            <MdOutlineModeEdit />
          </span>
          <span onClick={() => delNote(note._id)}>
            <GoTrash />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Note;
