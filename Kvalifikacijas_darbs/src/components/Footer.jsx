import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaEnvelope,
  FaMobile,
  FaMapMarked
} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='text-gray-500 bg-[#94abbd] py-5 backdrop:blur-md shadow-md z-10 rounded-sm'>
      <div className='max-w-[1700px] justify-between mx-auto grid md:grid-cols-2 '>
        <div>
          <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
            <h1 className=' w-[20%] text-3xl font-bold text-black'>Abika</h1>
            <div className='flex justify-between md:w-[50%] my-3'>
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
              <FaDribbbleSquare size={30} />
            </div>
          </div>
          <p className='pb-2 text-sm'>©2021 Visas tiesības aizsargātas. Jebkāda veida satura pārpublicēšana bez rakstiskas atļaujas stingri aizliegta</p>
        </div>
          <div className=' grid-cols-3 flex flex-nowrap justify-between w-full mx-auto my-auto '>
            <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
              <FaMobile className='w-4 h-5 mr-1'/><a href="" className='font-medium text-gray-600'><p>67382030, 20005038, 29462665</p></a>
            </div>
            <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
              <FaEnvelope className='w-5 h-6 mr-1'/><a href="mailto:abika@inbox.lv" className='font-medium text-gray-600'><p>abika@inbox.lv</p></a>
            </div>
            <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
              <FaMapMarked className='w-5 h-6 mr-1'/><a href="" className='font-medium text-gray-600'><p>Vagonu iela 23, Rīga</p></a>
            </div>
          </div>
        </div>
      </div>

    
  );
};

export default Footer;
