import React,{useState} from 'react'
import Washroom from './components/Washroom'

const App1 = () => {
    const [gender, setGender] = useState("Male");
    function btnClick(){
        if(gender=="Male"){
            setGender("Female");
        }else if(gender=="Female"){
            setGender("other");
        }else{
            setGender("Male");
        }
    }
// 🔥 Background class decide here
  let bgColor;

  if (gender === "Male") {
    bgColor = "bg-blue-600";
  } 
  else if (gender === "Female") {
    bgColor = "bg-pink-500";
  } 
  else {
    bgColor = "bg-[conic-gradient(from_0deg,#8b5cf6,#4f46e5,#3b82f6,#22c55e,#eab308,#f97316,#ef4444,#8b5cf6)]";
  }

    
  return (
    <div className='bg-black h-screen flex flex-col items-center justify-center gap-5'>
        <h1 className="text-white text-6xl font-bold">Your gender is~{gender}</h1>
        <button 
        onClick={btnClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Change Gender</button>
        <Washroom user={gender} color={bgColor} />
    </div>
  )
}

export default App1
