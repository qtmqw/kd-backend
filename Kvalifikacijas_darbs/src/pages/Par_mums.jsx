import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pm from '../components/Pm'



const Par_mums = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <Pm />
      <Footer />
    </div>
  )
}

export default Par_mums