import React from 'react';
import mortgagedashlogo from '../assets/mortgagedashlogo.png';

export default function MortgageDash() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Backdrop Arrow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-0 h-0 border-t-[60vh] border-t-transparent border-b-[60vh] border-b-black border-l-[100vw] border-l-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-10">
        {/* Mortgage Dash Logo */}
        <img 
          src={mortgagedashlogo} 
          alt="Mortgage Dash Logo" 
          className="h-36 mb-8 filter invert" 
        />
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4">MORTGAGE DASH</h1>
        <p className="font-bold mb-auto text-xl text-gray-600">
          Pre-Qualify Clients <span className="bg-gradient-to-r from-green-600 to-green-950 text-transparent bg-clip-text">with ease</span>
        </p>

        <button className="btn btn-primary text-white text-lg font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}
