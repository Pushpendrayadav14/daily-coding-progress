import React from 'react'

const User = (props) => {
    const cl1=Math.floor(Math.random()*256);
    const cl2=Math.floor(Math.random()*256);
    const cl3=Math.floor(Math.random()*256);

  return (
    <div style={{backgroundColor:`rgb(${cl1},${cl2},${cl3})`}} className='h-50 w-50 px-2 py-2 my-5 mx-5'>
        <h1 className='text-2xl font-bold'>{props.elem.name}</h1>
        <h3 className='text-xl font-bold'>{props.elem.email}</h3>
      
    </div>
  )
}

export default User
