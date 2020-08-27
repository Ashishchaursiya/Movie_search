import React, { createContext ,useState} from "react"

export const MovieContext = createContext();


export const Movieprovider = ( props)=>{
    const [Moviename,SetMovie] =useState([
                
            ])

  return (
      <>
  <MovieContext.Provider value={[Moviename,SetMovie]}>
      {props.children}
  </MovieContext.Provider>
      </>
  )
}