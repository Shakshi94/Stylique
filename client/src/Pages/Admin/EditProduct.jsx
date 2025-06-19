import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useOutletContext, useParams } from 'react-router-dom';
import { showProduct, editProduct } from '../../api/index';

const EditProduct = () => {
  const { setMobileOpen } = useOutletContext();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    desc: '',
    sizes: '',
    categories: '',
    image: ''
  });

  const validateInput = () => {
    const { name, desc, price } = product;
    if (!name || !desc || !price) {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  };

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
    formData.append('price', product.price);
    formData.append('desc', product.desc);

    const sizesArray = Array.isArray(product.sizes)
      ? product.sizes
      : product.sizes.split(',').map((s) => s.trim());
    sizesArray.forEach((size) => formData.append('sizes[]', size));

    const categoriesArray = Array.isArray(product.categories)
      ? product.categories
      : product.categories.split(',').map((c) => c.trim());
    categoriesArray.forEach((cat) => formData.append('categories[]', cat));

    if (product.image instanceof File) {
      formData.append('image', product.image);
    }

    try {
      await editProduct(id, formData);
      alert('Product updated!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await showProduct(id);
        setProduct({
          ...data,
          sizes: data.sizes?.join(', ') || '',
          categories: data.categories?.join(', ') || '',
        });
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between h-16 bg-white border-b px-4 md:px-8">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="md:hidden text-gray-600" onClick={() => setMobileOpen(true)}>
            <MenuIcon className="h-6 w-6" />
          </button>
          <input
            className="w-full md:w-64 border rounded-md px-4 py-2 text-sm mt-5 mb-5"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="hidden md:flex items-center gap-2">
          <NavigateBeforeIcon className="text-gray-600" />
          <NavigateNextIcon className="text-gray-600" />
        </div>
      </div>

      {/* Form Section */}
      <div className="p-4 sm:p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Edit Product</h2>
            <p className="text-sm text-gray-500">Update your product details below.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
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
                  placeholder='e.g. "S, M, L"'
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="w-full"
                />
                {typeof product.image === 'string' && (
                  <img
                    src={product.image}
                    alt="Current"
                    className="w-24 h-24 object-cover mt-2 rounded border"
                  />
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="desc"
                  value={product.desc}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                  rows="5"
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
                  placeholder='e.g. "Unisex, Winter"'
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Update Product
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default EditProduct;
