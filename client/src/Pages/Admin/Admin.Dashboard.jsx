import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const { setMobileOpen } = useOutletContext();
  const admin = useSelector((state) => state.user.currentUser);
  return (
      <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
              <div className="flex items-center px-4">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden" onClick={() => setMobileOpen(true)}>
                      <MenuIcon className="h-6 w-6" />
                  </button>
                  <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search"/>
              </div>
              <div className="flex items-center pr-4">
                  <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                    <NavigateBeforeIcon className="h-6 w-6" />
                    <NavigateNextIcon className="h-6 w-6" />
                  </button>
              </div>
          </div>
          <div className="p-5">
                <h1 className="text-2xl font-bold">Welcome, {admin?.name || 'Guest'} 👋</h1>
                {/* You can access other user info too */}
                <p>Email: {admin?.email}</p>
                <p>Role: {admin?.role}</p>
           </div>
      </div>
  )
};

export default AdminDashboard;
