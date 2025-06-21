import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector } from 'react-redux';
import AdminNavbar from '../../Components/AdminNavbar';

const AdminDashboard = () => {
  const admin = useSelector((state) => state.user.currentUser);
  console.log(admin);
  return (
    <div className="flex flex-col flex-1 overflow-y-auto bg-gray-50 min-h-screen">
      {/* Top Navbar */}
      <AdminNavbar />
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
