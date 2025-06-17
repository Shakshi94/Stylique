import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/" className="w-36" >
        STYLIQUE
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <Link to="/" aria-current="page" className="flex flex-col items-center gap-1 active">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
        <Link to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
        <Link to="#" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </Link>
      </ul>

      <div className="flex items-center gap-6">
        <img src="data:image/png;base64,..." className="w-5 cursor-pointer" alt="Profile" />

        <div className="group relative">
          <img src="data:image/png;base64,..." className="w-5 cursor-pointer" alt="Search" />
        </div>

        <a href="/cart" className="relative">
          <img src="data:image/png;base64,..." className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">0</p>
        </a>

        <img src="data:image/png;base64,..." className="w-5 cursor-pointer sm:hidden" alt="Menu" />
      </div>

      <div className="absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all w-0">
        <div className="flex flex-col text-gray-600">
          {/* Back Button */}
          <div className="flex items-center gap-4 p-3 cursor-pointer">
            <img src="data:image/png;base64,..." className="h-4 rotate-180" alt="Back Icon" />
            <p>Back</p>
          </div>

          {/* Mobile Nav Links */}
          <Link to="/" aria-current="page" className="py-2 pl-6 border active">HOME</Link>
          <Link to="/collection" className="py-2 pl-6 border">COLLECTION</Link>
          <Link to="/about" className="py-2 pl-6 border">ABOUT</Link>
          <Link to="/contact" className="py-2 pl-6 border">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
