import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { userSignUp  } from '../api/index';

const SignUp = () => {
  const [formData, setFormData] = React.useState({
    name: '', 
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChnage = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  const validateInput = ()=>{
    const { email, password,name } = formData;
    if (!email || !password || !name) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const response =await userSignUp(formData)
    if (!validateInput()) return;
    // Check if the response indicates success
    if (response.data.success){
      navigate('/signin');
    }else{
      // If the response indicates an error, show an alert
      alert(response.data.message || "Registration failed");
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    }
  }


  return (


    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800" onSubmit={handleSubmit}>
      {/* Title */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Inputs */}
      <input
        type="text"
        name="name"
        value={formData.name}
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Name"
        required
        onChange={handleChnage}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Email"
        required
        onChange={handleChnage}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Password"
        required
        onChange={handleChnage}
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
