import React from "react";

export const Notes = (props) => {
  return (
    <div className="w-full lg:w-1/2 p-6 border-t lg:border-t-0 lg:border-l border-gray-600">
      <h1 className="text-4xl font-bold text-white mb-8">Recent Notes</h1>

      <div className="flex flex-wrap gap-6">
        {props.notesData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="w-60 h-72 bg-cover bg-center rounded-xl p-10 flex flex-col justify-between shadow-lg"
              style={{
                backgroundImage:
                  "url('https://imgs.search.brave.com/QNXcadGiEkDa-etKM7e5W0016qnQyy2J4l8bCewI0aw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MjEzLzQ0Ni9zbWFs/bC9kaWdpdGFsLXN0/aWNreS1ub3Rlcy1w/bmcucG5n')",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold text-black">{elem.title}</h3>

                <p className="text-gray-700 mt-4 text-sm leading-6">
                  {elem.description}
                </p>
              </div>

              <button
                onClick={() => {
                  props.deleteNotes(idx);
                }}
                className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
