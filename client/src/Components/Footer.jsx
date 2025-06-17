import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="my-10 mt-40 text-sm text-gray-600">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        
        {/* Company Description */}
        <div>
          <div className="mb-5 text-2xl font-bold text-black">STYLIQUE</div>
          <p className="w-full md:w-2/3">
            STYLIQUE Fashion is your go-to destination for bold, contemporary style.
            From sleek bodycon dresses to everyday essentials, we blend modern design 
            with timeless elegance. Crafted with premium fabrics and a perfect fit, 
            our pieces inspire confidence and individuality. Step into your spotlight 
            with STYLIQUE — where fashion speaks your language.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-black">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="sm:text-left">
          <p className="text-xl font-semibold mb-5 text-black text-center">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-center">
            <li><strong>Phone:</strong> XXXXX-XXXXX</li>
            <li><strong>Email:</strong> stylique@gmail.com</li>
          </ul>
          <p className="text-lg font-semibold mt-5 text-black text-center">Address:</p>
          <ul className="ml-5 text-center">
            <li>Jasopur, Jaunpur</li>
            <li>Uttar Pradesh - 222001</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10">
        <hr />
        <p className="py-5 text-center text-gray-500 text-sm">
          &copy; 2025 stylique.com - All Rights Reserved.
        </p>

        <div className="flex flex-col items-center gap-2 pb-10">
          <p className="text-gray-700 font-medium">
            Follow us on Instagram for daily style inspo
          </p>
          <a
            href="https://www.instagram.com/chlothzy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <InstagramIcon
              className="text-pink-600 hover:text-pink-800 transition duration-300"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
