import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch } from 'react-redux';
import {removeCart,updateTempQuantity} from '../redux/reducers/cartSlice'
import CheckIcon from '@mui/icons-material/Check';

const Cart = () => {

  const {items,tempItems,totalPrice} = useSelector(state => state.cart);
  useSelector(state => console.log(state.cart));
  const dispatch = useDispatch();
  const handleRemoveItem = (id,selectedSize) =>{
    dispatch(removeCart({id,selectedSize}));
  }

  const handleUpdateQuantity = (id,quantity,selectedSize) =>{
    if(quantity == 0 || quantity == null) dispatch(removeCart({id ,selectedSize}));
    dispatch(updateTempQuantity({id,quantity,selectedSize}));
  }
  return (
      <div className="border-t pt-14">
        {/* Heading */}
        <div className="text-2xl mb-6">
          <div className="inline-flex gap-2 items-center">
            <p className="text-gray-500">
              YOUR <span className="text-gray-700 font-medium">CART</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
        </div>

        {/* Product Item 1 */}
        {items.length === 0 ?(
          <h2 className='text-2xl text-orange-600 text-center'>Cart is Empty</h2>
         ):(
            items.map((item,index)=>(
                <div key={`${item._id}-${item.selectedSize}-${index}`} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={item.image}
                    alt="Blush Bloom Bodycon"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>Rs. {item.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.selectedSize}</p>
                    </div>
                  </div>
                </div>
                <input
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min="1"
                  value={tempItems.find((tempItem) => tempItem._id == item._id && tempItem.selectedSize==item.selectedSize)?.quantity ?? item.quantity}
                  onChange={(e) => handleUpdateQuantity(item._id,parseInt(e.target.value),item.selectedSize)}
                />
                <DeleteIcon onClick={()=> handleRemoveItem(item._id,item.selectedSize)}/>
                
              </div>
            ))
          )
        }

        {/* Cart Totals Section */}
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            {/* Cart Totals Header */}
            <div className="text-2xl mb-4">
              <div className="inline-flex gap-2 items-center">
                <p className="text-gray-500">
                  CART <span className="text-gray-700 font-medium">TOTALS</span>
                </p>
                <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
              </div>
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-2 text-sm text-gray-800">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Rs. {totalPrice}</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>Rs. 10.00</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>Rs. {totalPrice+10.00}</p>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="w-full text-end">
              <button className="bg-black text-white text-sm my-8 px-8 py-3 hover:bg-gray-900 transition">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cart;
