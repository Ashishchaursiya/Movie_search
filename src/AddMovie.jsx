import React, { useState, useContext } from "react"
import {MovieContext} from "./MovieContext"
const AddMovie = ()=>{
    const [Moviename,SetMovie]  =useContext(MovieContext);
    const [name,Setname] =useState("");
    const [price,Setprice] =useState("");
     
    const updatename = (e)=>{
      Setname(e.target.value)
    }
    const updateprice = (e)=>{
        Setprice(e.target.value)
      }
      const Add =(e)=>{
          e.preventDefault();
          if(name!=="" &&price!==""){
            SetMovie( prevmovie => [...prevmovie,{name:name,price:price}])
          }
           
          Setname("")
          Setprice("")
      }
       return (
           <>
          
          
               
               <form onSubmit={Add}>
               
               <input type="text" placeholder="Movie name" value={name} onChange={updatename} className="inpt p-2 m-2" />
                
                          
                          <input type="text" Placeholder="Review" value ={price} 
     onChange={updateprice} className="inpt p-2 m-2" />
 <button  class=" ml-2 btn btn-success btn-lg rounded-pill">ADD</button>
                        
                  </form>


             
           
          
 
           </>
       )
}

export default AddMovie;



