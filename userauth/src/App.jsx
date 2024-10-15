import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import React from 'react'
import mortgagedashlogo from './assets/mortgagedashlogo.png'

const App = () => {
  return (
    <div className="flex h-screen"> {/* Wrapper for black and white side */}

      {/* Left Side */}
      <div className="bg-black w-2/5 flex flex-col justify-center pl-10 text-white pt-20">
        {/* Wrapper */}
        <div className='flex items-center mb-10' >
          {/* Mortgage Dash + Logo*/}
          <img src={mortgagedashlogo} alt="Mortgage Dash Logo" className="h-16 w-16 mr-5" />
          <p className='font-bold text-5xl' >
            Mortgage Dash
          </p>
        </div>
        {/* Prequalify line */}
        <p className='font-bold mb-auto text-4xl ' >
          Pre-Qualify <br /> Clients  <span className="bg-gradient-to-r from-green-600 to bg-white text-transparent bg-clip-text">
            with ease
          </span>
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white w-3/5 flex justify-center items-center">
        <p className="text-black text-xl">Login Page</p>

      </div>
    </div>

  )
}

export default App
