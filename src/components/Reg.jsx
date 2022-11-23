import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const reg = () => {

  return (
    <Container className='max-w-[1000px]'>
        <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold pt-[90px] text-center my-5 '>Reģistrēšanās</h1>
        <div className='py-[140px]'>
            <div className='w-full mb-4 bg-gray-300 p-10 rounded-lg relative '>
            <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Reģistrēties</h1>
                <form >
                    <div className="mb-6">
                        <div className="px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md">
                                <p className='mb-2 font-bold'>E-pasts</p>
                                <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3"
                                 required type="text" placeholder='E-pasts' 
                                />
                            </label>
                        </div>
                    </div>
                
                    <div className="flex flex-wrap mb-6 ">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md mb-2">
                                <p className='mb-2 font-bold'>Parole</p>
                                <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4"
                                 required type="password" placeholder='Parole' 
                                />
                            </label>
                        </div>
                    </div>
                </form>
                <button className='bg-black text-white w-auto rounded-full font-medium my-2 mx-auto px-10 py-3'>
                    Reģistrēties</button>
                <div className='absolute bottom-5 right-5'>
                    <button className='bg-black text-white w-auto rounded-full font-medium  mx-auto px-10 py-3'><a href="/"><FaArrowRight className='w-4 h-3 mx-1'/></a></button>
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export default reg