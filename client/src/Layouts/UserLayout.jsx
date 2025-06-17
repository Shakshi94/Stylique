import {Outlet} from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function UserLayout() {

  return (
    <>
    <Navbar />
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default UserLayout;
