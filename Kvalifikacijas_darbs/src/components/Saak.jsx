import React from 'react'
import Drebes4 from '../assets/drebes4.jpeg'
import Drebes1 from '../assets/drebes1.jpg';
import Drebes2 from '../assets/drebes2.jpeg'

const Saak = () => {
  return (
    <div className='mt-[100px]'>
     <div className=' w-full justify-center'></div>
      <img className='max-w-auto  w-full' src={Drebes4} alt="/" />  
      <div className='w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[600px] h-auto mx-auto my-4' src={Drebes1} alt='/' />
          <div className='flex flex-col justify-center text-sm'>
            <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2'>SIA Abika vairumtirdzniecības noliktava piedāvā sieviešu, vīriešu apģērbu un veļu!</h1>
            <p>
              Mūsu klienti ir dažādi tirdzniecības uzņēmumi, sākot no individuāliem komersantiem līdz veikalu tīkliem. Iepirkties SIA Abika ir izdevīgi, jo:
              <p><p className='font-bold'>1. Jūs ietaupāt laiku.</p>Salīdzinot ar iepirkšanos ārvalstīs, kur gan ceļā gan iepērkoties jāpatērē ilgs laiks, SIA Abika papildināt preču krājumus var stundas vai dažu desmitu minūšu laikā.</p>
              <p><p className='font-bold'>2. Iepirkšanās ir ērta.</p> Preču paraugi un to krājumi atrodas vienuviet. Klients pats var atlasīt vajadzīgos apģērbu izmērus, krāsas, modeļus.</p>
              <p><p className='font-bold'>3. Prece atbilst LR likumdošanas prasībām.</p>SIA Abika apģērbiem ir piestiprinātas uzlīmes latviešu valodā ar preces nosaukumu, ražotājvalsti un citu nepieciešamo informāciju.</p>
              <p><p className='font-bold'>4. Jūs ietaupāt transporta izdevumus.</p>Latvijas klientiem ceļš līdz Rīgai ir īsāks nekā līdz citu valstu galvaspilsētām un lielpilsētām.</p>
            </p>
          </div>
        </div>
      </div>
      <div className='w-full py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl bg-[#94abbd] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='max-w-auto mx-auto bg-transparent' src={Drebes2} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 border-b-2 border-gray-500'>Sieviešu apģērbi</h2>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-10 py-3'>Apskatīt</button>
          </div>
          <div className='w-full shadow-xl bg-[#94abbd] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='max-w-auto mx-auto bg-transparent' src={Drebes2} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 border-b-2 border-gray-500'>Vīriešu apģērbi</h2>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-10 py-3'>Apskatīt</button>
          </div>
          <div className='w-full shadow-xl bg-[#94abbd] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='max-w-auto mx-auto bg-transparent' src={Drebes2} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 border-b-2 border-gray-500'>Veļa</h2>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-10 py-3'>Apskatīt</button>
          </div>
        </div>
        <div className='max-w-[800px] mx-auto grid md:grid-cols-2 gap-8 mt-10'>
          <div className='w-full shadow-xl bg-[#94abbd] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='max-w-auto mx-auto bg-transparent' src={Drebes2} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 border-b-2 border-gray-500'>Apavi</h2>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-10 py-3'>Apskatīt</button>
          </div>
          <div className='w-full shadow-xl bg-[#94abbd] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='max-w-auto mx-auto bg-transparent' src={Drebes2} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8 border-b-2 border-gray-500'>Aksesuāri</h2>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-10 py-3'>Apskatīt</button>
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default Saak