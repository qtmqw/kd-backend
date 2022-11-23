import React from 'react'
import Drebes2 from '../assets/drebes2.jpeg'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom'



const Sort = () => {
  return (

    <Container fluid>

      <div className='shadow-xl bg-gray-300 flex flex-col p-3 my-5 rounded-full'>
      <InputGroup className="max-w-xl mx-auto font-semibold">
        <Form.Control
          placeholder="Meklēt"
        />
        <Button variant="dark" className='bg-black text-white'>
          Button
        </Button>
      </InputGroup>
      </div>
      

      <Container fluid className='mx-auto my-auto mb-5'>
        <div className='lg:flex'>
            <div className='bg-gray-300 p-3 rounded-3xl xl:w-[1500px] lg:w-[1500px] mr-10'>
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

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>

            <Card id='Zeķes' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={Drebes2} className='p-3'/>
              <Card.Body>
                <Card.Title className=' text-center'>Sieviešu apģērbi</Card.Title>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className='d-grid'>
                  <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
                </div>
              </Card.Body>
            </Card>
            </div>
          </div>
      </Container>
    </Container>
  )
}

export default Sort