import React from 'react';
import {Link} from 'react-router-dom';
const SignUp = () => {
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      {/* Title */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Inputs */}
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Password"
        required
      />

      {/* Links */}
      <div className="w-full flex justify-between text-sm -mt-1 text-gray-600">
        <p className="cursor-pointer hover:underline">Forgot your password?</p>
        <Link to="/signin" className="cursor-pointer hover:underline">Login Here</Link>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 hover:bg-gray-900 transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
