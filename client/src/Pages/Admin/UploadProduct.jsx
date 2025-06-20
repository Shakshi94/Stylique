import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { addProduct } from '../../api/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../Components/AdminNavbar';

const  UploadProduct = () => {

      const admin = useSelector((state) => state.user.currentUser);
      const navigate = useNavigate();

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
          if(admin == null){
            navigate("/signin");
            alert("Your are not Sign In");
          }
          else{
          if (!validateInput()) return;
          const formData = new FormData();
          formData.append('name', product.name);
          formData.append('desc', product.desc);
          formData.append('price', product.price);
          const sizesArray = product.sizes.split(',').map(s => s.trim());
          sizesArray.forEach(size => formData.append('sizes[]', size));
          const categoriesArray = product.categories.split(',').map(c => c.trim());
          categoriesArray.forEach(category => formData.append('categories[]', category)); 
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
            alert(err.response?.data || err.message);
          }
        }
        };
    return (
      <div className="flex flex-col flex-1 overflow-y-auto bg-gray-50 min-h-screen">
        {/* Header */}
        < AdminNavbar/>    
        {/* Form Section */}
        <div className="p-5">
          <div className="inline-flex items-center gap-2 mb-6">
            <h1 className="text-2xl font-semibold">Add Product</h1>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-md p-6"
          >
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-1">Product Name</label>
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
              <label className="block text-sm font-medium mb-1">Price</label>
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
              <label className="block text-sm font-medium mb-1">Sizes (comma-separated)</label>
              <input
                name="sizes"
                value={product.sizes}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                placeholder='X,L,M'
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Categories (comma-separated)</label>
              <input
                name="categories"
                value={product.categories}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                placeholder='female,western dress'
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Upload Image ( .jpg .png .jpeg )</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
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

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-black text-white px-6 py-2 rounded hover:bg-gray-600 transition"
              >
                Upload Product
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default UploadProduct;
