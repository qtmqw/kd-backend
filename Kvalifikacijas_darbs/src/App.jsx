import React from 'react'
//import Layout from './components/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sakums from './pages/Sakums'
import Par_mums from './pages/Par_mums'
import Sortiments from './pages/Sortiments'
import Kontakti from './pages/Kontakti'
import Pieslegties from './pages/Pieslegties'
import Registreties from './pages/Registreties'


function App() {
  return (

    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sakums/>}/>
                <Route path="/Par_mums" element={<Par_mums/>}/>
                <Route path="/Sortiments" element={<Sortiments/>}/>
                <Route path="/Kontakti" element={<Kontakti/>}/>
                <Route path="/Pieslegties" element={<Pieslegties/>}/>
                <Route path="/Registreties" element={<Registreties/>}/>
            </Routes>
        </BrowserRouter>

  );
}

export default App;