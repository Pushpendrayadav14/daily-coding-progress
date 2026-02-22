import React,{ useState }  from 'react'


const App = () => {
  const [mark, setMark] = useState([55,90,80,23,29,45])
  function btnClick(){
    const newMarks =mark.map(function(elem){
      if(elem<33){
        return elem+5
      }else{
        return elem
      }

    });
    setMark(newMarks);
  }
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center gap-5">
      {mark.map(function(elem,idx){
        return <h1 key={idx} className="text-white text-6xl font-bold">Student {idx+1}={elem} ({elem>33?"Pass":"Fail"})</h1>
      })}
      <button 
      onClick={btnClick}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Give them Grace</button>
      
    </div>
  )
}

export default App



// import React, { useState } from "react";

// const App = () => {
//   const user=["pal","pushpendra","pushpa","rahul","gola","mratunjay","kanha","kirtan","sager"];
//   const [count, setCount] = useState(0);
//   // function btnclick(){
//   //   setCount(count + 1);
//   // }

//   return (
//     <div className="bg-black h-screen flex flex-col items-center justify-center gap-5">
//       <h1 className="text-white text-6xl font-bold">{user[count]}</h1>
//       <div className="flex justify-center align-center gap-5">
//         <button
//           onClick={() => {
//             if(count<user.length-1){
//               setCount(count + 1);
//             }

//           }}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Next user
//         </button>
//         <button
//           onClick={() => {
//             if(count>0){
//               setCount(count - 1);
//             }

//           }}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Previous user
//         </button>
//         <button
//           onClick={() => {
//             if(count!==0){
//               setCount(0);
//             }

//           }}
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//         >
//           First user
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
