
import React from 'react'
import { color, motion } from "motion/react";

const Topics = () => {
  return (
    <div>
        <motion.div 
     initial={{
      x:100,
     
     }}
     animate={{
      x:[0,800,800,0,0],
      y:[0,0,300,300,0],
      rotate:[0,360,0,-360,0]

     }}
     transition={{
      duration:3,
      delay:1,
      repeat:Infinity,
      ease:"anticipate"
     }}

     className='box'>

     </motion.div>
    <motion.img   initial={{
      x:100,
     
     }}
     animate={{
      x:1000,
      rotate:360

     }}
     transition={{
      duration:2,
      delay:1,
      repeat:2,
      ease:"anticipate"
     }}
     src="https://imgs.search.brave.com/J650M7McRBqZrlvMHdnb3jl5VUIHPXSsbLSsm6ekmj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8x/NC8yMi8xMi9zaGlu/Y2hhbi1jYXJ0b29u/LWNoYXJhY3Rlci1p/bi1zYW50YS1oYXQt/dDRYWjhXYWlfdC5q/cGc" alt="123" />

     <motion.div 
     drag
     whileDrag={{
      scale:0.7
     }}
     dragConstraints={{
      left:0,
      top:-550,
      right:1200,
      bottom:500
     }}
     whileHover={{
      backgroundColor:'pink'
     }}
     whileTap={{
      scale:0.8
     }}
     className='box'>

     </motion.div>
    </div>
  )
}

export default Topics