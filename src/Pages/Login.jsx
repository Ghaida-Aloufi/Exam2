import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Login() {
const [name,setName]=useState("")
const [pass,setPass]=useState("")
const navigate = useNavigate();


const get=()=>{
  fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login')
  .then((response) => response.json())
  .then((json) => {
    
    console.log(json)
  
  if(json.find((item)=>(item.name===name&&item.pass===pass))){
    alert("Done")
    navigate("/Home");

  }else{
    alert("tey agine")
    setName("")
    setPass("")
  }
});

}

  return (
    <div className='h-screen bg-[#8da29c]'>
       <div className='flex justify-center items-center h-[100vh]'>
      <div className="card bg-base-100 w-96 shadow-xl  h-[50vh] max-md:w-[60vh] max-sm:w-[40vh] ">

  <div className="card-body items-center text-center flex justify-around  ">
    <h2 className="card-title">Log in</h2>
   

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" value={name} onChange={(e)=>(setName(e.target.value))} className="grow" placeholder="Username" />
</label>

<label className="input input-bordered flex items-center gap-2">
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" value={pass} onChange={(e)=>(setPass(e.target.value))} className="grow" placeholder="Password" />
</label>


    <div className="card-actions">
      <button onClick={get} className="btn bg-[#8c9390] text-white">Sign up</button>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Login
