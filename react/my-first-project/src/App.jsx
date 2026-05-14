import { useState } from 'react'
import './App.css';
import IPhone17 from './assets/IPhone.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetail from './users/UserDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinReducer from './CoinReducer/CoinReducer';


function App() {
  const subheading={
    textAlign:"center",
    textShadow:'2px 2px 1px red'
  }

  return (
    <>

    <CoinReducer/>
    
    <UserDetail/>
      <h1 style={{color:"red",textAlign:"center"}}>Hello World</h1>
      <h3 style={subheading}>Welcome to my web page</h3>

      <section>
        <h2 className='productHeading'>I Phone Pro Max</h2>
        <p className='paraDef'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate incidunt totam dolorem aut sint. Corporis maxime temporibus, exercitationem tempora quas esse dolorem deserunt itaque repellendus?</p>
        <img src={IPhone17} alt="My Image" className='phoneImg'/>
      </section>
    </>
  )
}

export default App
