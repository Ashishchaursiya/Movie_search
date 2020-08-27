import React from "react"
 const Movie = (props)=>{
     return (
         <>
          <h1> {props.name}</h1>
          <b> ${props.price}</b>
         </>
     )
     
 }

 export default Movie;