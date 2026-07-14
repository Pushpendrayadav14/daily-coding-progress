import React, { useState } from "react";
import { Form } from "./components/Form";
import { Notes } from "./components/Notes";

const App = () => {
  const [notesData, setNotesData] = useState([]);

  const addNote = (title, description) => {
    const copyNotes = [...notesData];
    copyNotes.push({
      id: Date.now(),
      title: title,
      description: description,
    });

    setNotesData(copyNotes);
  };

  const deleteNotes = (idx) => {
    const copyNoteData = [...notesData];
    copyNoteData.splice(idx, 1);
    setNotesData(copyNoteData);
  };
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-11xl mx-auto flex flex-col lg:flex-row">
        <Form addNote={addNote} />
        <Notes notesData={notesData} deleteNotes={deleteNotes} />
      </div>
    </div>
  );
};
export default App;
