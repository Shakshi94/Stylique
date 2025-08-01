import React, { useEffect,useState } from 'react';
import {showProducts} from '../api/index'
import {useNavigate} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Collection = () => {

  const [product,setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await showProducts();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  
  const handleClick = (id) => {
    navigate(`/collection/${id}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <ArrowForwardIosIcon className="h-3 sm:hidden"/>
        </p>

        {/* Filters - CATEGORIES */}
        <div className="border border-gray-300 pl-5 py-3 mt-6 hidden sm:block">
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Men" /> Men
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Women" /> Women
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Kids" /> Kids
            </label>
          </div>
        </div>

        {/* Filters - TYPE */}
        <div className="border border-gray-300 pl-5 py-3 my-5 hidden sm:block">
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Topwear" /> Topwear
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Bottomwear" /> Bottomwear
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Winterwear" /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Main Collection */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-500">
              ALL <span className="text-gray-700 font-medium">COLLECTIONS</span>
            </p>
            <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700" />
          </div>
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {product.map((item) => (
            <div
              key={item._id}
              className="text-gray-700 cursor-pointer block"
              onClick={() => handleClick(item._id)}
            >
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">
                {item.name}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-semibold">
                Rs.
                {item.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collection;
