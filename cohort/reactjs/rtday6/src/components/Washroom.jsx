import React from 'react'

const Washroom = (props) => {
  return (
    <div className={`h-80 w-80 ${props.color} rounded text-white font-bold text-2xl flex items-center justify-center `}>
      {props.user} Washroom
    </div>
  )
}

export default Washroom
