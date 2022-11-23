import React from 'react'
import {GrClose} from 'react-icons'
import { Link } from 'react-router-dom'

const Menuu = ({showMenu,active}) => {
  return (
    <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
    <GrClose onClick={showMenu} className='cursor-pointer'/>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Testimonials</Link></li>
    <li><Link to='/'>Information</Link></li>
    <li><Link to='/'>Jobs</Link></li>
    <li><Link to='/'>About</Link></li>
    <li><Link to='/'>Contact</Link></li>
    </ul>
  )
}

export default Menuu