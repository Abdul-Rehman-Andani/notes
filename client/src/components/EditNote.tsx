import React from "react";
import { Model, Input, SubmitButton } from "./component";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { close } from "../features/modelSlice";
import { Note as NoteType } from "../model/model";

interface Props {
  note: NoteType;
  handleForm: (e: React.FormEvent<HTMLFormElement>, id: string) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const EditNote: React.FC<Props> = ({ note, handleInput, handleForm }: Props) => {
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleForm(e, note._id); // Call handleForm with the event and note ID
  };

  return (
    <Model>
      <span
        className="text-white text-3xl absolute right-10 top-10 cursor-pointer"
        onClick={() => dispatch(close())}
      >
        <RxCross2 />
      </span>

      <div className="md-container w-full mx-auto">
        <div className="w-1/4 mx-auto">
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              handleInput={handleInput}
              value={note.title}
            />
            <textarea
              name="note"
              value={note.note}
              placeholder="Note"
              onChange={handleInput}
              className="w-full bg-white rounded-md mt-3 p-2"
            ></textarea>
            <SubmitButton value="Save changes" />
          </form>
        </div>
      </div>
    </Model>
  );
};

export default EditNote;
