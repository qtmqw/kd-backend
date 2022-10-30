import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sort from '../components/Sort'

const Sortiments = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <Sort />
      <Footer />
    </div>
  )
}

export default Sortiments