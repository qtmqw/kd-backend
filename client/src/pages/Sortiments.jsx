import Drebes2 from '../assets/drebes2.jpeg'
import Container from 'react-bootstrap/Container'
import { Button } from '@material-tailwind/react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react'



const Sort = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const prece = async () => {
      const result = await fetch('http://localhost:8080/prod')
      const jsonResult = await result.json()

      setData(jsonResult)
    }

    prece()
  }, [])

  return (
    <>

      <Container fluid>



        <div className='shadow-xl bg-gray-300 flex flex-col p-3 my-5 rounded-full'>
          <InputGroup className="max-w-xl mx-auto font-semibold">
            <Form.Control
              placeholder="Meklēt"
            />
            <Button variant="dark" className='bg-black text-white px-3'>
              Meklēt
            </Button>
          </InputGroup>
        </div>



        <div className='lg:flex'>
          <div className='bg-gray-300 p-3 rounded-3xl xl:w-[1500px] lg:w-[1500px] mr-10 '>
            <h1 className='mx-auto my-auto text-center font-bold text-2xl'>Filtrs</h1>
            <div className='mb-3'>
              <h2 className='font-semibold'>Kategorijas:</h2>
              <p>Sieviešu apģērbi</p>
              <p>Vīriešu apģērbi</p>
              <p>Veļa</p>
              <p>Apavi</p>
              <p>Aksesuāri</p>
            </div>

            <div className='mb-3'>
              <h2 className='font-semibold'>Krāsas:</h2>
              <p>Zils</p>
              <p>Sarkans</p>
              <p>Zaļš</p>
              <p>Melns</p>
              <p>Balts</p>
            </div>

            <div>
              <h2 className='font-semibold'>Izmēri:</h2>
              <p>XXL</p>
              <p>XL</p>
              <p>L</p>
              <p>M</p>
              <p>S</p>
              <p>XS</p>
            </div>
          </div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 mb-5 gap-8 w-auto'>
              {data.map(produkti =>
                <Card value='apavi' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
                  <Card.Img variant="top" src={produkti.Attels} className='p-3' />
                  <Card.Body>
                    <Card.Title className=' text-center'>{produkti.Nosaukums}</Card.Title>
                    <Card.Text className='border-b-[1px] border-gray-500 pb-3'>
                      Apraksts: {produkti.Apraksts}
                    </Card.Text>
                    <Card.Text className='border-b-[1px] border-gray-500 pb-3'>
                      Krāsa: {produkti.Krasa}
                    </Card.Text>
                    <Card.Text className='border-b-2 border-gray-500 pb-3'>
                      Cena: {produkti.Cena}€
                    </Card.Text>
                    <div className='d-grid flex'>
                      <Button variant="dark" className='rounded-full bg-black text-white  py-2 font-medium my-2'>Apskatīt</Button>
                      <Button variant="dark" className='rounded-full bg-black text-white  py-2 font-medium my-2'>Apskatīt</Button>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>
        </div>
      </Container>
    </>
  )
}

export default Sort