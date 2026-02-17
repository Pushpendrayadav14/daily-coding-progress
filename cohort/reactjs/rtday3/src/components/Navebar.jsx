import React from 'react'

const Navebar = () => {
  return (
    <div className='h-[12vh] w-100% bg-green-800 p-2 flex items-center justify-between'>
      <h1 className='ml-3 text-white font-bold text-3xl'>Pryme Consulting</h1>
      <div className='text-white font-medium text-lg flex gap-10'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Details</a>
      </div>
      <button className='h-10 w-30 bg-blue-600 font-bold text-white mr-3 rounded-xl '>Login</button>
    </div>
  )
}

export default Navebar
