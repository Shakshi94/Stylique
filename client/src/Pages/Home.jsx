import React from 'react';
import HeaderImage from '../assets/images/Header.jpg';
import product1 from '../assets/latestProductImage/Product1.jpg';
import product2 from '../assets/latestProductImage/Product2.jpeg';   
import product3 from '../assets/latestProductImage/product3.webp';
import product4 from '../assets/latestProductImage/product4.jpeg';
import product5 from '../assets/latestProductImage/product5.jpeg';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HeadphonesIcon from '@mui/icons-material/Headphones';




const  Home  = () => {

    return (
      <div>
          <div className="flex flex-col sm:flex-row border border-gray-400">
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                  <div className="flex items-center gap-2">
                      <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                      <p className=" font-medium text-sm md:text-base">OUR BESTSELLERS</p>
                  </div>
                  <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Stylique Arrivals</h1>
                  <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                      <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                  </div>
                </div>
            </div>
            <img className="w-full sm:w-1/2" src={HeaderImage} alt="Header"/>
          </div>  
          <div className="my-10">
                  <div className="text-center py-8 text-3xl">
                     <div className="inline-flex gap-2 items-center mb-3">
                        <p className="text-gray-500">LATEST <span className="text-gray-700 font-medium">COLLECTIONS</span></p>
                        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                     </div>
                     <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Stylique latest collection is where elegance meets trend. Fashion that speaks your style.</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product1} alt="Midnight Muse Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Midnight Muse Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product2} alt="Blush Bloom Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Blush Bloom Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product5} alt="Noir Nights Mini Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Noir Nights Mini Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product3} alt="Pastel Muse Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Pastel Muse Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.2999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product4} alt="Emerald Allure Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Emerald Allure Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1899</p>
                     </a>
                  </div>
          </div> 
          <div className="my-10">
                  <div className="text-center py-8 text-3xl">
                     <div className="inline-flex gap-2 items-center mb-3">
                        <p className="text-gray-500">Best <span className="text-gray-700 font-medium">Seller</span></p>
                        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                     </div>
                     <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Our best seller — loved by many, styled by all. Elevate your look with timeless charm.</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product1} alt="Midnight Muse Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Midnight Muse Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product2} alt="Blush Bloom Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Blush Bloom Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product5} alt="Noir Nights Mini Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Noir Nights Mini Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product3} alt="Pastel Muse Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Pastel Muse Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.2999</p>
                     </a>
                     <a className="text-gray-700 cursor-pointer block" href=''>
                        <div className="overflow-hidden rounded-lg shadow-sm"><img className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" src={product4} alt="Emerald Allure Bodycon"/></div>
                        <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-medium truncate">Emerald Allure Bodycon</p>
                        <p className="text-sm sm:text-base md:text-lg font-semibold">Rs.1899</p>
                     </a>
                  </div>
          </div>     
          <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
                  <div>
                     <CurrencyExchangeIcon className="w-12 m-auto mb-5 text-black" style={{width:48,height:48}}/>
                     <p className=" font-semibold">Easy Exchange Policy</p>
                     <p className=" text-gray-400">We offer hassle free  exchange policy</p>
                  </div>
                  <div>
                     <CheckCircleOutlineIcon className="w-12 m-auto mb-5 text-black" style={{width:48,height:48}}/>
                     <p className=" font-semibold">7 Days Return Policy</p>
                     <p className=" text-gray-400">We provide 7 days free return policy</p>
                  </div>
                  <div>
                     <HeadphonesIcon className="w-12 m-auto mb-5 text-black" style={{width:48,height:48}}/>
                     <p className=" font-semibold">Best customer support</p>
                     <p className=" text-gray-400">we provide 24/7 customer support</p>
                  </div>
               </div>
               <div className="text-center px-4">
                  <p className="text-sm font-semibold text-black mb-2">Join the Stylique Style Community</p>
                  <p className="text-2xl font-medium text-black">Subscribe now &amp; get 20% off</p>
                  <p className="text-black mt-3">Stylique  Fashion – Where Style Meets Confidence.</p>
                  <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
                  <input className="w-full sm:flex-1 outline-none py-3" type="email" placeholder="Enter your email" required="" fdprocessedid="126vxc"/>
                  <button type="submit" className="bg-black text-white text-xs px-10 py-4" fdprocessedid="zbms2b">SUBSCRIBE</button>
                  </form>
               </div>                          
      </div>

    );
}

export default Home;
