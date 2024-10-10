import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import Nav from '../Component/Nav';

function Book() {
  const [book,setBook]=useState([{}])
  
 //   fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=M5eouiGxjNTMFR3Eek3rkhCTKfasF5az')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json.data.results)
  //     // setBook(json.data.results.books)

  //   });
  useEffect(() => {
    axios.get("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=zgVDKhS91Fns0vtnBHpgFsqL2kOMKpey")
 
    .then((response)=> {
      console.log(response.data.results)
      setBook(response.data.results)
    });
   }, []);


  return (

    <div >
      <Nav/>


<div className=' w-[100%] h-auto bg-[#8da29c] max-sm:w-[100%] max-md:w-[100%] max-sm:w-[100%]'>
   {/* <div className="card shadow-xl w-[50%] h-auto  flex  flex-wrap"> */}
    <div className='w-[100%] flex items-center justify-center '>
<div className="card-body w-[100%] h-[250vh] flex flex-wrap max-md:h-[300vh] max-sm:h-auto max-sm:justify-center max-sm:items-center  ">
    {book.map((item)=>(
        <div className='flex flex-col flex-wrap w-[30%] items-center justify-center'> 
          <img src={item.url} />
      <h1 className='text-black max-sm:text-center font-serif'>{item.book_author }</h1>
      <h2 className="card-title text-center max-sm:text-center font-sans">{item.book_title }</h2>
</div>
))} 
  </div>

    {/* </div> */}


    </div>
  

</div>

</div>

  )

      }
export default Book
