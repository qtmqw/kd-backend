import { FaArrowRight } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import { reg, login, useAuth, logout } from '../firebase.config'
import { useRef } from 'react'

const test = () => {
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleReg() {
        try {
            await reg(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error!')
        }
    }

    async function handleLogin() {
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error!')
        }
    }

    async function handleLogout() {
        try {
            await logout()
        } catch {
            alert('Error!')
        }
        
    }

  return (
    <Container className='max-w-[1000px]'>
        <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold pt-[90px] text-center my-5 '>Test</h1>
        <div className='py-[140px]'>
            <div className='w-full mb-4 bg-gray-300 p-10 rounded-lg relative '>
            <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Reģistrēties</h1>
                <div>Lietotājs: { currentUser?.email } </div>
                <form >
                    <div className="mb-6">
                        <div className="px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md">
                                <p className='mb-2 font-bold'>E-pasts</p>
                                <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3"
                                 required type="text" ref={emailRef} placeholder='E-pasts' 
                                />
                            </label>
                        </div>
                    </div>
                
                    <div className="flex flex-wrap mb-6 ">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md mb-2">
                                <p className='mb-2 font-bold'>Parole</p>
                                <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4"
                                 required type="password" ref={passwordRef} placeholder='Parole' 
                                />
                            </label>
                        </div>
                    </div>
                </form>
                <button className='bg-black text-white w-auto rounded-full font-medium my-2 mx-auto px-10 py-3'
                 disabled={ currentUser } onClick={handleReg}>
                    Reģistrēties</button>
                    <button className='bg-black text-white w-auto rounded-full font-medium my-2 mx-auto px-10 py-3'
                 disabled={ currentUser } onClick={handleLogin}>
                    login</button>
                <div className='absolute bottom-5 right-5'>
                    <button className='bg-black text-white w-auto rounded-full font-medium  mx-auto px-10 py-3'
                     disabled={ !currentUser } onClick={handleLogout}>
                        <FaArrowRight className='w-4 h-3 mx-1'/>
                    </button>
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export default test