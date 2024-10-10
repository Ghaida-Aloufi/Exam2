import React from 'react'
import Nav from '../Component/Nav'
const Home = () => {
  return (
<div>
   <Nav/>
 <div className='h-screen bg-[#8da29c] flex  justify-around items-center max-md:w-[100%] max-sm:w-[100%] max-md:flex-col'>
  <div >
    <h1 className='font-bold text-6xl font-serif w-[55vh] text-center max-sm:w-[45vh]'>Welcome To Library Book Online</h1>
  </div>
     <div className='flex justify-center items-center' >
      <img className='max-md:w-[60%]' src="https://cdn-icons-png.flaticon.com/512/5078/5078755.png" alt="" srcset="" />
     </div>
</div>

   
      
    </div>

  )
}

export default Home
