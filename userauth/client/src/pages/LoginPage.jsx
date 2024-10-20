import React, { useState } from 'react';
import mortgagedashlogo from '../assets/mortgagedashlogo.png';
import '../App.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="bg-black w-2/5 flex flex-col justify-center pl-10 text-white pt-20">
        {/* Logo and Title */}
        <div className="flex items-center mb-10">
          <img src={mortgagedashlogo} alt="Mortgage Dash Logo" className="h-16 w-16 mr-5" />
          <p className="font-bold text-5xl">Mortgage Dash</p>
        </div>
        {/* Tagline */}
        <p className="font-bold mb-auto text-4xl">
          Pre-Qualify <br /> Clients <span className="bg-gradient-to-r from-green-600 to-white text-transparent bg-clip-text">with ease</span>
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white w-3/5 flex justify-center items-center">
        <div className="w-full max-w-lg">
          {/* Login/Register Ternary*/}
          {isLogin ? (
            <div>
              <p className="text-black font-bold text-2xl mb-10">Welcome Back</p>

              {/* Login Form */}
              <div className="flex flex-col space-y-4">
                <input type="email" className="input input-bordered w-full bg-inherit" placeholder="Email" />
                <input type="password" className="input input-bordered w-full bg-inherit" placeholder="Password" />
                <div className="text-right">
                  <a href="#" className="link link-hover text-blue-600">Forgot Password?</a>
                </div>
                <button className="btn btn-primary w-full">Login</button>
                <p className="text-center text-gray-500 my-4">or</p>

                <button className="btn btn-outline w-full">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" className="mr-1" />
                  Continue with Google
                </button>
                <button className="btn btn-outline w-full">
                  <img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" alt="Apple logo" className="mr-1" />
                  Continue with Apple
                </button>
              </div>



              {/* Registration Toggle */}
              <div className="text-center mt-6">
                <p className="text-gray-500">
                  Don't have an account?{' '}
                  <a href="#" className="link link-hover text-blue-600" onClick={toggleForm}>Sign Up</a>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-black font-bold text-2xl mb-8">Create an Account</p>

              {/* Registration Form */}
              <div className="flex flex-col space-y-5">
                <div className='flex flex-row space-x-2'>
                  <input type="text" className="input input-bordered w-full bg-inherit" placeholder="First Name" />
                  <input type="text" className="input input-bordered w-full bg-inherit" placeholder="Last Name" />
                </div>
                <input type="email" className="input input-bordered w-full bg-inherit" placeholder="Email" />
                <input type="password" className="input input-bordered w-full bg-inherit" placeholder="Password" />
                <input type="password" className="input input-bordered w-full bg-inherit" placeholder="Confirm Password" />
                <button className="btn btn-primary w-full">Register</button>
                <button className="btn btn-outline w-full">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" className="mr-1" />
                  Continue with Google
                </button>
                <button className="btn btn-outline w-full">
                  <img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" alt="Apple logo" className="mr-1" />
                  Continue with Apple
                </button>

              </div>



              {/* Toggle to Login */}
              <div className="text-center mt-7">
                <p className="text-gray-500">
                  Already have an account?{' '}
                  <a href="#" className="link link-hover text-blue-600" onClick={toggleForm}>Login</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
