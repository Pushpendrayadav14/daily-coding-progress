import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'


const AllSection = () => {
  return (
    <div className='bg-blue-300 flex justify-between p-8'>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default AllSection
