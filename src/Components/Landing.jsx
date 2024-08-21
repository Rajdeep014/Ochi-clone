import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'


const Landing = () => {
    

  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20 '>
        {["WE CREATED","EYES OPENING","PRESENTATION"].map((e,i)=>{
          return(
          <div className='masker'>
            <div className='w-fit flex items overflow-hidden'>
            {i === 1 && (
            <motion.div initial={{width:0 }} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1
            ],duration:1
            }} className='mr-[1vw] w-[9vw] h-[5.4vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover  relative -bottom-[1vw] rounded'></motion.div>
            )}  
            <h1 className='masker h-full text-[7.5vw] leading-[6.5vw] tracking-tight font-semibold capitalize'>{e}</h1>
            </div>
            </div>
          ) 
        })} 

     </div> 

     <div className='border-t-[1px] border-zinc-800 mt-20 flex item-center justify-between py-5 px-20 font-light capitalize'>
      {["for public to private companies","from the first pitch to ipo"].map((e,i)=>{
        return <p className=''>{e}</p>
      })}
  <div className='start flex items-center justify-between gap-2'>
    <div className='py-2 px-5 border-[2px] border-zinc-500 rounded-full text-sm font-light capitalize'>START THE PROJECT</div>
    <div className='rounded-full border-[2px] w-10 h-10 border-zinc-500 flex items-center justify-center'>
    <MdArrowOutward />
    </div>
  </div>

     </div>
    </div>
  )
}

export default Landing