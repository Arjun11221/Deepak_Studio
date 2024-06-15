import React from 'react'
import Body from './Body'
import Feature from './Feature'
import Artist from './Artist'
import imagelogo from "../assets/what'sapplogo.jpg";
import Footer from './Footer';
import Film from './Film';

const Home = () => {
  const phoneNumber = '+918851814279';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  return (
    <div className="flex flex-col min-h-screen" >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          className="fixed bottom-5 right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full z-50"
          src={imagelogo}
          alt="WhatsApp Logo"
        />
      </a>
        <Body/>
        <Feature/>
        <Artist/>
        <Film/>
        <Footer/>
    </div>
  )
}

export default Home