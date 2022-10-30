import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const login = () => {
  return (
    <div className=' mx-auto my-auto'>
        <div className='w-full mx-auto my-auto shadow-xl bg-[#94abbd] flex flex-col p-10 rounded-lg justify-center'>
            <h1 className='font-bold mx-auto md:text-2xl sm:text-3xl text-3xl py-2 mb-5'>Pieslēgties</h1>
            <form className="w-full "   >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold ">
                            <p className='mb-2'>Lietotāj vārds</p>
                            <input required className="appearance-none block w-[300px] mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text"></input>
                        </label>
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p className='mb-2'>Parole</p>
                            <input required className="appearance-none block w-[300px] mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4  focus:bg-white" type="password"></input>
                        </label>
                    </div>
                </div>
            </form>
            <button className='bg-black text-white w-[200px] rounded-md font-medium my-2 mx-auto px-10 py-3'>Pieslēgties</button>
            <div className='grid md:grid-cols-2 relative'>
                <p>
                    Vajadzīgs profils?<br />
                    <span className='underline underline-offset-auto mt-3'>
                        <a href="/Registreties">Reģistrēties</a>
                    </span>
                </p>
                <div className='w-auto mx-auto my-auto max-w-auto flex clex-col absolute bottom-0 right-0 '>
                    <a href="/"> <p className='underline underline-offset-3'>Atpakaļ</p></a><FaArrowRight className='w-3 h-7 mx-1'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default login