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
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
                <button className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden" onClick={() => setMobileOpen(true)}>
                    <MenuIcon className="h-6 w-6" />
                </button>
                <input className="mx-4 w-full border rounded-md px-4 py-2 mt-5 mb-5" type="text" placeholder="Search"/>
            </div>
            <div className="flex items-center pr-4">
                <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                  <NavigateBeforeIcon className="h-6 w-6" />
                  <NavigateNextIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
        <div className="p-4">
            <div class="inline-flex items-center gap-2 mb-5 mt-5">
                  <p class="prata-regular text-3xl">Product List</p>
                  <hr class="border-none h-[1.5px] w-8 bg-gray-800"/>
            </div>          
         <table className="min-w-full bg-white border border-gray-200 rounded-md shadow">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">#</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Size</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Categories</th>
            { admin != null && (
            <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            )
            }
          </tr>
        </thead>
        <tbody className="text-gray-800 divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">
                <div className="flex items-center">
                  <img src={product.image} alt="Profile Picture" className="w-10 h-10 rounded-full mr-2" />
                  <span>{product.name}</span>
                </div>
              </td>
              <td className="px-6 py-3">Rs. {product.price}</td>
              <td className="px-6 py-3">{product.sizes+","}</td>
              <td className="px-6 py-3"> {product.categories+","}</td>
              {admin !=null && (
              <td className="px-6 py-3 space-x-2">
                <button className="px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800" onClick={() => handelEditButton(product._id)}>
                  Edit
                </button>
                <button className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => handelDeleteButton(product._id)}>
                  Delete
                </button>
              </td>
              )
              }
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </div>
    )
}

export default ShowProduct;

