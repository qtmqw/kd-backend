import React from 'react'



const Navbar = () => {


return (

  <div className='fixed w-full bg-[#94abbd] flex justify-between shadow-lg p-4 items-center rounded-md'>
    <h1 className='w-full text-3xl font-bold text-black ml-10 '> <a href='/'>Abika</a></h1>
    <nav>
      <ul className='hidden md:flex gap-8 p-2 uppercase mr-10'>
        <button className='bg-[#94abbd] text-black w-auto rounded-lg uppercase font-medium my-2 mx-auto px-5 py-3 hover:bg-[#729ab9] duration-500'><a href="/"> Sākums </a></button>
        <button className='bg-[#94abbd] text-black w-auto rounded-lg uppercase font-medium my-2 mx-auto px-5 py-3 hover:bg-[#729ab9] duration-500'><a href="/Par_mums">Par_mums</a></button>
        <button className='bg-[#94abbd] text-black w-auto rounded-lg uppercase font-medium my-2 mx-auto px-5 py-3 hover:bg-[#729ab9] duration-500'><a href="/Sortiments">Sortiments</a></button>
        <button className='bg-[#94abbd] text-black w-auto rounded-lg uppercase font-medium my-2 mx-auto px-5 py-3 hover:bg-[#729ab9] duration-500'><a href="/Kontakti">Kontakti</a></button>
        <button className='bg-black text-white w-auto rounded-lg uppercase font-medium my-2 mx-auto px-5 py-3 hover:bg-[#729ab9] duration-500'><a href="/Pieslegties">Pieslēgties</a></button>
        <button className='bg-black text-white w-auto rounded-lg uppercase font-medium my-2 mx-auto px-5 py-3 hover:bg-[#729ab9] duration-500'><a href="">Atslēgties</a></button>
      </ul>
    </nav>
  </div>

    
  )
}

export default Navbar