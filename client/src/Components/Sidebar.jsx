import React from 'react';
import { useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // Ensure this package is installed
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/reducers/userSlice';
import { userLogout } from '../api/index';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
const SideBar = ({mobileOpen, setMobileOpen}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useSelector((state) => state.user.currentUser);

  const handleLogout = async () => {
     const response = await userLogout();
     
     if(response.data.success){
      dispatch(logout());
      navigate('/signin');
     }
  };
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-500 min-h-screen">
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <span className="text-white font-bold uppercase">STYLIQUE</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-700 space-y-2">
            <Link to="/admin/dashboard" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-800">
               <DashboardIcon className="h-6 w-6 mr-2" /> 
              Dashboard
            </Link>
            <Link to="/admin/addproduct" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-800">
                <AddIcon className="h-6 w-6 mr-2" /> 
              Add Product
            </Link>
            <Link to="/admin/showproducts" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-800">
                <VisibilityIcon className="h-6 w-6 mr-2" /> 
              Product List
            </Link>
            { admin==null ? (
            <Link to="/signin"  className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-800">
             <AdminPanelSettingsIcon  className="h-6 w-6 mr-2" />
             Sign in
            </Link>
            ):(
            <button className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 hover:bg-gray-800" onClick={handleLogout}>
              <LogoutIcon className="h-6 w-6 mr-2"/>
              Log out
            </button>
            )
            }
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center gap-4 p-4 border-b cursor-pointer" onClick={() => setMobileOpen(false)}>
          <ArrowBackIosIcon className="h-4 rotate-180" />
          <p>Back</p>
        </div>
        <div className="flex flex-col text-gray-700 font-medium">
          <Link to="/admin/dashboard" className="py-3 pl-6 border-b hover:bg-gray-400 cursor-pointer" onClick={() => setMobileOpen(false)}>DASHBOARD</Link>
          <Link to="/admin/addproduct" className="py-3 pl-6 border-b hover:bg-gray-400 cursor-pointer" onClick={() => setMobileOpen(false)}>ADD PRODUCT</Link>
          <Link to="/admin/showproducts" className="py-3 pl-6 border-b hover:bg-gray-400 cursor-pointer" onClick={() => setMobileOpen(false)}>SHOW PRODUCT</Link>
          {admin==null ? (
            <Link to="/signin" className="py-3 pl-6 border-b hover:bg-gray-400 cursor-pointer text-left" onClick={() => setMobileOpen(false)}>LOG IN</Link> 
          ):(        
            <button className="py-3 pl-6 border-b hover:bg-gray-400 cursor-pointer text-left" onClick={handleLogout}>LOG OUT</button>  
          )
          }
        </div>
      </div>
    </>
  );
};

export default SideBar;
