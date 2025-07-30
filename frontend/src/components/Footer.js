import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          <div>
            <h3 className='text-md font-bold mb-3'>About Us</h3>
            <p className='text-gray-300 text-xs'>
              Quality products, fast delivery, excellent service.
            </p>
            <div className='flex space-x-3 mt-3'>
              <a href="/" className='text-gray-300 hover:text-white transition-colors'>
                <FaFacebook size={16} />
              </a>
              <a href="/" className='text-gray-300 hover:text-white transition-colors'>
                <FaTwitter size={16} />
              </a>
              <a href="/" className='text-gray-300 hover:text-white transition-colors'>
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-md font-bold mb-3'>Quick Links</h3>
            <ul className='space-y-1 text-gray-300 text-xs'>
              <li><a href="/" className='hover:text-white transition-colors'>Home</a></li>
              <li><a href="/" className='hover:text-white transition-colors'>Shop</a></li>
              <li><a href="/" className='hover:text-white transition-colors'>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-md font-bold mb-3'>Help</h3>
            <ul className='space-y-1 text-gray-300 text-xs'>
              <li><a href="/" className='hover:text-white transition-colors'>FAQs</a></li>
              <li><a href="/" className='hover:text-white transition-colors'>Shipping</a></li>
              <li><a href="/" className='hover:text-white transition-colors'>Returns</a></li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-700 pt-4'>
          <p className='text-center text-gray-400 text-xs'>
            &copy; {new Date().getFullYear()} Your Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
