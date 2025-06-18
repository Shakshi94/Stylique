import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useOutletContext } from 'react-router-dom';
import { addProduct } from '../../api/index';
const  UploadProduct = () => {
      const { setMobileOpen } = useOutletContext();

      // Optional: Form state if you want to handle it
      const [product, setProduct] = useState({
        name: '',
        desc: '',
        price: '',
        sizes: '',
        categories: '',
        image: null,
      });
      
      const validateInput = () =>{
        
        const {name,desc,price,image} = product;
        if(!name || !desc || !price || !image) {
          alert("Please fill in all fields");
          return false;
        }
        return true;
      }
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
          setProduct({ ...product, image: files[0] });
        } else {
          setProduct({ ...product, [name]: value });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInput()) return;
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('desc', product.desc);
        formData.append('price', product.price);
        formData.append('sizes', JSON.stringify(product.sizes.split(',').map(s => s.trim())));
        formData.append('categories', JSON.stringify(product.categories.split(',').map(s => s.trim())));
        formData.append('image', product.image);
    
        try {
          const res = await addProduct(formData);
          if(res.data.success){
            alert("Product added Successfully");
          }else{
            alert(res.data.message);
          }
          setProduct({
            name: '',
          desc: '',
          price: '',
          sizes: '',
          categories: '',
          image: null,
         });
        } catch (err) {
          console.error(err.response?.data || err.message);
        }
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
            <div className="inline-flex items-center gap-2 mb-5 mt-5">
                  <p className="prata-regular text-3xl">Add Product</p>
                  <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
            </div> 
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <div>
                <label className="block mb-1 font-medium">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
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
                  value={product.price}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  placeholder="Enter price"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  name="desc"
                  value={product.desc}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  placeholder="Enter product description"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Sizes</label>
                <input
                  name="sizes"
                  value={product.sizes}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  placeholder='Sizes e.g. "S,M,L"'
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Categories </label>
                <input
                  name="categories"
                  value={product.categories}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  placeholder='Categories e.g. "men,female"'
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