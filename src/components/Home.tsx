import React, { useState } from "react";
import Container from "./Container";

const Home: React.FC = () => {
  const [notes, setNotes] = useState<
    { id: number; heading: string; text: string }[]
  >([]);
  const [newNoteHeading, setNewNoteHeading] = useState("Heading Goes Here");
  const [newNoteText, setNewNoteText] = useState("Make a note.");

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      heading: newNoteHeading,
      text: newNoteText,
    };
    setNotes([...notes, newNote]);
    setNewNoteHeading("Heading Goes Here");
    setNewNoteText("Make a note.");
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="sticky top-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 z-10"
        onClick={handleAddNote}
      >
        Add Note
      </button>
      <div className="flex flex-wrap justify-center mt-10">
        {notes.map((note) => (
          <div key={note.id} className="m-4">
            <Container heading={note.heading} text={note.text} />
            <div className="flex justify-center">
              <button className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
