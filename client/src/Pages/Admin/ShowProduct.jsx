import React, { useState,useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {showProducts,deleteProduct} from '../../api/index'
import { useSelector } from 'react-redux';

function ShowProduct() {

    const { setMobileOpen } = useOutletContext();
    const [products,setProduct] = useState([]);
    const admin = useSelector((state) => state.user.currentUser);

    const fetchProducts = async () => {
      try {
        const { data } = await showProducts();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    const navigate = useNavigate();
      useEffect(() => {
        fetchProducts();
      }, []);

      const handelEditButton = (id)=>{
          navigate(`/admin/editproduct/${id}`);
      }

      const handelDeleteButton = async (id) =>{
        try{
        const res =  await deleteProduct(id);
        if(res.data.success){
          alert("Product Deleted");
          fetchProducts();
        }else{
          alert(res.data.message)
        }
      }catch(err){
        alert(err.response?.data || err.message);
      }
      }
    return (
<div className="flex flex-col flex-1 overflow-y-auto">
  {/* Header */}
  <div className="flex flex-wrap items-center justify-between h-auto p-4 bg-white border-b border-gray-200">
    <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
      <button
        className="text-gray-500 focus:outline-none md:hidden"
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      <input
        className="ml-4 w-full md:w-64 border rounded-md px-4 py-2"
        type="text"
        placeholder="Search"
      />
    </div>
    <div className="flex items-center">
      <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">
        <NavigateBeforeIcon className="h-6 w-6" />
        <NavigateNextIcon className="h-6 w-6" />
      </button>
    </div>
  </div>

  {/* Product List */}
  <div className="p-4 w-full overflow-x-auto">
    <div className="inline-flex items-center gap-2 mb-5">
      <p className="text-2xl font-semibold">Product List</p>
      <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    </div>

    <table className="min-w-[700px] w-full bg-white border border-gray-200 rounded-lg shadow text-sm text-left">
      <thead className="bg-gray-100 text-gray-700 uppercase">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Price</th>
          <th className="px-6 py-3">Sizes</th>
          <th className="px-6 py-3">Categories</th>
          {admin && <th className="px-6 py-3">Actions</th>}
        </tr>
      </thead>
      <tbody className="text-gray-800 divide-y divide-gray-200">
        {products.map((product, index) => (
          <tr key={product._id} className="hover:bg-gray-50">
            <td className="px-6 py-3">{index + 1}</td>
            <td className="px-6 py-3">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt="Product"
                  className="w-10 h-10 rounded-full mr-2 object-cover border"
                />
                <span className="font-medium">{product.name}</span>
              </div>
            </td>
            <td className="px-6 py-3">Rs.{product.price}</td>
            <td className="px-6 py-3">{(product.sizes || []).join(', ')}</td>
            <td className="px-6 py-3">{(product.categories || []).join(', ')}</td>
            {admin && (
              <td className="px-6 py-3 space-x-2">
                <button
                  onClick={() => handelEditButton(product._id)}
                  className="px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handelDeleteButton(product._id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    )
}

export default ShowProduct;

