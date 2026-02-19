import React from 'react'
import Card from './components/Card';

const App = () => {

  const student =[{name:"John Doe", Enrol:"123456", cl:"10th Grade", Bc:"Science", text:"View Details",className:"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"},{name:"Jane Smith", Enrol:"654321", cl:"11th Grade", Bc:"Commerce", text:"View Profile",className:"bg-red-500 text-white px-4 py-2 rounded-md mt-2"},{name:"Alice Johnson", Enrol:"789012", cl:"12th Grade", Bc:"Arts", text:"Explor profile",className:"bg-green-500 text-white px-4 py-2 rounded-md mt-2"}]

  return (
    <div className='bg-black h-screen w-full flex '>
      <div className='h-5/6 w-5/6 bg-blue-500 mx-auto my-auto rounded-lg flex flex-wrap justify-center items-center'>
        {student.map((item,index)=>{
          return <Card name={item.name} Enrol={item.Enrol} cl={item.cl} Bc={item.Bc} text={item.text} className={item.className}/>
        })}
      </div>

    </div>
  )
}

export default App
