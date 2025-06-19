import { useState,useEffect } from "react";
import { useParams,Link,useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {showProduct } from '../api/index';
import {addToCart} from '../redux/reducers/cartSlice'

const ProductDetails = () => {

  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [product, setProduct] = useState({});
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
          if (!selectedSize) {
          alert("Please select a size before adding to cart.");
          return;
        }
      if(user!=null){
        dispatch(addToCart({...product,selectedSize})); // update global state
        navigate("/cart");
      }else{
        alert("Please login to add products to your cart.");
      }
    } catch (error) {
      console.log("Failed to add to cart:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await showProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchProducts();
  }, [id]);

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Left Column: Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={product.image}
              alt="Selected Product"
            />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{product.name}</h1>

          <p className="mt-5 text-3xl font-medium">Rs.{product.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
             {product.desc}
          </p>

          {/* Size Selector */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border py-2 px-4 ${
                    selectedSize === size ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 disabled:opacity-50"
            disabled={!selectedSize}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

