import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import Home from './Pages/Home';
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';
import UserLayout from './Layouts/UserLayout';

import AdminLayout from './Layouts/AdminLayout';
import AdminDashboard from './Pages/Admin/Admin.Dashboard';
import EditProduct from './Pages/Admin/EditProduct';
import UploadProduct from './Pages/Admin/UploadProduct';
import ShowProduct from './Pages/Admin/ShowProduct';
import ProductDetails from './Pages/ProductDetails';
import ProtectedRoute from './Components/ProtectedRoute';
import Unauthorized from './Components/Unauthorized';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public/User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<ProtectedRoute customerOnly={true}><Collection /></ProtectedRoute>} />
          <Route path="/collection/:id" element={<ProtectedRoute customerOnly={true}><ProductDetails /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute customerOnly={true}><Cart /></ProtectedRoute>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute adminOnly={true}><AdminLayout /></ProtectedRoute>}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/addproduct" element={<UploadProduct />} />
          <Route path="/admin/showproducts" element={<ShowProduct />} />
          <Route path="/admin/editproduct/:id" element={<EditProduct />} />
        </Route>

        {/* Unauthorized Route */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
