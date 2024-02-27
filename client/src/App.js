import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCenter from './Components/Admin/AddCenter';
import Admin from './Components/Admin/Admin';
import Centers from './Components/Admin/Centers';
import Login from './Components/Admin/Login';
import Signup from './Components/Admin/Signup';
import UpdateCenter from './Components/Admin/UpdateCenter';
import Home from './Components/Home';
import Slot from './Components/Slot';
import SlotReg from './Components/SlotReg';
const App = () => {
  return <BrowserRouter>
      <Routes>
        
        <Route path="/home" element={<Home/>} />
        <Route path="/slot" element={<Slot/>} /> 
        <Route path="*" element={<Home/>} />
        <Route path="/slotreg" element={<SlotReg />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/center' element={<Centers />} />
        <Route path = '/add' element={<AddCenter />} />
        <Route path="/update/:id" element={<UpdateCenter />} />

      </Routes>
    </BrowserRouter>
  
}

export default App
