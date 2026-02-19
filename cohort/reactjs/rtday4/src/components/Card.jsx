import React from 'react'
import Btn from './Btn'

const Card = (props)=>{
  return (
    <div className=' h-50 w-45 bg-blue-100 mx-1.5 my-1 rounded-lg flex flex-col items-center justify-center' >
        <h1 className='text-2xl font-bold text-center mt-3'>{props.name}</h1>
        <p className='text-center mt-2'>Enrollement No: {props.Enrol}</p>
        <p className='text-center mt-2'>Class: {props.cl}</p>
        <p className='text-center mt-2'>Branch: {props.Bc}</p>
        <Btn className={props.className} text={props.text}/>
      
    </div>
  )
}

export default Card
