import React from 'react'
import { Container } from 'react-bootstrap'

const Prof = () => {
  return (
    <Container fluid className='max-w-[2000px]'>
        <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold pt-[90px] text-center my-5 '>Profils</h1>
        <div className='lg:flex py-[200px]'>
            <div className='w-full mb-4 bg-gray-300 p-10 rounded-lg '>
            <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Pieslēgties</h1>
                <form>
                    <div className="mb-6">
                        <div className="px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md">
                                <p className='mb-2 font-bold'>E-pasts</p>
                                <input required className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3" type="email"></input>
                            </label>
                        </div>
                    </div>
                
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md mb-2">
                                <p className='mb-2 font-bold'>Parole</p>
                                <input required className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4" type="password"></input>
                            </label>
                        </div>
                    </div>
                </form>
                <button className='bg-black text-white w-[200px] rounded-md font-medium my-2 mx-auto px-10 py-3'><a href="#">Pieslēgties</a></button> <span className='text-xl pl-2'><a href="#">Aizmirsāt paroli?</a></span>
            </div>

            <div className='w-full p-10'>
            <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Reģistrēties</h1>
                <div className='text-semibold text-2xl'>
                    By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
                </div>
                <a href="/Registreties"><button className='bg-black text-white w-[200px] rounded-md font-medium mt-10 px-10 py-3'>Reģistrēties</button></a>
            </div>
        </div>
    </Container>
  )
}

export default Prof