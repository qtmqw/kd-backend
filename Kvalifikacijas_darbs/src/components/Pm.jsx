import React from 'react'
import Abika1 from '../assets/abika1.png';
import Drebes2 from '../assets/drebes2.jpeg'

const pm = () => {
  return (
    <div className='w-full  py-16 px-4 '>
      <div className='max-w-[1700px] mx-auto grid md:grid-cols-2 mt-[50px]'>
      <div className='flex flex-col justify-center text-sm'>
          <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2 mb-4'>Par mums</h1>
          <h2 className='md:text-2xl sm:text-1xl text-1xl mb-4'> SIA Abika ir vairumtirdzniecības uzņēmums, kas darbojas no 2002. gada. </h2>
          <h2 className='md:text-2xl sm:text-1xl text-1xl mb-4'> <span className='font-bold'>Sortimentā</span> ir sieviešu un vīriešu apģērbs, veļa, apavi un aksesuāri.</h2>
          <h2 className='md:text-2xl sm:text-1xl text-1xl mb-4'> Mūsu misija ir apģērbu tirgotājiem preču sagādi padarīt vieglāku, ērtāku un ātrāku. Tāpēc regulāri veicam uzlabojumus uzņēmuma darbā.</h2>
          <h2 className='md:text-2xl sm:text-1xl text-1xl italic'> Privātpersonas neapkalpojam.</h2>
        </div>
        <img className='w-[1700px] h-auto mx-auto my-4' src={Abika1} alt='/' />
      </div>
      <div className='w-full py-[2rem] px-4'>
        <div className='max-w-[1700px] mx-auto grid gap-4 grid-cols-4 grid-rows-1 '>
        <img className='w-auto h-auto mx-auto hover:scale-110 ease-in duration-500' src={Drebes2} alt='/' />
        <img className='w-auto h-auto mx-auto hover:scale-110 ease-in duration-500' src={Drebes2} alt='/' />
        <img className='w-auto h-auto mx-auto hover:scale-110 ease-in duration-500' src={Drebes2} alt='/' />
        <img className='w-auto h-auto mx-auto hover:scale-110 ease-in duration-500' src={Drebes2} alt='/' />
        </div>
    </div>
    </div>
  )
}

export default pm