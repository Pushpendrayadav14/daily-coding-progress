import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  //GET request ke liye function create karna hai aur uske liye useEffect ka use karna hai taki page load hone ke baad data fetch ho jaye
  //notes ko fetch karne ke liye function
  function fetchNotes() {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        setNotes(res.data.datas);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  //POST request ke liye form create karna hai aur uske liye state create karna hai
  //form ke liye state create karna hai
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [age, setAge] = useState("");

  //form submit karne ke baad kya hona chahiye uske liye function
  function handleSubmit(e) {
    e.preventDefault();
    const { name, title, age } = e.target.elements;

    // console.log(name.value, title.value, age.value);

    axios
      .post("http://localhost:3000/api/notes", {
        name: name.value,
        title: title.value,
        age: age.value,
      })
      .then(() => {
        fetchNotes();
        //form submission ke baad input empty ker deta hai
        setName("");
        setTitle("");
        setAge("");

        console.log("Data added successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE /API/NOTES
  //pop section for the deletion of the data
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  //delete function for the deletion of the data
  function handleDelete(dataId) {
    axios
      .delete(`http://localhost:3000/api/notes/${dataId}`)
      .then(() => {
        fetchNotes();
        setShowPopup(false);
        setSelectedId(null);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(`Deleting data with ID: ${dataId}`);
  }

  //PATCH /API/NOTES
  //pop section for the editing of data
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    title: "",
    age: "",
  });

  // Edit button function to open the edit popup and populate the form with existing data
  function openEditPopup(note) {
    setEditId(note._id);
    setEditFormData({
      name: note.name,
      title: note.title,
      age: note.age,
    });
    setShowEditPopup(true);
  }

  //edit function for the editing of the data
  function handleEdit(e) {
    e.preventDefault();

    axios
      .patch(`http://localhost:3000/api/notes/${editId}`, editFormData)
      .then((res) => {
        fetchNotes();
        console.log("UPDATED DATA:", res.data);
        setEditId(null);
        setShowEditPopup(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      {/* //FORM SECTION DIV */}
      <div className="bg-white p-5 flex justify-center flex-wrap ">
        <form
          onSubmit={handleSubmit}
          className="flex gap-5 bg-gray-300 p-5 rounded-xl shadow-lg"
        >
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="enter the name"
            className="text-xl font-bold border px-2 border-indigo-950 rounded text-indigo-950"
          />
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="enter the title or work"
            className="text-xl font-bold border px-2 border-indigo-950 rounded text-indigo-950"
          />
          <input
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="enter the age"
            className="text-xl font-bold border px-2 border-indigo-950 rounded text-indigo-950"
          />
          <button className="bg-indigo-950 text-white font-bold px-2 py-2 rounded">
            Add data
          </button>
        </form>
      </div>

      {/* //NOTE DISPLAY SECTION DIV */}

      <div className="min-h-screen bg-black flex p-5 gap-6 flex-wrap">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white text-black w-80 h-45 p-5 rounded-xl shadow-lg flex flex-col gap-2 flex-wrap"
          >
            <h1 className="text-xl font-bold">{note.name}</h1>
            <p className="text-gray-600 font-bold">{note.title}</p>
            <h3 className="text-sm text-gray-500 font-bold">{note.age}</h3>
            <div>
              <button
                onClick={() => {
                  setSelectedId(note._id); // kaunsa delete karna hai store karo
                  setShowPopup(true); // popup open
                }}
                className="bg-red-600 p-2 mx-2 text-xl text-white rounded transition-transform active:scale-90"
              >
                Delete
              </button>
              <button
                onClick={() => openEditPopup(note)}
                className="bg-blue-600 p-2 mx-2 text-xl text-white rounded transition-transform active:scale-90"
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        {/* //POPUP FOR DELETE THE SECTION OF THE DATA */}

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-xl text-center w-80">
              <h2 className="text-xl font-bold mb-4">Are you sure?</h2>

              <p className="mb-5 text-gray-600">
                Do you want to delete this note?
              </p>

              <div className="flex justify-center gap-4">
                {/* YES */}
                <button
                  onClick={() => handleDelete(selectedId)} // 🔥 IMPORTANT
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Yes
                </button>

                {/* NO */}
                <button
                  onClick={() => {
                    setShowPopup(false);
                    setSelectedId(null);
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* //EDIT POPUP FOR THE EDITING OF THE DATA */}
        {showEditPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-xl text-center w-80">
              <h2 className="text-xl font-bold mb-4">Edit Note</h2>
              <div></div>
              <form
                onSubmit={handleEdit}
                className="bg-gray-300 p-5 rounded-xl shadow-lg flex flex-col gap-4"
              >
                {/* Add your form fields for editing here */}
                <input
                  name="name"
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, name: e.target.value })
                  }
                  type="text"
                  className="text-xl font-bold border px-2 border-indigo-950 rounded text-indigo-950"
                />
                <input
                  name="title"
                  value={editFormData.title}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, title: e.target.value })
                  }
                  type="text"
                  className="text-xl font-bold border px-2 border-indigo-950 rounded text-indigo-950"
                />
                <input
                  name="age"
                  value={editFormData.age}
                  onChange={(e) =>
                    setEditFormData({
                      ...editFormData,
                      age: Number(e.target.value || 0),
                    })
                  }
                  type="number"
                  className="text-xl font-bold border px-2 border-indigo-950 rounded text-indigo-950"
                />
                <div className="flex justify-center gap-4">
                  {/* SUBMIT*/}
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>

                  {/* Cancle */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowEditPopup(false);
                      setEditId(null);
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
