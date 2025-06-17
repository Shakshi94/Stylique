import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useOutletContext } from 'react-router-dom';

const  UploadProduct = () => {
      const { setMobileOpen } = useOutletContext();

      // Optional: Form state if you want to handle it
      const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: null
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: files ? files[0] : value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Data:', formData);
        // Here you can add POST request logic using axios/fetch
      };
    
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
                  <p class="prata-regular text-3xl">Add Product</p>
                  <hr class="border-none h-[1.5px] w-8 bg-gray-800"/>
            </div> 
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter price"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter product description"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Upload Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full"
              accept="image/*"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Upload Product
          </button>
             </form>
        </div>
        </div>
    );
}

export default UploadProduct;