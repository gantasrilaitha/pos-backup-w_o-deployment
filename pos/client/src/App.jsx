import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Choose from './Choose'
import Success from './Success'
function App() {

  return (
    /*<div>
      <Signup />
    </div>*/
    <BrowserRouter>
    
    <Routes>
    <Route path ='/' element={<Choose />}></Route>
      <Route path ='/signup' element={<Signup />}></Route>
      <Route path ='/success' element={<Success />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
