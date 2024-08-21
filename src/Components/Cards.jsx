import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-10'> 
    <div className='w-full border-t-[1px] border-zinc-700 flex gap-6 py-10 px-10 '>
      <div className='w-1/2 h-[45vh] bg-[#004D43] rounded-2xl flex items-center justify-center'> 
      <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>

      
      </div> 
      <div className='w-1/2 h-[45vh] flex gap-6 '>
      <div className='w-1/2 h-[45vh] bg-[#212121] rounded-2xl flex items-center justify-center'> 
      <img className=' ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
      </div>
      <div className='w-1/2 h-[45vh] bg-[#212121] rounded-2xl flex items-center justify-center'>
      <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>

      </div>
      </div>
    
    </div>
    
    </div>
  )
}

export default Cards