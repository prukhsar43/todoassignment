import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Show from './components/Show'
import Todo from './components/Todo'
import Todoo from './components/Todoo'
import GoogleBooks from './components/GoogleBooks'
import InitialLoad from './components/InitialLoad'
import Demo from './components/Demo'
import Useref from './components/Useref'
import { Routes, Route } from "react-router-dom"
function App() {
  


  return (
    <div className="App">

  {/* <Routes>
  <Route path="about" element={ <About/> } />
  <Route path="/todoo" element={ <Todoo/> } />

    </Routes> */}
     

     {
       /**
        *  <Home/>
        *     <Show/>
        * <Todo/>
        * <GoogleBooks/>
        * <InitialLoad/> 
        * 
        *  <Demo/>
        *  <Useref/>
        *  
        */  
        <Todoo/>
     }

   
      
    
 
    </div>
  )
}

export default App
