import React,{ useState } from 'react'

const App = () => {

  const [name,setName] = useState('')
  const [allUser, setallUser] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
    setallUser([...allUser, name]);
    setName('');
  }


  return (
    <div className='h-40 w-full bg-gray-400 flex justify-center items-center gap-5'>
      <form onSubmit={(e)=>{
        handleSubmit(e);

      }} className='h-10 w-80 flex items-center gap-3 px-2 mr-4'>
        <input 
        value={name} 
        required
        onChange={(e)=>{
          setName(e.target.value);
        }}
        type="text" placeholder="Enter your name" 
        className='border bg-blue-300 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button className="bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
      </form>

      {allUser.map(function(elem,idx){
        return <h1 key={idx}>{elem}</h1> 
      })}
      
    </div>
  )
}

export default App
