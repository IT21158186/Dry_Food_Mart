import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from '../src/pages/Landing';
import Login from './pages/CusLogin';
import Signup from './pages/CusSignup';



function App() {

  return(
    <BrowserRouter>

      <Routes>
    
          <Route path='/' element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup/>} />
    
    
    
      </Routes>
    
    
    </BrowserRouter>

  );


}


export default App;

