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
    <div className="flex flex-col flex-1 overflow-y-auto bg-gray-50 min-h-screen">
      {/* Top Navbar */}
      <div className="flex flex-wrap items-center justify-between h-auto p-4 bg-white border-b border-gray-200">
        {/* Left Section: Hamburger + Search */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            className="text-gray-500 focus:outline-none md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <input
            className="w-full sm:w-64 border rounded-md px-4 py-2 text-sm"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right Section: Navigation */}
        <div className="hidden sm:flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-700">
            <NavigateBeforeIcon className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <NavigateNextIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">Welcome, {admin?.name} 👋</h1>

        <div className="text-sm sm:text-base text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Email:</span> {admin?.email}
          </p>
          <p>
            <span className="font-medium">Role:</span> {admin?.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
