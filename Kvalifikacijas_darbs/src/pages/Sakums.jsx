import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Saak from '../components/Saak'

const Sakums = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <Saak />
      <Footer />
    </div>
  )
}

export default Sakums