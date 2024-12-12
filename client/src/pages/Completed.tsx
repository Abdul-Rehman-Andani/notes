import React, { useEffect, useState } from "react";
import { Note as NoteType } from "../model/model";
import axios from "axios";

const Completed = () => {
  const [notes, setNote] = useState<NoteType[]>([]); // Initialize with an empty array
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/note/completed`, {
        withCredentials: true,
      });
      if (Array.isArray(res.data)) {
        setNote(res.data);
        setError(null);
      } else {
        setError("Unexpected API response format");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch notes");
    } finally {
      setIsLoading(false); // Ensure loading stops
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="notes  masonry xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 mt-10 gap-4">
      {notes.length > 0 ? (
        notes.map((n: NoteType, i: number) => (
          <div key={n._id} className="note border masonry-item rounded-md">
            {n?.img && <img src={n?.img} alt="img" />}
            <div className={`p-3`} style={{ backgroundColor: n?.color }}>
              <h3>{n.title}</h3>
              <p>{n.note}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No completed notes available</p>
      )}
    </div>
  );
};

export default Completed;
