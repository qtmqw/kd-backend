import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Sakums from './pages/Sakums'
import Par_mums from './pages/Par_mums'
import Sortiments from './pages/Sortiments'
import Kontakti from './pages/Kontakti'
import Registreties from './pages/Registreties'
import Profils from './pages/Profils'
import Grozs from './pages/Grozs'
import TestPage from './pages/TestPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sakums/>}/>
        <Route path="/Par_mums" element={<Par_mums/>}/>
        <Route path="/Sortiments" element={<Sortiments/>}/>
        <Route path="/Kontakti" element={<Kontakti/>}/>
        <Route path="/Registreties" element={<Registreties/>}/>
        <Route path="/Profils" element={<Profils/>}/>
        <Route path="/Grozs" element={<Grozs/>}/>
        <Route path="/TestPage" element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;