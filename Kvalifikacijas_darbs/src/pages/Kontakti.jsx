import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Kont from '../components/Kont'

const Kontakti = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <Kont />
      <Footer />
    </div>
  )
}

export default Kontakti