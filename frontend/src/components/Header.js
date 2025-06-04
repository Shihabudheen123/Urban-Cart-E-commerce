import React from "react";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assest/logo.png'

const Header = () => {
  return (
    <header className="h-20 shadow-sm bg-white fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        {/* Logo - Original Size */}
        <div className="flex-shrink-0 ">
          <Link to={"/"} className="block ">
            <img src={logo} alt="logo" className='h-16 w-auto'/>
          </Link>
        </div>
  
        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-md mx-8">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 rounded-full border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all duration-200 shadow-sm hover:shadow-md"
            />
            <button className="absolute right-0 top-0 h-full aspect-square bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-200">
              <GrSearch className="text-lg" />
            </button>
          </div>
        </div>
  
        {/* Navigation Icons */}
        <div className="flex items-center gap-6">
          {/* User Account */}
          <div className="text-gray-700 hover:text-red-600 cursor-pointer transition-colors duration-200 relative group">
            <FaRegCircleUser className="text-2xl" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Account
            </span>
          </div>
  
          {/* Shopping Cart */}
          <div className="text-gray-700 hover:text-red-600 cursor-pointer transition-colors duration-200 relative group">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </div>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Cart
            </span>
          </div>
  
          {/* Login Button */}
          <div>
            <Link
              to={"/login"}
              className="px-4 py-1.5 rounded-full text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-md hover:shadow-lg transition-all duration-200 font-medium text-sm"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
