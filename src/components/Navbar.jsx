import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

import {AiOutlineUser} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../firebase.config";

import { useLocation } from 'react-router-dom';


const Navbarf = () => {

  const [user, setUser] = useState(undefined);

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);



  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser);
  });

  function izr() {
    signOut(firebaseAuth)
    window.location.reload(false)
  }

  return (
    <Navbar className='w-full bg-white shadow-lg p-4 navbar sticky-top ' expand="lg">
      <Container className='max-w-full'>
        <Navbar.Brand href="/"><h1 className='text-3xl text-black font-semibold '>Abika</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="gap-2 p-2 m-auto justify-center">
            <Nav.Link href="/" className={(url === "/" ?" active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Sākums</Nav.Link>
            <Nav.Link href="/Par_mums" className={(url === "/Par_mums" ?" active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Par Mums</Nav.Link>
            <Nav.Link href="/Sortiments" className={(url === "/Sortiments" ?" active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Sortiments</Nav.Link>
            <Nav.Link href="/Kontakti" className={(url === "/Kontakti" ?" active text-black uppercase rounded-lg bg-gray-400" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Kontakti</Nav.Link>
          </Nav>
          <Nav className="gap-2">
            <Dropdown>
              <Dropdown.Toggle className=' rounded-full bg-white border-white flex'><AiOutlineUser className='w-7 h-7 rounded-full text-black '/></Dropdown.Toggle>
                <Dropdown.Menu>
                  {!user && <Dropdown.Item href="/Pieslegties">Pieslēgties</Dropdown.Item>}
                  {!user && <Dropdown.Item href="/Registreties">Registreties</Dropdown.Item>}
                  
                  {user && <Dropdown.Item>{user?.email}</Dropdown.Item>}
                  {user && <Dropdown.Item href="/Profils">Profils</Dropdown.Item>}
                  {user && <Dropdown.Divider />}
                  {user && <Dropdown.Item onClick={izr}>Izrakstīties</Dropdown.Item>}
                </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/Grozs" className='p-2 lg:ml-2'><BsCart2 className='w-7 h-7 text-black'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default Navbarf
