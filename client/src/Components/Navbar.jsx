import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch, useSelector } from 'react-redux';
import {logout} from '../redux/reducers/userSlice';
import { userLogout } from '../api/index';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    console.log("Logout clicked");
     const response = await userLogout();
     
     if(response.data.success){
        dispatch(logout());
        navigate('/signin');
     }
  };
  return (
    <div className="flex items-center justify-between py-20 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        STYLIQUE
      </Link>

      {/* Desktop Nav (only shown on lg and above) */}
      <ul className="hidden lg:flex gap-5 text-sm text-gray-700">
        <Link to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </Link>
        <Link to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </Link>
        <Link to="#" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </Link>
        <Link to="#" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </Link>

      </ul>

      {/* Icons + Hamburger */}
      <div className="flex items-center gap-6">
        {/* These icons are hidden on small screens, shown on lg and above */}
        <SearchIcon className="w-5 cursor-pointer" />
        {user ? (
         <LogoutIcon className="w-5 cursor-pointer" onClick={handleLogout}/>
        ) : (
          <Link to="/signin">
            <PersonIcon className="w-5 cursor-pointer" />
          </Link>
        )}

        <Link to="/cart" className="relative">
          <ShoppingCartIcon className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>
        {/* Hamburger Menu (only on small screens, hidden on lg and above) */}
        <div className='md:hidden'>
          <MenuIcon
            className="w-6 cursor-pointer"
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 w-full h-[100%] bg-white shadow-lg transform transition-transform duration-300 z-50 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center gap-4 p-4 border-b cursor-pointer" onClick={() => setMobileOpen(false)}>
          <ArrowBackIosIcon className="h-4 rotate-180" />
          <p>Back</p>
        </div>
        <div className="flex flex-col text-gray-700 font-medium">
          <Link to="/" className="py-3 pl-6 border-b hover:bg-gray-100" onClick={() => setMobileOpen(false)}>HOME</Link>
          <Link to="/collection" className="py-3 pl-6 border-b hover:bg-gray-100" onClick={() => setMobileOpen(false)}>COLLECTION</Link>
          <Link to="#" className="py-3 pl-6 border-b hover:bg-gray-100" onClick={() => setMobileOpen(false)}>ABOUT</Link>
          <Link to="#" className="py-3 pl-6 border-b hover:bg-gray-100" onClick={() => setMobileOpen(false)}>CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;