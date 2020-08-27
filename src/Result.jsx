import React, { useState } from "react"
import axios from "axios"

const Result = ()=>{
    const [movieList,Setlist] =useState([])
    const [input,Setinput] =useState("")
    async function Show(){
         
        const data = await axios.get( `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${input}`
        )
      
       Setlist(data.data.results)
       
     }
     Show()
 
return(
     
    <>
    <div style={{background:"black"}} className="text-center mx-auto py-3">
    <input type="text"
     placeholder="search movie" 
     value={input}
     onChange={ (e)=>{Setinput(e.target.value)}}
        className="rounded-pill p-2"
        id="srch"
     />
     <br />
    </div>
  
  
         {
             movieList.map(  (item)=>{
                 return(
                     <>
                      
                      
                
                  
                      <div className="card my-3" style={{width: "26rem"}}>

  <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt="poster" />
  <div className="card-body">
  <p className="card-text"> <span>Overview -</span>  {item.overview}</p>
  <p className="card-text"> <span>Vote -</span> {item.vote_average}</p>
    <p className="card-text"> <span> Language -</span>  {item.original_language}</p>
    <p className="card-text"><span> Release-</span>   {item.release_date}</p>
  </div>
</div>

                      
                      
                     
                    
                    

                     </>
                 )
             })

          }
    </>
)
}

export default Result