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

    const validateInput = ()=>{
      const { email, password } = formData;
      if (!email || !password) {
        alert("Please fill in all fields");
        return false;
      }
      return true;
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateInput()) return;
      
      try {
        const response = await userSignIn(formData);

        if (response.data.success) {
          dispatch(loginSuccess({ user: response.data.user }));
    
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
    
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
    
          if (response.data.user.role === "admin") {
            navigate("/admin/dashboard");
          } else if (response.data.user.role === "user") {
            navigate("/");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: response.data.message || "Wrong credentials",
          });
          setFormData({ email: '', password: '' });
        }
      } catch (error) {
        // Catch network/server/authorization errors here
        console.error("Login error:", error);
    
        // Customize based on HTTP status
        let errorMessage = "An error occurred. Please try again.";
        if (error.response) {
          if (error.response.status === 403) {
            errorMessage = "Access Forbidden. You don't have permission.";
          } else if (error.response.status === 401) {
            errorMessage = "Unauthorized. Please check your credentials.";
          } else if (error.response.status === 404) {
            errorMessage = "Login API not found.";
          } else if (error.response.data?.message) {
            errorMessage = error.response.data.message;
          }
        }
    
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMessage,
        });
      }
    };
    
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
        value={formData.email}
        className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Email"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name='password'
        value={formData.password}
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
