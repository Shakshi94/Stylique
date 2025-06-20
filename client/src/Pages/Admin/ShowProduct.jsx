import React, { useState,useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {showProducts,deleteProduct} from '../../api/index'
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AdminNavbar from '../../Components/AdminNavbar';

function ShowProduct() {

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
    <AdminNavbar/>

  {/* Product List */}
  <div className="p-4 w-full overflow-x-auto">
    <div className="inline-flex items-center gap-2 mb-5">
      <p className="text-2xl font-semibold">Product List</p>
      <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    </div>

    <table className="min-w-[700px] w-full bg-white border border-gray-200 shadow text-sm text-left">
      <thead className="bg-black  text-white uppercase">
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
                  className="px-3 py-1"
                >
                  < EditIcon />
                </button>
                <button
                  onClick={() => handelDeleteButton(product._id)}
                  className="px-3 py-1"
                >
                  <DeleteIcon />
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

