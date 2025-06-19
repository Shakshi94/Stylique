import { useOutletContext } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Make sure to import
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const AdminNavbar = () => {
  const { setMobileOpen } = useOutletContext();

  return (

    <div>
      {/* Top Navbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-4 bg-white border-b border-gray-200">
        {/* Left: Hamburger + Search */}
        <div className="flex items-center gap-4">
          <button
            className="text-gray-500 focus:outline-none md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <input
            className="border rounded-md px-4 py-2 text-sm w-40 sm:w-64"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right: Arrows */}
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-700">
            <NavigateBeforeIcon className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <NavigateNextIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
