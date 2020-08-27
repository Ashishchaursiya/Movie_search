 import React from "react"
 import MovieList from "./MovieList"
 import Nav from "./Nav"
 import "./index.css"
 import AddMovie from "./AddMovie"
 import {Movieprovider} from "./MovieContext"
 import Result from "./Result"

 
 const App = ()=>{
    return (
        <>
        <Movieprovider>
        <div className="d-flex justify-content-around flex-wrap" style={{backgroundImage:"linear-gradient(to right,rgba(0,0,0,0.8) 100%, transparent 0%),url(img/bg.jpg)",width:"100%"}}>
        <Result />
        </div>
        
        <div style={{backgroundImage:"linear-gradient(to right,rgba(0,0,0,0.7) 100%, transparent 0%),url(img/mv.jpg)",height:"100vh",width:"100%"}}>
         
        <Nav />
        <AddMovie />
           <MovieList />
        </div>
      
        
        </Movieprovider>
        
    
        </>
    )
        
    }
    
 export default App;
 