import React from 'react'

const Navbar = (props) => {
  return (
    <div  className={`h-16 w-full mx-8 my-0 gap-5 ${props.color} flex items-center justify-between`}>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        <div className='flex gap-3'>
            {props.ank.map(function(elem,idx){
                return <a key={idx} href="#">{elem}</a>
            })}
        </div>
        <button className={`h-8 w-16 ${props.btnc} text-white rounded-md mr-4 text-xl`}>{props.btn}</button>
      
    </div>
  )
}

export default Navbar
