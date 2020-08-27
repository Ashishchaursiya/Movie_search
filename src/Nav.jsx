import React, { useContext } from "react"
import {MovieContext} from "./MovieContext"
 const Nav = ()=>{
    const [Moviename,SetMovie]  =useContext(MovieContext);
     return (
         <>
         <div className="item">
         <h2>My Movie list</h2>
     <h2>No of movies <span class="badge badge-secondary">{Moviename.length}</span></h2>
      
         </div>
      
 
    </>
     )
         
 }

 export default Nav;