import React, { useState, useEffect } from 'react'
import { Button } from '@material-tailwind/react'
import Card from 'react-bootstrap/Card';
import Drebes2 from '../assets/drebes2.jpeg'
import NavbarAdmin from './NavbarAdmin'
import { Link } from 'react-router-dom';
import axios from 'axios';


const PievienoPreci = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const prece = async () => {
      const result = await fetch('http://localhost:8080/prod')
      const jsonResult = await result.json()

      setData(jsonResult)
    }

    prece()
  }, [])
  
  const [produkti, setProdukti] = useState([])
  const deletePrece = id => {
    axios.delete(`http://localhost:8080/prod/${id}`)
    .then(res => alert(res.data))
    setProdukti(produkti.filter(elem => elem._id !== id))
  }

  return (
    <>
      <NavbarAdmin />
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 mb-5 gap-8 w-auto'>
        {data.map(produkti =>
          <Card className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Link to={{
                pathname: `http://localhost:8080/prod/${produkti._id}`
              }}>
                <Card.Title className=' text-center'>{produkti.Nosaukums}</Card.Title>
              </Link>
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
                  <Link to={`http://localhost:8080/prod/update/${produkti._id}`} variant="dark" className='rounded-full bg-black text-white text-center py-2 font-medium my-2'>Labot</Link>
                  <Button onClick={() => deletePrece(produkti._id)} variant="dark" className='rounded-full bg-black text-white  py-2 font-medium my-2'>Izdzēst</Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  )
}

export default PievienoPreci