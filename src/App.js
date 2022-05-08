import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./Home"
import Comments from "./Comments"

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <Home/>} />         
            <Route path="/:commentId" element={ <Comments/>} /> 

        </Routes>
      
    </div>
  )
}
