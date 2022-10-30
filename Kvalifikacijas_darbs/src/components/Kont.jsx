import React from 'react'
import {
    FaEnvelope,
    FaMobile,
    FaMapMarked
  } from 'react-icons/fa';

const kont = () => {
  return (
    <div className='w-full py-4 max-w-[1700px] mx-auto my-auto mt-[100px]'>
        <div className='w-full '>
            <div className='w-full mx-auto my-auto grid grid-cols-2 gap-4 py-4 mb-4'>
                <h1 className='md:text-3xl sm:text-3xl text-3xl font-bold '>Kontakti</h1>
                <div className='grid-cols-3 flex justify-between w-full mx-auto my-auto'>
                    <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
                        <FaMobile className='w-4 h-9 mx-1'/><a href="" className='md:text-2xl sm:text-1xl text-1xl'><p>67382030, 20005038, 29462665</p></a> 
                    </div>
                    <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
                        <FaEnvelope className='w-6 h-10 mx-1'/><a href="mailto:abika@inbox.lv" className='md:text-2xl sm:text-1xl text-1xl'><p>abika@inbox.lv</p></a>
                    </div>
                    <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
                        <FaMapMarked className='w-6 h-9 mx-1'/><a href="" className='md:text-2xl sm:text-1xl text-1xl'><p>Vagonu iela 23, Rīga</p></a>
                    </div>
                </div>
            </div>
        </div>
        <div className=' mx-auto mb-10'>
            <iframe  width="100%" height='500px' frameborder="0" scrolling="yes"  src="https://maps.google.com/maps?width=683&amp;height=400&amp;hl=en&amp;q=Abika&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <div className='max-w-[1700px] mx-auto grid md:grid-cols-2'>

            <div className='flex flex-col  text-sm'>
                    <p><span className='font-bold'>SIA Abika adrese:</span>Vagonu iela 23, Rīga, LV-1009</p>
                    <p><span className='font-bold'>Epasts:</span> abika@inbox.lv</p>
                    <p><span className='font-bold'>Telefons:</span>67382030, 20005038, 29462665</p>
                    <p className='mt-2'><p className='font-bold'>Darba laiks:</p>Darba dienās no plkst. 9.00 līdz 17.00</p>
                    <p className='mt-10'><p className='font-bold'>Rekvizīti:</p>SIA Abika</p>
                    <p>LV–40003600614</p>
                    <p>Juridiskā adrese: Pulkveža Brieža iela 93–4, Sigulda, LV–2150   Faktiskā adrese: Vagonu iela 23, Rīga, LV-1009</p>
                    <p>Swedbanka, HABALV22</p>
                    <p>LV70HABA0551003890106</p>


            </div>

            <div className='w-full shadow-xl bg-[#94abbd] relative flex flex-col p-4 md:my-0 my-8 rounded-lg'>

                <h2 className='text-2xl font-bold mb-5'>Jautājiet mums</h2>
                <form className="w-full "   >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                <p className='mb-2'>Vārds, Uzvārds</p>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Maikls Ozoliņš"></input>
                            </label>
                        </div>
                    </div>
                
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
                                    <FaMobile className='w-4 h-4 mr-1'/><p className='mb-2'>Telefons</p> 
                                </div>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="67382030"></input>
                            </label>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
                                    <FaEnvelope className='w-4 h-4 mr-1'/><p className='mb-2'>E-pasts</p>
                                </div>
                                <input required className="appearance-none block w-full bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="abika@inbox.lv"></input>
                            </label>
                            <p className="text-red-500 text-xs italic font-bold">Lūdzam aizpildīt šo lodziņu</p>
                        </div>

                        <div className="w-full h-[200px] px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                <p className='mb-2'>Ziņa</p>
                                <input required className="appearance-none block w-full h-[100px] bg-white text-gray-700 border border-black rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" type="text"></input>
                            </label>
                            <p className="text-red-500 text-xs italic font-bold">Lūdzam aizpildīt šo lodziņu</p>
                        </div>
                    </div>
                </form>
                <button className='bg-black text-white w-[150px] rounded-md font-medium  py-3 absolute bottom-0 right-0 mb-4 mr-4'>Nosūtīt</button>
            </div>
        </div>
    </div>   
  )
}

export default kont