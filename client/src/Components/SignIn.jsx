import React from 'react';
import {userSignIn} from '../api/index';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../redux/reducers/userSlice';
import {Link,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
      setFormData({
        ...formData, 
        [e.target.name]: e.target.value
      });
    }

  const handleSubmit = async (e) => {
     e.preventDefault();
      const response = await userSignIn(formData);
      if (response.data.success) {
        dispatch(loginSuccess({user: response.data.user}));
        if(response.data.user.role === 'admin') {
           navigate('/admin/dashboard');
           Swal.fire({
            icon: 'success',
            title: 'Welcome to the Admin Dashboard',
            timer: 2000,
            showConfirmButton: false,
          });
        }else if(response.data.user.role === 'user') {
           navigate('/');
           Swal.fire({
            icon: 'success',
            title: 'Login Successful,Welcome to Home Page',
            timer: 2000,
            showConfirmButton: false,
          });
        }
      } else {

        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: response.data.message || "Wrong credentials",
          timer: 2500,
          showConfirmButton: false,
        });
        setFormData({
          email: '',
          password: ''
        });
      }
  }

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800" onSubmit={handleSubmit}>
      {/* Title */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Sign In</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Input Fields */}
      <input
        type="email"
        name="email"
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Email"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name='password'
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Password"
        required
        onChange={handleChange}
      />

      {/* Links */}
      <div className="w-full flex justify-between text-sm -mt-1 text-gray-600">
        <p className="cursor-pointer hover:underline">Forgot your password?</p>
        <Link to="/signup" className="cursor-pointer hover:underline">Create account</Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"

        className="bg-black text-white font-light px-8 py-2 mt-4 hover:bg-gray-900 transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
