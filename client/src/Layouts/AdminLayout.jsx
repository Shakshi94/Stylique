import {useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from '../Components/Sidebar'
const AdminLayout = () => {
   const [mobileOpen, setMobileOpen] = useState(false);
  return (
      <div className="flex h-screen bg-gray-100 md:p-0">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <Outlet context={{setMobileOpen}} />
      </div>
  );
};

export default AdminLayout;
