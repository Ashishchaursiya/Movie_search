 import React, {  useContext, useState } from "react"
 import {MovieContext} from "./MovieContext"
 
 
  const MovieList = ()=>{
    const [Moviename,SetMovie]  =useContext(MovieContext);
 

        return (
            <>

           {
               Moviename.map( (item)=>{
                  return (
                      <>
                      <h2>Movie -{item.name}</h2>
                      <h6 style={{color:"green"}}> Review - <i> {item.price}</i></h6>
                      
                      
                      </>
                  )  
               })
           }
            </>
        )
  }

export default MovieList;