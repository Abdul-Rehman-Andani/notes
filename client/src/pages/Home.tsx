import React, { useEffect, useState } from "react";
import { NoteInput, Note } from "../components/component";
import { useNavigate } from "react-router-dom";
import { Note as NoteType } from "../model/model";
import axios from "axios";

interface Data {
  title: string;
  note: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Data>({ title: "", note: "" });
  const [color, setColor] = useState<string>("white");
  const [img, setImg] = useState<File | null>(null); // Initialize with null
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const handleData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("note", data.note);
    formData.append("color", color);
    if (img) {
      formData.append("img", img);
    }

    try {
      const res = await axios.post(`http://localhost:9000/note`, formData, {
        withCredentials: true,
      });
      if (res.data.message === "note created") {
        setData({ title: "", note: "" });
        setImg(null);
        setColor("white");
        setIsFetching(true);
      }
      console.log(res);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const getNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/note`, {
        withCredentials: true,
      });
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const updateNote = async (id: string) => {
    alert(id);
  };

  const delNote = async (id: string) => {
    const res = await axios.delete(`http://localhost:9000/note/${id}`);
    if (res.data.message == "deleted") {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    if (isFetching) {
      getNotes();
      setIsFetching(false);
    }
  }, [isFetching]);

  return (
    <>
      <div className="grid place-items-center">
        <div className="note">
          <NoteInput
            handleData={handleData}
            handleSubmit={handleSubmit}
            setColor={setColor}
            setImg={setImg}
            value={data}
          />
        </div>
      </div>
      <div className="notes grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 mt-10 gap-4">
        {notes.map((note: NoteType, i: number) => (
          <Note note={note} key={i} delNote={delNote} updateNote={updateNote} /> // Ensure Note component expects `note` prop and `id` is unique
        ))}
      </div>
    </>
  );
};

export default Home;
