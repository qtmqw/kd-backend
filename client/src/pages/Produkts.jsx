import React, { useState, useEffect } from 'react'
import {Container} from 'react-bootstrap'

const Produkts = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const prece = async () => {
      const result = await fetch('http://localhost:8080/prod/:id')
      const jsonResult = await result.json()

      setData(jsonResult)
    }

    prece()
  }, [])

  return (
    <Container>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 mb-5 gap-8 max-w-auto'>
            {data.map(produkti =>
              <div value='apavi' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
                <img variant="top" src={`../../public/uploads/${produkti.Attels}`} className='p-3 w-[2000px] h-[400px]' />
                <div>
                  <div className=' text-center'>{produkti.Nosaukums}</div>
                  <div className='border-b-[1px] border-gray-500 pb-3'>
                    Apraksts: {produkti.Apraksts}
                  </div>
                  <div className='border-b-[1px] border-gray-500 pb-3'>
                    Krāsa: {produkti.Krasa}
                  </div>
                  <div className='border-b-2 border-gray-500 pb-3'>
                    Cena: {produkti.Cena}€
                  </div>
                </div>
              </div>
            )}
          </div>

    </Container>
    
  )
}

export default Produkts