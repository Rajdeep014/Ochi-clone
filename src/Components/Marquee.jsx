import { motion } from 'framer-motion'
import React from 'react'


const   Marquee = () => {
  return (
    <div data-scroll  data-scroll-section data-scroll-speed=".05"  className='w-full  bg-[#004D43] py-[45px] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text flex whitespace-nowrap overflow-hidden'>           
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:8 ,repeat:Infinity}}  className='text-[16vw]   leading-none font-semibold uppercase pr-10 '>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:8 ,repeat:Infinity}}  className='text-[16vw]   leading-none font-semibold uppercase pr-10 '>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:8 ,repeat:Infinity}}  className='text-[16vw]   leading-none font-semibold uppercase pr-10 '>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:8 ,repeat:Infinity}}  className='text-[16vw]   leading-none font-semibold uppercase pr-10 '>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee