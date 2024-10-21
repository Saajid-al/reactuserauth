import React from 'react';
import mortgagedashlogo from '../assets/mortgagedashlogo.png';

export default function MortgageDash() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative">
      <div className="absolute left-0 top-0 h-full w-1/4 bg-gray-100 rounded-br-full"></div>
      <div className="absolute right-0 top-0 h-full w-1/4 bg-gray-100 rounded-bl-full"></div>

      <div className="relative z-10 flex flex-col items-center text-center p-10">
        <img 
          src={mortgagedashlogo} 
          alt="Mortgage Dash Logo" 
          className="h-36 mb-8 filter invert" 
        />
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4">MORTGAGE DASH</h1>
        <p className="font-bold mb-auto text-xl text-gray-600">
          Pre-Qualify Clients <span className="bg-gradient-to-r from-green-600 to-green-950 text-transparent bg-clip-text">with ease</span>
        </p>
        <button className="btn btn-accent py-4 px-8 text-lg font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center h-12">
          <span className="flex text-white items-center justify-center h-full">Get Started</span>
        </button>
      </div>
    </div>
  );
}
