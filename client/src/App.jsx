import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import Home from './Pages/Home';
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';

import UserLayout from './Layouts/UserLayout';
import AdminLayout from './Layouts/AdminLayout';
import AdminDashboard from './Pages/Admin/Admin.Dashboard';
import EditProduct from './Pages/Admin/EditProduct'
import UploadProduct from './Pages/Admin/UploadProduct';
import ShowProduct from './Pages/Admin/ShowProduct';
import ProductDetails from './Pages/ProductDetails'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* // User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/collection/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />

        </Route>
        {/* // Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/addproduct" element={<UploadProduct  />} />
          <Route path="/admin/showproducts" element={<ShowProduct />} />
          <Route path="/admin/editproducts" element={<EditProduct />} />
          <Route path="/signin" element={<SignIn/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
