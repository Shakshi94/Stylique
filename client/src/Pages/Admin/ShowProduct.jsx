import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useOutletContext } from 'react-router-dom';
const productData = [
    {
      id: 1,
      name: "iPhone 15",
      price: 89999,
      category: "Electronics",
      stock: 25
    },
    {
      id: 2,
      name: "Nike Air Max",
      price: 9999,
      category: "Footwear",
      stock: 12
    },
    {
      id: 3,
      name: "Wooden Chair",
      price: 3499,
      category: "Furniture",
      stock: 40
    },
  ];
  

function ShowProduct() {
    const { setMobileOpen } = useOutletContext();
    return (
        <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
                <button className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden" onClick={() => setMobileOpen(true)}>
                    <MenuIcon className="h-6 w-6" />
                </button>
                <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search"/>
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
            <th className="px-6 py-3 text-left text-sm font-medium">Price (₹)</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Category</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Stock</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 divide-y divide-gray-200">
          {productData.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">{product.name}</td>
              <td className="px-6 py-3">₹{product.price}</td>
              <td className="px-6 py-3">{product.category}</td>
              <td className="px-6 py-3">{product.stock}</td>
              <td className="px-6 py-3 space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </div>
    )
}

export default ShowProduct;

