import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



import Sakums from './pages/Sakums'
import Par_mums from './pages/Par_mums'
import Sortiments from './pages/Sortiments'
import Kontakti from './pages/Kontakti'
import Registreties from './pages/Registreties'
import Pieslegties from './pages/Pieslegties'
import Grozs from './pages/Grozs'
import Profils from './pages/Profils'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Sakums/>}/>
          <Route path="/Par_mums" element={<Par_mums/>}/>
          <Route path="/Sortiments" element={<Sortiments/>}/>
          <Route path="/Kontakti" element={<Kontakti/>}/>
          <Route exact path="/Registreties" element={<Registreties/>}/>
          <Route exact path="/Pieslegties" element={<Pieslegties/>}/>
          <Route path="/Grozs" element={<Grozs/>}/>
          <Route path="/Profils" element={<Profils/>}/>

        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;