import React from 'react';

const Cart = () => {
  return (
    <div className="border-t pt-14 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-2xl mb-3">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            YOUR <span className="text-gray-700 font-medium">CART</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>

      {/* Cart Totals Section */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          {/* Cart Totals Header */}
          <div className="text-2xl">
            <div className="inline-flex gap-2 items-center mb-3">
              <p className="text-gray-500">
                CART <span className="text-gray-700 font-medium">TOTALS</span>
              </p>
              <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
          </div>

          {/* Totals Breakdown */}
          <div className="flex flex-col gap-2 mt-2 text-sm text-gray-800">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rs. 0.00</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>Rs. 10.00</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>Rs. 0.00</p>
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
