import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>

      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl font-thin">Library Book</a>
  </div>
  <div className="flex-none  ">
    <ul className="menu menu-horizontal flex justify-around w-[60vh] px-1 max-md:flex max-md:flex-col max-md:w-[15vh] max-sm:h-[30vh] max-md:h-[30vh]  ">


 <Link to="/Book"><li className='max-md:w-[30vh]'>Books</li></Link>
 <Link to="/Search"><li className='max-md:w-[30vh]'>Search</li></Link>
 <Link to="/Details"><li className='max-md:w-[30vh]'>Details</li></Link>
 <Link to="/Favorites"><li className='max-md:w-[30vh]'>Favorites</li></Link>
 <Link to="/Status"><li className='max-md:w-[30vh]'>Status</li></Link>
 <Link to="/Home"><li className='max-md:w-[30vh]'>Log Out</li></Link>

   

    </ul>
  </div>
</div>

  
      
    </div>
  )
}

export default Nav
