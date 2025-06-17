import React from 'react';
import product1 from '../assets/latestProductImage/Product1.jpg';
import product2 from '../assets/latestProductImage/Product2.jpeg';   
import product3 from '../assets/latestProductImage/product3.webp';
import product4 from '../assets/latestProductImage/product4.jpeg';
import product5 from '../assets/latestProductImage/product5.jpeg';

const Collection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img
            className="h-3 sm:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII="
            alt=""
          />
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

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {[product1, product2, product5, product3, product4].map((img, idx) => {
            const names = [
              'Midnight Muse Bodycon',
              'Blush Bloom Bodycon',
              'Noir Nights Mini Bodycon',
              'Pastel Muse Bodycon',
              'Emerald Allure Bodycon'
            ];
            const prices = ['Rs.1999', 'Rs.1999', 'Rs.1999', 'Rs.2999', 'Rs.1899'];

            return (
              <a
                key={idx}
                className="text-gray-700 cursor-pointer block"
                href="#"
              >
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={img}
                    alt={names[idx]}
                    className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">
                  {names[idx]}
                </p>
                <p className="text-sm sm:text-base md:text-lg font-semibold">
                  {prices[idx]}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
