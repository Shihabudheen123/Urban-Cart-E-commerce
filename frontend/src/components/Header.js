import React from "react";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from '../assest/logo.png'
import logo from "../assest/lo.png"
import { useDispatch, useSelector } from "react-redux";
import summaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch();
  console.log("user header" , user);

  const handleLogout = async() =>{
    const fetchData = await fetch(summaryApi.logout_user.url,{
      method:summaryApi.logout_user.method,
      credentials: "include",
    })
    const data = await fetchData.json();
    if(data.success){
      toast.success(data.message);
      dispatch(setUserDetails(null))
    }
    if(data.error){
      toast.error(data.message);
    }
  }

  return (
    <header className="h-20 shadow-sm bg-white fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        {/* Logo - Original Size */}
        <div className="flex-shrink-0 ">
          <Link to={"/"} className="block ">
            <img src={logo} alt="logo" className='h-12 w-auto'/>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-md mx-8">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 rounded-full border border-gray-200 focus:border-[#1F74BA] focus:ring-2 focus:ring-[#1F74BA]/20 outline-none transition-all duration-200 shadow-sm hover:shadow-md"
            />
            <button className="absolute right-0 top-0 h-full aspect-square bg-[#1F74BA] hover:bg-[#185789] text-white rounded-full flex items-center justify-center transition-all duration-200">
              <GrSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center gap-6">
          {/* User Account */}
          <div className="text-gray-700 hover:text-[#1F74BA] cursor-pointer transition-colors duration-200 relative group">
            {
              user?.profilepic ? (
                <img src={user.profilepic} alt={user?.name} className="w-10 h-10 rounded-full"/>
              ):(
                <FaRegCircleUser className="text-2xl" />
              )
            }
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Account
            </span>
          </div>

          {/* Shopping Cart */}
          <div className="text-gray-700 hover:text-[#1F74BA] cursor-pointer transition-colors duration-200 relative group">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              <div className="absolute -top-2 -right-2 bg-[#1F74BA] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </div>
            </div>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Cart
            </span>
          </div>

          {/* Login Button */}
          <div>
            {
              user?._id ? (
                <button onClick={handleLogout} className="px-4 py-1.5 rounded-full text-white bg-gradient-to-r from-[#1F74BA] to-[#185789] hover:from-[#185789] hover:to-[#1F74BA] shadow-md hover:shadow-lg transition-all duration-200 font-medium text-sm">Logout</button>
              ):(
                <Link
                  to={"/login"}
                  className="px-4 py-1.5 rounded-full text-white bg-gradient-to-r from-[#1F74BA] to-[#185789] hover:from-[#185789] hover:to-[#1F74BA] shadow-md hover:shadow-lg transition-all duration-200 font-medium text-sm"
                >
                  Login
                </Link>
              )
            }

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
