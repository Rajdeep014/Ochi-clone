import React, { useEffect, useState } from 'react'

const Eyes = () => {
  
  const [first, setfirst] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e)=>{
      let mouseX=e.clientX;
      let mouseY=e.clientY;

      let deltaX =mouseX- window.innerWidth/2;
      let deltaY =mouseY- window.innerHeight/2;
      
      var angle =Math.atan2(deltaY,deltaX) * (180/Math.PI)
      setfirst(angle);

    })
  
  }, )
  


        
    
    
  return (
    <div className=' w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
        <div className='absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
            <div className=' w-[15vw] h-[15vw] bg-zinc-100 rounded-full  flex items-center justify-center'> 
            <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>
           <div style={{transform:`translate(-50%,-50%) rotate(${first})`}} className=' line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
            <div className='w-10 h-10 rounded-full bg-white '></div>
            </div>
            </div>
            </div>
            <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
           
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <div style={{transform:`translate(-50%,-50%) rotate(${first})`}}  className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rotate-'>
            <div className='w-10 h-10 rounded-full bg-white '></div>
            </div>
     
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Eyes