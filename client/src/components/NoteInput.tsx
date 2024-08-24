import React, { useState } from "react";
import { ColorPalette } from "../components/component";
import { IoImagesOutline, IoColorPaletteOutline } from "react-icons/io5";

interface Props {
  value: {
    title: string;
    note: string;
  };
  color: string;
  handleData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setColor: (c: string) => void;
  setImg: (i: File | null) => void; // Changed type to File or null
}

const NoteInput: React.FC<Props> = ({
  handleData,
  handleSubmit,
  setColor,
  color,
  setImg,
  value,
}: Props) => {
  const [isColor, setIsColor] = useState(false);

  return (
    <div className="note-input shadow-xl px-4 py-3 rounded-lg">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="w-full outline-none py-3 font-bold"
          name="title"
          value={value.title}
          onChange={handleData}
        />
        <textarea
          placeholder="Note"
          className="w-full outline-none"
          name="note"
          value={value.note}
          onChange={handleData}
        ></textarea>
        <div className="features flex text-xl gap-4 font-bold">
          <span onClick={() => setIsColor(!isColor)}>
            <IoColorPaletteOutline />
          </span>
          <span>
            <input
              type="file"
              name="img"
              id="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImg(e.target.files[0]);
                } else {
                  setImg(null); // Handle case when no file is selected
                }
              }}
            />
            <label htmlFor="file">
              <IoImagesOutline />
            </label>
          </span>
        </div>
        <input type="submit" value="Add note" className="mt-4" />
      </form>

      {isColor && <ColorPalette setColor={setColor} color={color} />}
    </div>
  );
};

export default NoteInput;
